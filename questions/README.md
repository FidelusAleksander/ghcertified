# Question Writing Guide

This guide covers everything you need to write questions for [ghcertified](https://github.com/FidelusAleksander/ghcertified). Questions are parsed by [mdquiz](https://github.com/FidelusAleksander/mdquiz) — a Markdown quiz parser.

## File basics

- One question per file
- Name: `question-XXX.md` (zero-padded, e.g. `question-042.md`)
- Place in the right directory:
  - `questions/en/actions/`
  - `questions/en/admin/`
  - `questions/en/advanced_security/`
  - `questions/en/copilot/`
  - `questions/en/foundations/`

## Minimal template

```markdown
---
question: "Which GitHub Actions syntax correctly defines a job that runs on Ubuntu?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idruns-on"
---

- [x] `runs-on: ubuntu-latest`
- [ ] `os: ubuntu-latest`
- [ ] `platform: ubuntu-latest`
- [ ] `environment: ubuntu-latest`
```

That's it — frontmatter with `question`, a documentation link, and answers. Everything else below is optional.

## Features

### Frontmatter

The `question` field is required. The `documentation` field is optional — use it for a link to official GitHub documentation.

```yaml
---
question: "Your question text here"
documentation: "https://docs.github.com/en/..."
---
```

The documentation link shows as a "Learn more" link after the user answers the question.

Do **not** include phrases like "Select 2" or "Choose 3" in the question text — the app handles answer count display automatically.

### Answers

Use Markdown list items with checkboxes. Mark correct answers with `[x]`, incorrect with `[ ]`.

**Single-select** — exactly one `[x]`:
```markdown
- [x] Correct answer
- [ ] Wrong answer
- [ ] Wrong answer
- [ ] Wrong answer
```

**Multi-select** — two or more `[x]`:
```markdown
- [x] First correct answer
- [x] Second correct answer
- [ ] Wrong answer
- [ ] Wrong answer
```

Aim for 2–6 answer options.

### Answer ordering

Answers are automatically shuffled in the application . You don't need to worry about the position of correct answers in your markdown file. Placing correct answers first (as shown in the examples above) is a recommended practice to improve readability.

### Answer explanations

Add a blockquote (`>`) on the line immediately after an answer to explain why it's correct or incorrect. These are optional and help learners understand the reasoning.

```markdown
- [ ] Scheduled workflows run on the specific commit on last modified branch.
> incorrect, both specific commit and on last modified branch
- [x] Scheduled workflows run on the latest commit on the repository default branch.
- [ ] Scheduled workflows run on the latest commit on the main branch.
> latest commit is correct but the main branch is not
```

Keep explanations short — one line is ideal.

Explanations support inline Markdown: backtick code spans (`` `code` ``), markdown links (`[text](url)`), and bare URLs are rendered as clickable links.

```markdown
- [x] Use `GITHUB_TOKEN` for authentication
> See [authentication docs](https://docs.github.com/en/actions/security-guides/automatic-token-authentication) for more details
```

### Code blocks

Add a fenced code block between the frontmatter and the answers. It renders above the answer options.

````markdown
---
question: "What is the effect of adding the `paths-ignore` keyword to this workflow?"
documentation: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning"
---

```yaml
on:
  pull_request:
    branches: [main]
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'
```

- [x] Avoids unnecessary scans when irrelevant files change
- [ ] Tells CodeQL to omit all `.txt` and `.md` files from analysis
- [ ] Prevents CodeQL from running on matching pull requests
````

Code blocks can also appear inside individual answer options:

````markdown
- [x] By including one of these keywords in the commit message:
```yaml
[skip ci]
[ci skip]
[no ci]
```

- [ ] By setting `SKIP_WORKFLOW` in the commit message
````

## Quality guidelines

### ✅ Do

- Write clear, specific questions that test one concept
- Include a `documentation` link to official GitHub docs in frontmatter
- Create plausible wrong answers based on common misconceptions
- Use inline code formatting for technical terms (`` `runs-on` ``, `` `GITHUB_TOKEN` ``)
- Keep the question text concise

### ❌ Don't

- Copy questions from official GitHub certification exams
- Write trick questions or use misleading wording
- Use "All of the above" or "None of the above" as options
- Include phrases like "Select 2" or "Choose the correct answer" in the question text
- Write joke answers that are obviously wrong

## Parser reference

Questions are parsed by [FidelusAleksander/mdquiz](https://github.com/FidelusAleksander/mdquiz). See its README for the full specification of supported Markdown syntax.
