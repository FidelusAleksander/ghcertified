"use client";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { Question } from "@/types/quiz";

type QuestionState = "answered" | "partial" | "unanswered";

interface QuizQuestionMapProps {
  questions: Question[];
  currentIndex: number;
  isComplete: boolean;
  flaggedSet: Set<number>;
  getQuestionState: (q: Question) => QuestionState;
  isQuestionCorrect: (q: Question) => boolean;
  goToQuestion: (i: number) => void;
  mapPage: number;
  mapTotalPages: number;
  mapStart: number;
  mapEnd: number;
  setManualMapPage: (page: number) => void;
  labels: {
    mapRange: string;
    questionMap: string;
    previousMapPage: string;
    nextMapPage: string;
    correct: string;
    incorrect: string;
    answered: string;
    partiallyAnswered: string;
    unanswered: string;
  };
}

export function QuizQuestionMap({
  questions,
  currentIndex,
  isComplete,
  flaggedSet,
  getQuestionState,
  isQuestionCorrect,
  goToQuestion,
  mapPage,
  mapTotalPages,
  mapStart,
  mapEnd,
  setManualMapPage,
  labels,
}: QuizQuestionMapProps) {
  return (
    <Card className="hidden lg:block shadow-sm border-[1.5px]">
      <CardHeader className="p-5 pb-0">
        <CardTitle className="font-display text-[11px] font-bold tracking-[1px] uppercase text-muted-foreground">
          {mapTotalPages > 1 ? labels.mapRange : labels.questionMap}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 pt-3.5">
        <div className="flex flex-wrap gap-x-1.5 gap-y-3.5 pt-2">
          {questions.slice(mapStart, mapEnd).map((q, offset) => {
            const i = mapStart + offset;
            const isQuestionFlagged = flaggedSet.has(i);
            const correct = isComplete ? isQuestionCorrect(q) : null;
            const state = getQuestionState(q);
            const btnClass = cn(
              "size-[30px] rounded-[7px] text-[11px] font-bold border flex items-center justify-center cursor-pointer transition-colors relative focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
              i === currentIndex && !isComplete && "bg-primary text-primary-foreground border-primary",
              isComplete && correct && i === currentIndex && "bg-success text-white border-success ring-2 ring-success/50 ring-offset-1",
              isComplete && correct && i !== currentIndex && "bg-success/15 border-success/50 text-success",
              isComplete && !correct && i === currentIndex && "bg-destructive text-white border-destructive ring-2 ring-destructive/50 ring-offset-1",
              isComplete && !correct && i !== currentIndex && "bg-destructive/15 border-destructive/50 text-destructive",
              !isComplete && i !== currentIndex && state === "answered" && "bg-foreground/10 border-foreground/30 text-foreground",
              !isComplete && i !== currentIndex && state === "partial" && "bg-amber-50 border-amber-500/50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400",
              !isComplete && i !== currentIndex && state === "unanswered" && "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
            );
            return (
              <button
                key={i}
                type="button"
                onClick={() => goToQuestion(i)}
                className={btnClass}
                aria-label={`Go to question ${i + 1}`}
                aria-current={i === currentIndex ? "true" : undefined}
              >
                {i + 1}
                {isQuestionFlagged && (
                  <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[14px] leading-none drop-shadow-sm">🚩</span>
                )}
              </button>
            );
          })}
        </div>
        {/* Map pagination */}
        {mapTotalPages > 1 && (
          <div className="flex items-center justify-center gap-1 mt-3 pt-3 border-t border-border">
            <button
              type="button"
              onClick={() => setManualMapPage(Math.max(0, mapPage - 1))}
              disabled={mapPage === 0}
              aria-label={labels.previousMapPage}
              className="size-7 rounded flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <ChevronsLeft className="size-3.5" />
            </button>
            {Array.from({ length: mapTotalPages }, (_, p) => {
              const show = p === 0 || p === mapTotalPages - 1 || Math.abs(p - mapPage) <= 1;
              const showEllipsis = !show && (p === 1 || p === mapTotalPages - 2) &&
                Math.abs(p - mapPage) === 2;
              if (showEllipsis) {
                return <span key={p} className="text-[10px] text-muted-foreground px-0.5">…</span>;
              }
              if (!show) return null;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => setManualMapPage(p)}
                  aria-label={`Go to page ${p + 1}`}
                  className={cn(
                    "size-7 rounded text-[11px] font-bold flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
                    p === mapPage
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  )}
                >
                  {p + 1}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => setManualMapPage(Math.min(mapTotalPages - 1, mapPage + 1))}
              disabled={mapPage === mapTotalPages - 1}
              aria-label={labels.nextMapPage}
              className="size-7 rounded flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <ChevronsRight className="size-3.5" />
            </button>
          </div>
        )}
        {/* Legend */}
        <div className="mt-3 pt-3 border-t border-border flex flex-col gap-1.5 text-[11px] text-muted-foreground">
          {isComplete ? (
            <>
              <div className="flex items-center gap-2">
                <span className="inline-block size-3 rounded-[3px] bg-success/15 border border-success/50" />
                {labels.correct}
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block size-3 rounded-[3px] bg-destructive/15 border border-destructive/50" />
                {labels.incorrect}
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <span className="inline-block size-3 rounded-[3px] bg-foreground/10 border border-foreground/30" />
                {labels.answered}
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block size-3 rounded-[3px] bg-amber-50 border border-amber-500/50 dark:bg-amber-950/30" />
                {labels.partiallyAnswered}
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block size-3 rounded-[3px] bg-card border border-border" />
                {labels.unanswered}
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
