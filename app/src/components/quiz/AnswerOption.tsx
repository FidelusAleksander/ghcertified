"use client";

/**
 * AnswerOption — renders a single answer choice.
 *
 * Uses radio buttons for single-choice, checkboxes for multi-select (F07).
 * After submission, shows green/red feedback for correct/incorrect (F06).
 *
 * "use client" because it handles click events and reads component state.
 */

import { cn } from "@/lib/utils";

interface AnswerOptionProps {
  id: string;
  text: string;
  isCorrect: boolean;
  isSelected: boolean;
  isSubmitted: boolean;
  isMultiSelect: boolean;
  onToggle: () => void;
}

export function AnswerOption({
  text,
  isCorrect,
  isSelected,
  isSubmitted,
  isMultiSelect,
  onToggle,
}: AnswerOptionProps) {
  // After submit: green if correct+selected, red if incorrect+selected, dim green if correct but missed
  const feedbackClass = isSubmitted
    ? isCorrect && isSelected
      ? "border-success/60 bg-success/10 text-success-foreground"
      : !isCorrect && isSelected
        ? "border-destructive/60 bg-destructive/10"
        : isCorrect
          ? "border-success/30 bg-success/5"
          : "opacity-50"
    : isSelected
      ? "border-primary/60 bg-primary/10"
      : "border-border hover:border-primary/40 hover:bg-secondary/50";

  return (
    <button
      type="button"
      onClick={isSubmitted ? undefined : onToggle}
      disabled={isSubmitted}
      className={cn(
        "flex w-full items-start gap-3 rounded-lg border px-4 py-3 text-left text-sm transition-colors",
        feedbackClass,
        isSubmitted && "cursor-default"
      )}
    >
      {/* Indicator */}
      <span
        className={cn(
          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs font-bold",
          isMultiSelect ? "rounded" : "rounded-full",
          isSelected
            ? isSubmitted
              ? isCorrect
                ? "border-success bg-success text-success-foreground"
                : "border-destructive bg-destructive text-white"
              : "border-primary bg-primary text-primary-foreground"
            : isSubmitted && isCorrect
              ? "border-success/50"
              : "border-muted-foreground/30"
        )}
      >
        {isSelected && "✓"}
      </span>

      {/* Answer text — render backtick code spans */}
      <span className="flex-1 leading-relaxed">
        {renderCodeSpans(text)}
      </span>

      {/* Post-submit label */}
      {isSubmitted && isCorrect && (
        <span className="shrink-0 text-xs font-medium text-success">
          Correct
        </span>
      )}
    </button>
  );
}

/**
 * Very simple parser: turns `backtick` text into <code> spans.
 * Covers F10 (technical content display) for inline code in answers.
 */
function renderCodeSpans(text: string): React.ReactNode[] {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="rounded bg-secondary px-1.5 py-0.5 font-mono text-xs"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={i}>{part}</span>;
  });
}
