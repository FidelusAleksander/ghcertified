import React from "react";

/**
 * Renders inline Markdown in quiz text: fenced code blocks, inline code spans,
 * markdown links [text](url), and bare URLs.
 */
export function renderInlineMarkdown(text: string, options?: { skipLinks?: boolean }): React.ReactNode[] {
  // 1. Split out fenced code blocks first (they should not be parsed further)
  const fencedRe = /(```[^\n]*\n[\s\S]*?```)/g;
  const segments = text.split(fencedRe);

  return segments.flatMap((segment, i): React.ReactNode[] => {
    if (segment.startsWith("```")) {
      const firstNewline = segment.indexOf("\n");
      const code = segment
        .slice(firstNewline + 1, segment.lastIndexOf("```"))
        .trimEnd();
      return [
        <pre
          key={`fence-${i}`}
          className="font-mono text-xs bg-muted/80 border border-border rounded-lg p-3 my-2 overflow-x-auto whitespace-pre"
        >
          <code>{code}</code>
        </pre>,
      ];
    }

    // 2. Within plain segments, split by inline code spans first to protect them
    const codeParts = segment.split(/(`[^`]+`)/g);
    return codeParts.flatMap((codePart, j): React.ReactNode[] => {
      if (codePart.startsWith("`") && codePart.endsWith("`")) {
        return [
          <code
            key={`${i}-${j}`}
            className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded text-foreground"
          >
            {codePart.slice(1, -1)}
          </code>,
        ];
      }

      // 3. In non-code text, parse markdown links and bare URLs (unless skipped)
      if (options?.skipLinks) {
        return [<span key={`${i}-${j}`}>{codePart}</span>];
      }
      return renderLinksAndText(codePart, `${i}-${j}`);
    });
  });
}

const LINK_RE = /(\[([^\]]+)\]\((https?:\/\/[^)]+)\))|(https?:\/\/[^\s<>)\]]+)/g;

function renderLinksAndText(text: string, keyPrefix: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  LINK_RE.lastIndex = 0;
  while ((match = LINK_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(
        <span key={`${keyPrefix}-t${lastIndex}`}>
          {text.slice(lastIndex, match.index)}
        </span>,
      );
    }

    if (match[1]) {
      // Markdown link [text](url)
      nodes.push(
        <a
          key={`${keyPrefix}-l${match.index}`}
          href={match[3]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:text-primary/80 break-all"
        >
          {match[2]}
        </a>,
      );
    } else {
      // Bare URL
      nodes.push(
        <a
          key={`${keyPrefix}-l${match.index}`}
          href={match[0]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline underline-offset-2 hover:text-primary/80 break-all"
        >
          {match[0]}
        </a>,
      );
    }

    lastIndex = LINK_RE.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(
      <span key={`${keyPrefix}-t${lastIndex}`}>
        {text.slice(lastIndex)}
      </span>,
    );
  }

  return nodes;
}
