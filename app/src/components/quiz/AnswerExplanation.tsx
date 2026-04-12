"use client";

import { renderCodeSpans } from "@/lib/render-code-spans";

interface AnswerExplanationProps {
  text: string;
}

export function AnswerExplanation({ text }: AnswerExplanationProps) {
  return (
    <div className="ml-[2.625rem] mt-1 mb-1 text-[13px] leading-relaxed text-muted-foreground motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300">
      <span className="select-none mr-1 text-muted-foreground/50">↳</span>
      {renderCodeSpans(text)}
    </div>
  );
}
