// @vitest-environment jsdom
import { render } from "@testing-library/react";
import { renderCodeSpans } from "@/lib/render-code-spans";
import { describe, it, expect } from "vitest";

describe("renderCodeSpans", () => {
  it("renders plain text as a span", () => {
    const { container } = render(<>{renderCodeSpans("hello world")}</>);
    const span = container.querySelector("span");
    expect(span).not.toBeNull();
    expect(span!.textContent).toBe("hello world");
    expect(container.querySelector("code")).toBeNull();
    expect(container.querySelector("pre")).toBeNull();
  });

  it("renders inline backticks as <code> with correct text", () => {
    const { container } = render(<>{renderCodeSpans("use `git status` now")}</>);
    const code = container.querySelector("code");
    expect(code).not.toBeNull();
    expect(code!.textContent).toBe("git status");
  });

  it("renders fenced code block as <pre> containing <code>", () => {
    const input = "```js\nconst x = 1;\n```";
    const { container } = render(<>{renderCodeSpans(input)}</>);
    const pre = container.querySelector("pre");
    expect(pre).not.toBeNull();
    const code = pre!.querySelector("code");
    expect(code).not.toBeNull();
    expect(code!.textContent).toBe("const x = 1;");
  });

  it("renders mixed content: text + inline code + fenced block", () => {
    const input = "Run `npm install` then:\n```sh\nnpm run build\n```\nDone.";
    const { container } = render(<>{renderCodeSpans(input)}</>);

    const hasInlineCode = Array.from(container.querySelectorAll("code")).some(
      (el) => el.textContent === "npm install" && !el.closest("pre")
    );
    expect(hasInlineCode).toBe(true);

    const pre = container.querySelector("pre");
    expect(pre).not.toBeNull();
    expect(pre!.querySelector("code")!.textContent).toBe("npm run build");

    expect(container.textContent).toContain("Run");
    expect(container.textContent).toContain("Done.");
  });

  it("renders multiple inline code spans in one string", () => {
    const input = "Use `foo` and `bar` together";
    const { container } = render(<>{renderCodeSpans(input)}</>);
    const codes = container.querySelectorAll("code");
    expect(codes).toHaveLength(2);
    expect(codes[0].textContent).toBe("foo");
    expect(codes[1].textContent).toBe("bar");
  });

  it("does not leak language tag into fenced block output", () => {
    const input = "```yaml\nkey: value\n```";
    const { container } = render(<>{renderCodeSpans(input)}</>);
    const code = container.querySelector("pre code");
    expect(code).not.toBeNull();
    expect(code!.textContent).toBe("key: value");
    expect(code!.textContent).not.toContain("yaml");
  });

  it("handles multiple fenced blocks in one string", () => {
    const input = "before\n```js\nfoo()\n```\nmiddle\n```py\nbar()\n```\nafter";
    const { container } = render(<>{renderCodeSpans(input)}</>);
    const pres = container.querySelectorAll("pre");
    expect(pres).toHaveLength(2);
    expect(pres[0].querySelector("code")!.textContent).toBe("foo()");
    expect(pres[1].querySelector("code")!.textContent).toBe("bar()");
    expect(container.textContent).toContain("before");
    expect(container.textContent).toContain("middle");
    expect(container.textContent).toContain("after");
  });
});
