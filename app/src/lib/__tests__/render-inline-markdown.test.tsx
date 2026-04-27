// @vitest-environment jsdom
import { render } from "@testing-library/react";
import { renderInlineMarkdown } from "@/lib/render-inline-markdown";
import { describe, it, expect } from "vitest";

describe("renderInlineMarkdown", () => {
  it("renders plain text as a span", () => {
    const { container } = render(<>{renderInlineMarkdown("hello world")}</>);
    expect(container.textContent).toBe("hello world");
    expect(container.querySelector("code")).toBeNull();
    expect(container.querySelector("pre")).toBeNull();
  });

  it("renders inline backticks as <code> with correct text", () => {
    const { container } = render(<>{renderInlineMarkdown("use `git status` now")}</>);
    const code = container.querySelector("code");
    expect(code).not.toBeNull();
    expect(code!.textContent).toBe("git status");
  });

  it("renders fenced code block as <pre> containing <code>", () => {
    const input = "```js\nconst x = 1;\n```";
    const { container } = render(<>{renderInlineMarkdown(input)}</>);
    const pre = container.querySelector("pre");
    expect(pre).not.toBeNull();
    const code = pre!.querySelector("code");
    expect(code).not.toBeNull();
    expect(code!.textContent).toBe("const x = 1;");
  });

  it("renders mixed content: text + inline code + fenced block", () => {
    const input = "Run `npm install` then:\n```sh\nnpm run build\n```\nDone.";
    const { container } = render(<>{renderInlineMarkdown(input)}</>);

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
    const { container } = render(<>{renderInlineMarkdown(input)}</>);
    const codes = container.querySelectorAll("code");
    expect(codes).toHaveLength(2);
    expect(codes[0].textContent).toBe("foo");
    expect(codes[1].textContent).toBe("bar");
  });

  it("does not leak language tag into fenced block output", () => {
    const input = "```yaml\nkey: value\n```";
    const { container } = render(<>{renderInlineMarkdown(input)}</>);
    const code = container.querySelector("pre code");
    expect(code).not.toBeNull();
    expect(code!.textContent).toBe("key: value");
    expect(code!.textContent).not.toContain("yaml");
  });

  it("handles multiple fenced blocks in one string", () => {
    const input = "before\n```js\nfoo()\n```\nmiddle\n```py\nbar()\n```\nafter";
    const { container } = render(<>{renderInlineMarkdown(input)}</>);
    const pres = container.querySelectorAll("pre");
    expect(pres).toHaveLength(2);
    expect(pres[0].querySelector("code")!.textContent).toBe("foo()");
    expect(pres[1].querySelector("code")!.textContent).toBe("bar()");
    expect(container.textContent).toContain("before");
    expect(container.textContent).toContain("middle");
    expect(container.textContent).toContain("after");
  });

  it("does not leak language tag when fenced block tag has trailing space", () => {
    const input = "```yaml \nkey: value\n```";
    const { container } = render(<>{renderInlineMarkdown(input)}</>);
    const code = container.querySelector("pre code");
    expect(code).not.toBeNull();
    expect(code!.textContent).toBe("key: value");
    expect(code!.textContent).not.toContain("yaml");
  });

  // ── Link tests ────────────────────────────────────────────────────

  it("renders a markdown link as <a>", () => {
    const input = "See [docs](https://example.com) for details";
    const { container } = render(<>{renderInlineMarkdown(input)}</>);
    const link = container.querySelector("a");
    expect(link).not.toBeNull();
    expect(link!.href).toBe("https://example.com/");
    expect(link!.textContent).toBe("docs");
    expect(link!.target).toBe("_blank");
    expect(link!.rel).toBe("noopener noreferrer");
    expect(container.textContent).toContain("See");
    expect(container.textContent).toContain("for details");
  });

  it("renders a bare URL as <a>", () => {
    const input = "Visit https://example.com/path for info";
    const { container } = render(<>{renderInlineMarkdown(input)}</>);
    const link = container.querySelector("a");
    expect(link).not.toBeNull();
    expect(link!.textContent).toBe("https://example.com/path");
    expect(link!.target).toBe("_blank");
  });

  it("renders multiple links in one string", () => {
    const input = "See [a](https://a.com) and [b](https://b.com)";
    const { container } = render(<>{renderInlineMarkdown(input)}</>);
    const links = container.querySelectorAll("a");
    expect(links).toHaveLength(2);
    expect(links[0].textContent).toBe("a");
    expect(links[1].textContent).toBe("b");
  });

  it("does not parse links inside inline code spans", () => {
    const input = "Use `[not](https://link.com)` literally";
    const { container } = render(<>{renderInlineMarkdown(input)}</>);
    expect(container.querySelector("a")).toBeNull();
    const code = container.querySelector("code");
    expect(code!.textContent).toBe("[not](https://link.com)");
  });

  it("renders mixed code spans, links, and plain text", () => {
    const input = "Run `cmd` then see [docs](https://example.com) or visit https://other.com";
    const { container } = render(<>{renderInlineMarkdown(input)}</>);
    expect(container.querySelector("code")!.textContent).toBe("cmd");
    const links = container.querySelectorAll("a");
    expect(links).toHaveLength(2);
    expect(links[0].textContent).toBe("docs");
    expect(links[1].textContent).toBe("https://other.com");
  });

  // ── skipLinks option ──────────────────────────────────────────────

  it("does not render links when skipLinks is true", () => {
    const input = "See [docs](https://example.com) and https://other.com";
    const { container } = render(<>{renderInlineMarkdown(input, { skipLinks: true })}</>);
    expect(container.querySelector("a")).toBeNull();
    expect(container.textContent).toContain("See [docs](https://example.com) and https://other.com");
  });

  it("still renders code spans when skipLinks is true", () => {
    const input = "Use `git status` and see [docs](https://example.com)";
    const { container } = render(<>{renderInlineMarkdown(input, { skipLinks: true })}</>);
    expect(container.querySelector("code")!.textContent).toBe("git status");
    expect(container.querySelector("a")).toBeNull();
  });
});
