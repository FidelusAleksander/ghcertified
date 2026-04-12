"use client";

import React from "react";
import { renderCodeSpans } from "@/lib/render-code-spans";

interface AnswerExplanationProps {
  text: string;
}

const URL_RE = /(https?:\/\/[^\s]+)/;

export function AnswerExplanation({ text }: AnswerExplanationProps) {
  const parts = text.split(new RegExp(URL_RE.source, "g"));

  return (
    <div className="ml-[2.625rem] mt-1 mb-1 text-[13px] leading-relaxed text-muted-foreground motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300">
      <span className="select-none mr-1 text-muted-foreground/50">↳</span>
      {parts.map((part, i) =>
        URL_RE.test(part) ? (
          <a
            key={i}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-2 hover:text-primary/80 break-all"
          >
            {part}
          </a>
        ) : (
          <React.Fragment key={i}>{renderCodeSpans(part)}</React.Fragment>
        ),
      )}
    </div>
  );
}
