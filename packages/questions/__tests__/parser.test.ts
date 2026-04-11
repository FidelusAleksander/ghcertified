import { describe, it, expect } from "vitest";
import { parseQuestionFile } from "../src/parser.js";

describe("parseQuestionFile", () => {
  it("parses a simple single-choice question (ordered list)", () => {
    const md = `---
title: "Question 042"
question: "Which syntax defines a job that runs on Ubuntu?"
---

> https://docs.github.com/en/actions/runs-on

1. [x] \`runs-on: ubuntu-latest\`
1. [ ] \`os: ubuntu-latest\`
1. [ ] \`platform: ubuntu-latest\`
1. [ ] \`environment: ubuntu-latest\`
`;
    const q = parseQuestionFile(md, "q042");
    expect(q.id).toBe("q042");
    expect(q.question).toBe("Which syntax defines a job that runs on Ubuntu?");
    expect(q.answers).toHaveLength(4);
    expect(q.answers[0].isCorrect).toBe(true);
    expect(q.answers[0].text).toBe("`runs-on: ubuntu-latest`");
    expect(q.answers[1].isCorrect).toBe(false);
    expect(q.isMultiSelect).toBe(false);
    expect(q.hint).toBe("https://docs.github.com/en/actions/runs-on");
    expect(q.frontmatter.title).toBe("Question 042");
  });

  it("parses a multi-choice question (unordered list)", () => {
    const md = `---
title: "Question 003"
question: "Which permissions levels are available?"
---

> https://docs.github.com/en/actions/permissions

- [x] Workflow level
- [x] Job level
- [ ] Step level
`;
    const q = parseQuestionFile(md, "q003");
    expect(q.isMultiSelect).toBe(true);
    expect(q.answers).toHaveLength(3);
    expect(q.answers[0].isCorrect).toBe(true);
    expect(q.answers[1].isCorrect).toBe(true);
    expect(q.answers[2].isCorrect).toBe(false);
  });

  it("parses code block in question body (preamble)", () => {
    const md = `---
title: "Question 062"
question: "What does paths-ignore do?"
---

\`\`\`yaml
on:
  pull_request:
    paths-ignore:
      - '**/*.md'
\`\`\`

> https://docs.github.com/code-scanning

- [x] Avoiding unnecessary scans
- [ ] Omit files from analysis
- [ ] Prevent CodeQL from running
`;
    const q = parseQuestionFile(md, "q062");
    expect(q.codeBlock).toContain("paths-ignore");
    expect(q.codeBlock).toContain("```yaml");
    expect(q.answers).toHaveLength(3);
    expect(q.hint).toBe("https://docs.github.com/code-scanning");
  });

  it("parses code blocks inside answer text", () => {
    const md = `---
title: "Question 068"
question: "How to run a step only if secret is set?"
---

> https://docs.github.com/secrets

- [x] Set secret as env var, then reference it
\`\`\`yaml
env:
  my_secret: \${{ secrets.MY_SECRET }}
steps:
  - if: \${{ env.my_secret != '' }}
\`\`\`
- [ ] Use conditional on job level
\`\`\`yaml
if: \${{ secrets.MY_SECRET == '' }}
\`\`\`
> secrets cannot be directly referenced
- [ ] Use conditional on step level
`;
    const q = parseQuestionFile(md, "q068");
    expect(q.answers).toHaveLength(3);
    expect(q.answers[0].isCorrect).toBe(true);
    expect(q.answers[0].text).toContain("```yaml");
    expect(q.answers[0].text).toContain("my_secret");
    expect(q.answers[1].text).toContain("```yaml");
  });

  it("throws when frontmatter is missing question field", () => {
    const md = `---
title: "Bad"
---

- [x] Answer
`;
    expect(() => parseQuestionFile(md, "bad")).toThrow(
      'Missing "question"',
    );
  });

  it("throws when no answers found", () => {
    const md = `---
title: "Bad"
question: "No answers?"
---

Just some text.
`;
    expect(() => parseQuestionFile(md, "bad")).toThrow(
      "No answers found",
    );
  });

  it("handles question with no hint", () => {
    const md = `---
title: "Question 001"
question: "Simple question?"
---

- [x] Yes
- [ ] No
`;
    const q = parseQuestionFile(md, "q001");
    expect(q.hint).toBeUndefined();
    expect(q.answers).toHaveLength(2);
  });

  it("assigns sequential answer IDs", () => {
    const md = `---
title: "Q1"
question: "Test?"
---

- [ ] A
- [x] B
- [ ] C
- [ ] D
`;
    const q = parseQuestionFile(md, "q001");
    expect(q.answers.map((a) => a.id)).toEqual(["a1", "a2", "a3", "a4"]);
    expect(q.answers[1].isCorrect).toBe(true);
  });
});
