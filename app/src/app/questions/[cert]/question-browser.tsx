"use client";

/**
 * QuestionBrowser — inline single-question viewer for the Questions library.
 *
 * Two-column layout:
 *   Left: compact numbered grid for quick navigation
 *   Right: question card with answer options, check/reveal, prev/next
 *
 * Stateless — no scoring, no flagging, no shuffling, no results screen.
 */

import { useState, useCallback } from "react";
import type { Question } from "@/types/quiz";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, ChevronLeft, ChevronRight } from "lucide-react";

interface QuestionBrowserProps {
  questions: Question[];
}

export function QuestionBrowser({ questions }: QuestionBrowserProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, Set<string>>>({});
  const [revealedMap, setRevealedMap] = useState<Record<number, boolean>>({});

  const currentQuestion = questions[currentIndex];
  const currentSelected = selectedAnswers[currentQuestion?.id] ?? new Set<string>();
  const isRevealed = revealedMap[currentIndex] || false;

  const handleToggleAnswer = useCallback(
    (answerId: string) => {
      if (isRevealed || !currentQuestion) return;

      setSelectedAnswers((prev) => {
        const qId = currentQuestion.id;
        const current = new Set(prev[qId] ?? []);

        if (currentQuestion.isMultiSelect) {
          if (current.has(answerId)) current.delete(answerId);
          else current.add(answerId);
        } else {
          current.clear();
          current.add(answerId);
        }

        return { ...prev, [qId]: current };
      });
    },
    [currentQuestion, isRevealed],
  );

  const handleCheck = () => {
    if (currentSelected.size === 0) return;
    setRevealedMap((prev) => ({ ...prev, [currentIndex]: true }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex((i) => i + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  const isCurrentCorrect = () => {
    if (!currentQuestion) return false;
    const correctIds = new Set(currentQuestion.answers.filter((a) => a.isCorrect).map((a) => a.id));
    return correctIds.size === currentSelected.size && [...correctIds].every((id) => currentSelected.has(id));
  };

  if (!currentQuestion) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 items-start">
      {/* Sidebar — numbered grid */}
      <Card className="shadow-sm border-[1.5px] lg:sticky lg:top-6">
        <CardHeader className="p-4 pb-0">
          <span className="font-display text-[11px] font-bold tracking-[1px] uppercase text-muted-foreground">
            Questions
          </span>
        </CardHeader>
        <CardContent className="p-4 pt-3">
          {/* Mobile: horizontal scroll strip */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 lg:hidden">
            {questions.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "size-[30px] rounded-[7px] text-[11px] font-bold border flex-shrink-0 flex items-center justify-center cursor-pointer transition-colors",
                  i === currentIndex
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {i + 1}
              </button>
            ))}
          </div>
          {/* Desktop: wrapping grid */}
          <div className="hidden lg:flex flex-wrap gap-x-1.5 gap-y-1.5">
            {questions.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "size-[30px] rounded-[7px] text-[11px] font-bold border flex items-center justify-center cursor-pointer transition-colors",
                  i === currentIndex
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Question card */}
      <Card className="overflow-hidden shadow-sm border-[1.5px]">
        <CardHeader className="bg-foreground px-4 sm:px-7 py-4 sm:py-5 flex flex-row items-center justify-between gap-3 space-y-0">
          <span className="font-display text-[13px] font-bold text-card/50 tracking-wide">
            QUESTION {currentIndex + 1} OF {questions.length}
          </span>
          <Badge
            variant="secondary"
            className="bg-card/10 text-card/70 hover:bg-card/10 text-[11px] font-semibold tracking-wide uppercase"
          >
            {currentQuestion.isMultiSelect ? "Multi-select" : "Single choice"}
          </Badge>
        </CardHeader>

        <CardContent className="p-4 sm:p-7 text-left">
          {/* Question text */}
          <div className="text-[17px] font-medium text-foreground leading-relaxed mb-6 text-left">
            {renderCodeSpans(currentQuestion.question)}
            {currentQuestion.codeBlock && renderCodeSpans(currentQuestion.codeBlock)}
          </div>

          {currentQuestion.isMultiSelect && (
            <div className="flex items-center gap-1.5 text-[12.5px] text-muted-foreground mb-4 italic">
              <Info />
              Select all that apply
            </div>
          )}

          {/* Answer options */}
          <div className="flex flex-col gap-2.5">
            {currentQuestion.answers.map((answer) => {
              const isSelected = currentSelected.has(answer.id);
              const isCorrectOpt = answer.isCorrect;

              const optionClass = cn(
                "flex items-start gap-3.5 p-3.5 border-[1.5px] rounded-xl cursor-pointer transition-all text-[14.5px] leading-relaxed text-left",
                isRevealed && isCorrectOpt && "border-success bg-success-soft",
                isRevealed && isSelected && !isCorrectOpt && "border-destructive bg-destructive-soft",
                isRevealed && !isCorrectOpt && !isSelected && "border-border bg-card",
                !isRevealed && isSelected && "border-primary bg-primary-soft",
                !isRevealed && !isSelected && "border-border bg-card hover:border-primary hover:bg-primary-soft",
              );

              const shape = currentQuestion.isMultiSelect ? "rounded-[5px]" : "rounded-full";
              const selectorClass = cn(
                "size-5 border-2 flex-shrink-0 mt-0.5 flex items-center justify-center",
                shape,
                isRevealed && isCorrectOpt && "border-success bg-success",
                isRevealed && isSelected && !isCorrectOpt && "border-destructive bg-destructive",
                isRevealed && !isCorrectOpt && !isSelected && "border-border-dark",
                !isRevealed && isSelected && "border-primary bg-primary",
                !isRevealed && !isSelected && "border-border-dark",
              );

              return (
                <button
                  key={answer.id}
                  type="button"
                  onClick={() => handleToggleAnswer(answer.id)}
                  disabled={isRevealed}
                  className={optionClass}
                >
                  <div className={selectorClass}>
                    {(isSelected || (isRevealed && isCorrectOpt)) && (
                      <div className="size-2 rounded-full bg-card" />
                    )}
                  </div>
                  <div className="text-foreground flex-1 min-w-0">{renderCodeSpans(answer.text)}</div>
                </button>
              );
            })}
          </div>

          {/* Feedback alert */}
          {isRevealed && (
            <Alert
              className={`mt-5 ${isCurrentCorrect() ? "bg-success-soft border-success/40 text-success" : "bg-destructive-soft border-destructive/40 text-destructive"}`}
            >
              <AlertTitle className="flex items-center gap-2">
                <span className="text-lg">{isCurrentCorrect() ? "✅" : "❌"}</span>
                {isCurrentCorrect() ? "Correct!" : "Not quite!"}
              </AlertTitle>
              <AlertDescription className="text-sm leading-relaxed">
                {currentQuestion.hint && (
                  <a
                    href={currentQuestion.hint}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:opacity-80"
                  >
                    📖 Learn more in the docs
                  </a>
                )}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>

        <Separator />

        {/* Navigation footer */}
        <div className="px-4 sm:px-7 py-4 sm:py-5 flex items-center justify-between gap-3 flex-wrap">
          <div>
            {!isRevealed && currentSelected.size > 0 && (
              <Button onClick={handleCheck}>Check Answer</Button>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handlePrev} disabled={currentIndex === 0}>
              <ChevronLeft data-icon="inline-start" />
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentIndex === questions.length - 1}
              className="bg-foreground text-card hover:bg-foreground/90"
            >
              Next question
              <ChevronRight data-icon="inline-end" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

/** Turns `backtick` text into <code> spans and fenced blocks into <pre>. */
function renderCodeSpans(text: string): React.ReactNode[] {
  const fencedRe = /(```\w*\n[\s\S]*?```)/g;
  const segments = text.split(fencedRe);

  return segments.flatMap((segment, i) => {
    if (segment.startsWith("```")) {
      const firstNewline = segment.indexOf("\n");
      const code = segment.slice(firstNewline + 1, segment.lastIndexOf("```")).trimEnd();
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
          <code key={`${i}-${j}`} className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded text-foreground">
            {part.slice(1, -1)}
          </code>
        );
      }
      return <span key={`${i}-${j}`}>{part}</span>;
    });
  });
}
