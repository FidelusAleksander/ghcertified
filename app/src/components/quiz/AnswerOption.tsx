"use client";

import { cn } from "@/lib/utils";
import { renderInlineMarkdown } from "@/lib/render-inline-markdown";
import { AnswerExplanation } from "@/components/quiz/AnswerExplanation";
import type { AnswerOption as AnswerOptionType } from "@/types/quiz";

export interface AnswerOptionProps {
  answer: AnswerOptionType;
  index: number;
  isMultiSelect: boolean;
  isSelected: boolean;
  showResults: boolean;
  isDisabled: boolean;
  dimUnselected?: boolean;
  onSelect: (id: string) => void;
  answerOptionLabel: string;
  yourAnswerLabel: string;
}

export function AnswerOption({
  answer,
  isMultiSelect,
  isSelected,
  showResults,
  isDisabled,
  dimUnselected = false,
  onSelect,
  answerOptionLabel,
  yourAnswerLabel,
}: AnswerOptionProps) {
  const isCorrectOpt = answer.isCorrect;

  const optionClass = cn(
    "w-full flex items-start gap-3.5 p-3.5 border-[1.5px] rounded-xl transition-all duration-150 text-[14.5px] leading-relaxed text-left focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
    !isDisabled && "cursor-pointer motion-safe:active:scale-[0.98]",
    showResults && isCorrectOpt && "border-success bg-success-soft",
    showResults && isSelected && !isCorrectOpt && "border-destructive bg-destructive-soft",
    showResults && !isSelected && !isCorrectOpt && (dimUnselected ? "border-border bg-card opacity-60" : "border-border bg-card"),
    !showResults && isSelected && "border-primary bg-primary-soft",
    !showResults && !isSelected && "border-border bg-card hover:border-primary hover:bg-primary-soft",
  );

  const shape = isMultiSelect ? "rounded-[5px]" : "rounded-full";
  const selectorClass = cn(
    "size-5 border-2 flex-shrink-0 mt-0.5 flex items-center justify-center",
    shape,
    showResults && isCorrectOpt && "border-success bg-success",
    showResults && isSelected && !isCorrectOpt && "border-destructive bg-destructive",
    showResults && !isSelected && !isCorrectOpt && "border-border-dark",
    !showResults && isSelected && "border-primary bg-primary",
    !showResults && !isSelected && "border-border-dark",
  );

  const showDot =
    (isSelected && !showResults) ||
    (showResults && (isCorrectOpt || isSelected));

  return (
    <div>
      <button
        type="button"
        role={isMultiSelect ? "checkbox" : "radio"}
        aria-checked={isSelected}
        aria-label={answerOptionLabel}
        onClick={() => onSelect(answer.id)}
        className={optionClass}
        disabled={isDisabled}
      >
        <div className={selectorClass}>
          {showDot && <div className="size-2 rounded-full bg-card" />}
        </div>
        <div className="text-foreground flex-1 min-w-0">{renderInlineMarkdown(answer.text, { skipLinks: true })}</div>
        {showResults && isSelected && (
          <span className={cn(
            "text-[11px] font-semibold uppercase tracking-wide whitespace-nowrap px-2 py-0.5 rounded-md motion-safe:animate-in motion-safe:fade-in motion-safe:zoom-in-75 motion-safe:duration-200",
            isCorrectOpt ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive",
          )}>
            {yourAnswerLabel}
          </span>
        )}
      </button>
      {showResults && answer.explanation && (
        <AnswerExplanation text={answer.explanation} />
      )}
    </div>
  );
}
