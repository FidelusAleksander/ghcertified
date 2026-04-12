import React from "react";

/**
 * Turns `backtick` text into <code> spans and fenced blocks (```...```) into <pre>.
 * Used by Quiz and QuestionBrowser to render question/answer text.
 */
export function renderCodeSpans(text: string): React.ReactNode[] {
  const fencedRe = /(```\w*\n[\s\S]*?```)/g;
  const segments = text.split(fencedRe);

  return segments.flatMap((segment, i) => {
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

    const parts = segment.split(/(`[^`]+`)/g);
    return parts.map((part, j) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code
            key={`${i}-${j}`}
            className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded text-foreground"
          >
            {part.slice(1, -1)}
          </code>
        );
      }
      return <span key={`${i}-${j}`}>{part}</span>;
    });
  });
}
