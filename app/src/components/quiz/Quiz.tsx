"use client";

/**
 * Quiz — main orchestrator with two-column layout.
 *
 * Left: question card with dark header, styled answer options, feedback, nav.
 * Right: sidebar with session score, question map, contribute CTA.
 *
 * "use client" because it uses React state for quiz progress.
 * Shuffles questions in useEffect (client-only) to avoid hydration mismatch.
 */

import { useState, useCallback, useEffect } from "react";
import { Question } from "@/types/quiz";
import { shuffle, cn } from "@/lib/utils";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Flag, Info, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Send, TriangleAlert } from "lucide-react";
import { QuizResults } from "./QuizResults";

interface QuizProps {
  questions: Question[];
  questionCount: number;
  cert: string;
  certName: string;
}

export function Quiz({ questions, questionCount, cert, certName }: QuizProps) {
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const shuffled = shuffle(questions).slice(0, questionCount);
    const withShuffledAnswers = shuffled.map((q) => ({
      ...q,
      answers: shuffle(q.answers),
    }));
    setQuizQuestions(withShuffledAnswers);
  }, [questions, questionCount]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, Set<string>>>({});
  const [flaggedSet, setFlaggedSet] = useState<Set<number>>(new Set());
  const [isComplete, setIsComplete] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [manualMapPage, setManualMapPage] = useState<number | null>(null);

  // Question map pagination
  const MAP_PAGE_SIZE = 60;
  const mapTotalPages = Math.ceil(quizQuestions.length / MAP_PAGE_SIZE);
  const activeMapPage = Math.floor(currentIndex / MAP_PAGE_SIZE);
  const mapPage = manualMapPage ?? activeMapPage;
  const mapStart = mapPage * MAP_PAGE_SIZE;
  const mapEnd = Math.min(mapStart + MAP_PAGE_SIZE, quizQuestions.length);

  const currentQuestion = quizQuestions[currentIndex];
  const currentSelected = selectedAnswers[currentQuestion?.id] ?? new Set<string>();
  const isFlagged = flaggedSet.has(currentIndex);

  const handleToggleFlag = useCallback(() => {
    setFlaggedSet((prev) => {
      const next = new Set(prev);
      if (next.has(currentIndex)) next.delete(currentIndex);
      else next.add(currentIndex);
      return next;
    });
  }, [currentIndex]);

  const handleToggleAnswer = useCallback(
    (answerId: string) => {
      if (!currentQuestion) return;

      setSelectedAnswers((prev) => {
        const qId = currentQuestion.id;
        const current = new Set(prev[qId] ?? []);

        if (currentQuestion.isMultiSelect) {
          const correctMax = currentQuestion.answers.filter((a) => a.isCorrect).length;
          if (current.has(answerId)) {
            current.delete(answerId);
          } else if (current.size < correctMax) {
            current.add(answerId);
          }
        } else {
          current.clear();
          current.add(answerId);
        }

        return { ...prev, [qId]: current };
      });
    },
    [currentQuestion]
  );

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      const next = currentIndex + 1;
      if (Math.floor(next / MAP_PAGE_SIZE) !== Math.floor(currentIndex / MAP_PAGE_SIZE)) {
        setManualMapPage(null);
      }
      setCurrentIndex(next);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const next = currentIndex - 1;
      if (Math.floor(next / MAP_PAGE_SIZE) !== Math.floor(currentIndex / MAP_PAGE_SIZE)) {
        setManualMapPage(null);
      }
      setCurrentIndex(next);
    }
  };

  // Exam submission stats — 3 states
  const getQuestionState = (q: Question): "answered" | "partial" | "unanswered" => {
    const sel = selectedAnswers[q.id]?.size ?? 0;
    if (sel === 0) return "unanswered";
    if (q.isMultiSelect) {
      const correctCount = q.answers.filter((a) => a.isCorrect).length;
      return sel < correctCount ? "partial" : "answered";
    }
    return "answered";
  };

  const fullyAnsweredCount = quizQuestions.filter((q) => getQuestionState(q) === "answered").length;
  const partialCount = quizQuestions.filter((q) => getQuestionState(q) === "partial").length;
  const unansweredCount = quizQuestions.filter((q) => getQuestionState(q) === "unanswered").length;

  const handleSubmitExam = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirmSubmit = () => {
    setShowConfirmDialog(false);
    setIsComplete(true);
  };

  // Loading
  if (quizQuestions.length === 0) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
        <div className="flex items-center justify-between mb-9">
          <div>
            <Skeleton className="h-4 w-40 mb-2" />
            <Skeleton className="h-8 w-64" />
          </div>
          <Skeleton className="h-2 w-60 hidden sm:block" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          <Skeleton className="h-[400px] rounded-xl" />
          <div className="flex flex-col gap-4">
            <Skeleton className="h-32 rounded-xl" />
            <Skeleton className="h-48 rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  // Complete
  if (isComplete) {
    return <QuizResults questions={quizQuestions} selectedAnswers={selectedAnswers} cert={cert} />;
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
      {/* Top bar with breadcrumb + progress */}
      <div className="flex items-center justify-between mb-6 sm:mb-9 flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2 text-[13px] text-muted-foreground mb-1">
            <Link href="/practice-tests" className="text-primary no-underline hover:underline">Practice Tests</Link>
            <span>›</span>
            <span>{certName}</span>
          </div>
          <h1 className="font-display text-[24px] sm:text-[30px] font-extrabold text-foreground tracking-tight">{certName}</h1>
        </div>
        <div className="flex-1 max-w-[360px] hidden sm:block">
          <div className="flex items-center gap-4">
            <Progress value={((currentIndex + 1) / quizQuestions.length) * 100} className="flex-1 h-2" />
            <span className="text-[13px] font-semibold text-muted-foreground whitespace-nowrap">
              {currentIndex + 1} of {quizQuestions.length}
            </span>
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">
        {/* Question card */}
        <Card className="overflow-hidden shadow-sm border-[1.5px]">
          <CardHeader className="bg-foreground px-4 sm:px-7 py-4 sm:py-5 flex flex-row items-center justify-between gap-3 space-y-0">
            <span className="font-display text-[13px] font-bold text-card/50 tracking-wide">
              QUESTION {currentIndex + 1} OF {quizQuestions.length}
            </span>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleToggleFlag}
                className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase transition-colors hover:bg-card/10"
                title={isFlagged ? "Unflag this question" : "Flag for review"}
              >
                <Flag className={isFlagged ? "text-warning fill-warning" : "text-card/50"} />
                <span className={isFlagged ? "text-warning" : "text-card/50"}>{isFlagged ? "Flagged" : "Flag"}</span>
              </button>
              <Badge variant="secondary" className="bg-card/10 text-card/70 hover:bg-card/10 text-[11px] font-semibold tracking-wide uppercase">
                {currentQuestion.isMultiSelect ? "Multi-select" : "Single choice"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-7 text-left">
            {/* Question text */}
            <div className="text-[17px] font-medium text-foreground leading-relaxed mb-6 text-left">
              {renderCodeSpans(currentQuestion.question)}
              {currentQuestion.codeBlock && renderCodeSpans(currentQuestion.codeBlock)}
            </div>
            {currentQuestion.isMultiSelect && (
              <div className="flex items-center gap-2 text-[13.5px] font-semibold text-primary mb-4 bg-primary-soft border border-primary/20 rounded-lg px-3.5 py-2">
                <Info className="size-4 flex-shrink-0" />
                Select exactly {currentQuestion.answers.filter((a) => a.isCorrect).length} answers
              </div>
            )}

            {/* Answer options */}
            <div className="flex flex-col gap-2.5">
              {currentQuestion.answers.map((answer) => {
                const isSelected = currentSelected.has(answer.id);

                const optionClass = cn(
                  "flex items-start gap-3.5 p-3.5 border-[1.5px] rounded-xl cursor-pointer transition-all text-[14.5px] leading-relaxed text-left",
                  isSelected && "border-primary bg-primary-soft",
                  !isSelected && "border-border bg-card hover:border-primary hover:bg-primary-soft",
                );

                const shape = currentQuestion.isMultiSelect ? "rounded-[5px]" : "rounded-full";
                const selectorClass = cn(
                  "size-5 border-2 flex-shrink-0 mt-0.5 flex items-center justify-center",
                  shape,
                  isSelected && "border-primary bg-primary",
                  !isSelected && "border-border-dark",
                );

                return (
                  <button
                    key={answer.id}
                    type="button"
                    onClick={() => handleToggleAnswer(answer.id)}
                    className={optionClass}
                  >
                    <div className={selectorClass}>
                      {isSelected && (
                        <div className="size-2 rounded-full bg-card" />
                      )}
                    </div>
                    <div className="text-foreground flex-1 min-w-0">{renderCodeSpans(answer.text)}</div>
                  </button>
                );
              })}
            </div>
          </CardContent>

          <Separator />

          {/* Navigation footer */}
          <div className="px-4 sm:px-7 py-4 sm:py-5 flex items-center justify-between gap-3 flex-wrap">
            <div />
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                <ChevronLeft data-icon="inline-start" />
                Previous
              </Button>
              {currentIndex < quizQuestions.length - 1 ? (
                <Button
                  onClick={handleNext}
                  className="bg-foreground text-card hover:bg-foreground/90"
                >
                  Next question
                  <ChevronRight data-icon="inline-end" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmitExam}
                  className="bg-foreground text-card hover:bg-foreground/90"
                >
                  <Send data-icon="inline-start" className="size-4" />
                  Submit Exam
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* Sidebar */}
        <div className="flex flex-col gap-4">

          {/* Question Map */}
          <Card className="shadow-sm border-[1.5px]">
            <CardHeader className="p-5 pb-0">
              <CardTitle className="font-display text-[11px] font-bold tracking-[1px] uppercase text-muted-foreground">
                {mapTotalPages > 1 ? `${mapStart + 1}–${mapEnd} of ${quizQuestions.length}` : "Question Map"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-3.5">
              <div className="flex flex-wrap gap-x-1.5 gap-y-3.5 pt-2">
                {quizQuestions.slice(mapStart, mapEnd).map((q, offset) => {
                  const i = mapStart + offset;
                  const isQuestionFlagged = flaggedSet.has(i);
                  const state = getQuestionState(q);
                  const btnClass = cn(
                    "size-[30px] rounded-[7px] text-[11px] font-bold border flex items-center justify-center cursor-pointer transition-colors relative",
                    i === currentIndex && "bg-primary text-primary-foreground border-primary",
                    i !== currentIndex && state === "answered" && "bg-foreground/10 border-foreground/30 text-foreground",
                    i !== currentIndex && state === "partial" && "bg-amber-50 border-amber-500/50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400",
                    i !== currentIndex && state === "unanswered" && "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
                  );
                  return (
                    <button key={i} onClick={() => setCurrentIndex(i)} className={btnClass}>
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
                    onClick={() => setManualMapPage(Math.max(0, mapPage - 1))}
                    disabled={mapPage === 0}
                    className="size-7 rounded flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
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
                        onClick={() => setManualMapPage(p)}
                        className={cn(
                          "size-7 rounded text-[11px] font-bold flex items-center justify-center transition-colors",
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
                    onClick={() => setManualMapPage(Math.min(mapTotalPages - 1, mapPage + 1))}
                    disabled={mapPage === mapTotalPages - 1}
                    className="size-7 rounded flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronsRight className="size-3.5" />
                  </button>
                </div>
              )}
              {/* Legend */}
              <div className="mt-3 pt-3 border-t border-border flex flex-col gap-1.5 text-[11px] text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="inline-block size-3 rounded-[3px] bg-foreground/10 border border-foreground/30" />
                  Answered
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block size-3 rounded-[3px] bg-amber-50 border border-amber-500/50 dark:bg-amber-950/30" />
                  Partially answered
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block size-3 rounded-[3px] bg-card border border-border" />
                  Unanswered
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contribute CTA */}
          <Card className="bg-foreground text-card border-foreground">
            <CardHeader className="p-5 pb-0">
              <CardTitle className="font-display text-[15px] font-bold">Found this useful?</CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-2">
              <div className="text-[13px] text-card/65 leading-relaxed mb-3.5">
                Give back to the community by contributing a question — it only takes a few minutes.
              </div>
              <Button
                render={<a href="https://github.com/FidelusAleksander/ghcertified/blob/master/CONTRIBUTING.md" target="_blank" rel="noreferrer" />}
                nativeButton={false}
                className="bg-card text-foreground hover:bg-card/90 font-bold"
              >
                ✍️ Contribute a question
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Submit confirmation dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-display text-xl font-extrabold">Submit Practice Test?</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              You won&apos;t be able to change your answers after submitting.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="flex flex-col gap-2.5 text-[14px]">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="inline-block size-2.5 rounded-full bg-foreground/30" />
                  Answered
                </span>
                <span className="font-semibold text-foreground tabular-nums">{fullyAnsweredCount}</span>
              </div>
              {partialCount > 0 && (
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <span className="inline-block size-2.5 rounded-full bg-amber-500" />
                    Partially answered
                  </span>
                  <span className="font-semibold text-foreground tabular-nums">{partialCount}</span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="inline-block size-2.5 rounded-full bg-border-dark" />
                  Unanswered
                </span>
                <span className="font-semibold text-foreground tabular-nums">{unansweredCount}</span>
              </div>
              {flaggedSet.size > 0 && (
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <span className="text-sm">🚩</span>
                    Flagged for review
                  </span>
                  <span className="font-semibold text-foreground tabular-nums">{flaggedSet.size}</span>
                </div>
              )}
            </div>
            {(unansweredCount > 0 || partialCount > 0) && (
              <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3.5 py-2.5 text-[13.5px] text-amber-700 dark:text-amber-400">
                <TriangleAlert className="size-4 mt-0.5 flex-shrink-0" />
                <span>
                  You have{" "}
                  {unansweredCount > 0 && (
                    <strong>{unansweredCount} unanswered</strong>
                  )}
                  {unansweredCount > 0 && partialCount > 0 && " and "}
                  {partialCount > 0 && (
                    <strong>{partialCount} partially answered</strong>
                  )}
                  {" "}question{(unansweredCount + partialCount) !== 1 ? "s" : ""}. These will be marked as incorrect.
                </span>
              </div>
            )}
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirmSubmit} className="bg-foreground text-card hover:bg-foreground/90">
              <Send className="size-4" />
              Submit Exam
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

/** Simple parser: turns `backtick` text into <code> spans for technical content. */
function renderCodeSpans(text: string): React.ReactNode[] {
  // Split on fenced code blocks first (```lang\n...\n```), then inline backticks
  const fencedRe = /(```\w*\n[\s\S]*?```)/g;
  const segments = text.split(fencedRe);

  return segments.flatMap((segment, i) => {
    // Fenced code block
    if (segment.startsWith("```")) {
      const firstNewline = segment.indexOf("\n");
      const code = segment.slice(firstNewline + 1, segment.lastIndexOf("```")).trimEnd();
      return [
        <pre key={`fence-${i}`} className="font-mono text-xs bg-muted/80 border border-border rounded-lg p-3 my-2 overflow-x-auto whitespace-pre">
          <code>{code}</code>
        </pre>,
      ];
    }

    // Inline backticks within non-fenced text
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
