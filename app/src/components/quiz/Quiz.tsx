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
import { useLocale, useTranslations } from "next-intl";
import { localePath } from "@/lib/locales";
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
import { Flag, Info, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Send, TriangleAlert, CheckCircle2, XCircle, CircleAlert } from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { renderCodeSpans } from "@/lib/render-code-spans";

interface QuizProps {
  questions: Question[];
  questionCount: number;
  cert: string;
  certName: string;
}

export function Quiz({ questions, questionCount, cert, certName }: QuizProps) {
  const locale = useLocale();
  const t = useTranslations("Quiz");
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
      if (!currentQuestion || isComplete) return;

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
    [currentQuestion, isComplete]
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

  // Correctness check (used in review mode after submission)
  const isQuestionCorrect = (q: Question): boolean => {
    const sel = selectedAnswers[q.id] ?? new Set<string>();
    const correctIds = new Set(q.answers.filter((a) => a.isCorrect).map((a) => a.id));
    if (sel.size !== correctIds.size) return false;
    for (const id of sel) if (!correctIds.has(id)) return false;
    return true;
  };

  const score = isComplete ? quizQuestions.filter(isQuestionCorrect).length : 0;
  const isCurrentCorrectInReview = isComplete && currentQuestion ? isQuestionCorrect(currentQuestion) : false;

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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
          <Skeleton className="h-[400px] rounded-xl" />
          <div className="flex flex-col gap-4">
            <Skeleton className="h-32 rounded-xl" />
            <Skeleton className="h-48 rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  // No early return for isComplete — same view switches to review mode

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
      {/* Top bar with breadcrumb */}
      <div className="mb-6 sm:mb-9">
        <div className="flex items-center gap-2 text-[13px] text-muted-foreground mb-1">
          <Link href={localePath(locale, "/practice-tests")} className="text-primary no-underline hover:underline">{t("breadcrumbPracticeTests")}</Link>
          <span>›</span>
          <span>{certName}</span>
        </div>
        <h1 className="font-display text-[24px] sm:text-[30px] font-extrabold text-foreground tracking-tight">{certName}</h1>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
        {/* Question card */}
        <Card className="overflow-hidden shadow-sm border-[1.5px] pt-0 gap-0">
          <CardHeader className="bg-foreground px-4 sm:px-7 pt-4 sm:pt-5 pb-3 sm:pb-4 flex flex-col gap-3 space-y-0">
            <div className="flex items-center justify-between gap-3 w-full">
              <span className="font-display text-[13px] font-bold text-card/50 tracking-wide">
                {t("questionOf", { current: currentIndex + 1, total: quizQuestions.length })}
              </span>
              <div className="flex items-center gap-2.5 ml-auto">
                {!isComplete && (
                  <button
                    type="button"
                    onClick={handleToggleFlag}
                    className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase transition-colors hover:bg-card/10 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
                    title={isFlagged ? t("unflag") : t("flagForReview")}
                  >
                    <Flag className={isFlagged ? "text-warning fill-warning" : "text-card/50"} />
                    <span className={isFlagged ? "text-warning" : "text-card/50"}>{isFlagged ? t("flagged") : t("flag")}</span>
                  </button>
                )}
                <a
                  href={`https://github.com/FidelusAleksander/ghcertified/issues/new?title=${encodeURIComponent(t("reportIssueTitle", { cert, questionId: currentQuestion.id }))}&body=${encodeURIComponent(t("reportIssueBody", { question: currentQuestion.question }))}&labels=question-issue`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase transition-colors text-card/50 hover:bg-card/10 hover:text-card/70"
                  title={t("reportTooltip")}
                >
                  <CircleAlert className="size-3.5" />
                  <span>{t("report")}</span>
                </a>
                <Badge variant="secondary" className="bg-card/10 text-card/70 hover:bg-card/10 text-[11px] font-semibold tracking-wide uppercase">
                  {currentQuestion.isMultiSelect ? t("multiSelect") : t("singleChoice")}
                </Badge>
              </div>
            </div>
            {!isComplete && (
              <div className="h-1 w-full rounded-full bg-card/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
                  style={{ width: `${((currentIndex + 1) / quizQuestions.length) * 100}%` }}
                />
              </div>
            )}
          </CardHeader>
          <CardContent className="p-4 sm:p-7 text-left">
            {/* Question text */}
            <div className="text-[17px] font-medium text-foreground leading-relaxed mb-6 text-left">
              {renderCodeSpans(currentQuestion.question)}
              {currentQuestion.codeBlock && renderCodeSpans(currentQuestion.codeBlock)}
            </div>
            {currentQuestion.isMultiSelect && !isComplete && (
              <div className="flex items-center gap-2 text-[13.5px] font-semibold text-primary mb-4 bg-primary-soft border border-primary/20 rounded-lg px-3.5 py-2">
                <Info className="size-4 flex-shrink-0" />
                {t("selectExactly", { count: currentQuestion.answers.filter((a) => a.isCorrect).length })}
              </div>
            )}

            {/* Answer options */}
            <div className="flex flex-col gap-2.5">
              {currentQuestion.answers.map((answer) => {
                const isSelected = currentSelected.has(answer.id);
                const isCorrectOpt = answer.isCorrect;

                const optionClass = cn(
                  "flex items-start gap-3.5 p-3.5 border-[1.5px] rounded-xl transition-all text-[14.5px] leading-relaxed text-left focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
                  !isComplete && "cursor-pointer",
                  isComplete && isCorrectOpt && "border-success bg-success-soft",
                  isComplete && isSelected && !isCorrectOpt && "border-destructive bg-destructive-soft",
                  isComplete && !isSelected && !isCorrectOpt && "border-border bg-card opacity-60",
                  !isComplete && isSelected && "border-primary bg-primary-soft",
                  !isComplete && !isSelected && "border-border bg-card hover:border-primary hover:bg-primary-soft",
                );

                const shape = currentQuestion.isMultiSelect ? "rounded-[5px]" : "rounded-full";
                const selectorClass = cn(
                  "size-5 border-2 flex-shrink-0 mt-0.5 flex items-center justify-center",
                  shape,
                  isComplete && isCorrectOpt && "border-success bg-success",
                  isComplete && isSelected && !isCorrectOpt && "border-destructive bg-destructive",
                  isComplete && !isSelected && !isCorrectOpt && "border-border-dark",
                  !isComplete && isSelected && "border-primary bg-primary",
                  !isComplete && !isSelected && "border-border-dark",
                );

                return (
                  <button
                    key={answer.id}
                    type="button"
                    onClick={() => handleToggleAnswer(answer.id)}
                    className={optionClass}
                    disabled={isComplete}
                  >
                    <div className={selectorClass}>
                      {((isSelected && !isComplete) || (isComplete && (isCorrectOpt || isSelected))) && (
                        <div className="size-2 rounded-full bg-card" />
                      )}
                    </div>
                    <div className="text-foreground flex-1 min-w-0">{renderCodeSpans(answer.text)}</div>
                    {isComplete && isSelected && (
                      <span className={cn(
                        "text-[11px] font-semibold uppercase tracking-wide whitespace-nowrap px-2 py-0.5 rounded-md",
                        isCorrectOpt ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive",
                      )}>
                        {t("yourAnswer")}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Review feedback */}
            {isComplete && (
              <Alert className={`mt-5 ${isCurrentCorrectInReview ? "bg-success-soft border-success/40 text-success" : "bg-destructive-soft border-destructive/40 text-destructive"}`}>
                <AlertTitle className="flex items-center gap-2">
                  <span className="text-lg">{isCurrentCorrectInReview ? "✅" : "❌"}</span>
                  {isCurrentCorrectInReview ? t("correct") : t("incorrect")}
                </AlertTitle>
                {currentQuestion.hint && (
                  <AlertDescription className="text-sm leading-relaxed">
                    <a
                      href={currentQuestion.hint}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:opacity-80"
                    >
                      📖 {t("learnMore")}
                    </a>
                  </AlertDescription>
                )}
              </Alert>
            )}
          </CardContent>

          <Separator />

          {/* Mobile question strip (hidden on desktop where sidebar has the map) */}
          <div className="px-4 py-3 lg:hidden overflow-x-auto">
            <div className="flex gap-1.5 w-max">
              {quizQuestions.map((q, i) => {
                const correct = isComplete ? isQuestionCorrect(q) : null;
                const state = getQuestionState(q);
                const dotClass = cn(
                  "size-7 rounded-md text-[10px] font-bold border flex items-center justify-center flex-shrink-0 transition-colors focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
                  i === currentIndex && !isComplete && "bg-primary text-primary-foreground border-primary",
                  isComplete && correct && i === currentIndex && "bg-success text-white border-success ring-2 ring-success/50 ring-offset-1",
                  isComplete && correct && i !== currentIndex && "bg-success/15 border-success/50 text-success",
                  isComplete && !correct && i === currentIndex && "bg-destructive text-white border-destructive ring-2 ring-destructive/50 ring-offset-1",
                  isComplete && !correct && i !== currentIndex && "bg-destructive/15 border-destructive/50 text-destructive",
                  !isComplete && i !== currentIndex && state === "answered" && "bg-foreground/10 border-foreground/30 text-foreground",
                  !isComplete && i !== currentIndex && state === "partial" && "bg-amber-50 border-amber-500/50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400",
                  !isComplete && i !== currentIndex && state === "unanswered" && "border-border bg-card text-muted-foreground",
                );
                return (
                  <button key={i} onClick={() => setCurrentIndex(i)} className={dotClass}>
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation footer */}
          <div className="px-4 sm:px-7 py-4 sm:py-5 flex items-center justify-end gap-2 flex-wrap">
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                <ChevronLeft data-icon="inline-start" />
                {t("previous")}
              </Button>
              {currentIndex < quizQuestions.length - 1 ? (
                <Button
                  onClick={handleNext}
                  className="bg-foreground text-card hover:bg-foreground/90"
                >
                  {t("nextQuestion")}
                  <ChevronRight data-icon="inline-end" />
                </Button>
              ) : !isComplete ? (
                <Button
                  onClick={handleSubmitExam}
                  className="bg-foreground text-card hover:bg-foreground/90"
                >
                  <Send data-icon="inline-start" className="size-4" />
                  {t("submitExam")}
                </Button>
              ) : null}
            </div>
          </div>
        </Card>

        {/* Sidebar */}
        <div className="flex flex-col gap-4 lg:sticky lg:top-6">
          {isComplete && (
            <Card className="shadow-sm border-[1.5px]">
              <CardHeader className="p-5 pb-0">
                <CardTitle className="font-display text-[11px] font-bold tracking-[1px] uppercase text-muted-foreground">
                  {t("results")}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-3">
                <div className="text-center mb-3">
                  <span className="font-display text-[36px] font-extrabold text-foreground leading-none">
                    {Math.round((score / quizQuestions.length) * 100)}%
                  </span>
                  <div className="text-[13px] text-muted-foreground mt-1">
                    {t("scoreOf", { score, total: quizQuestions.length })}
                  </div>
                </div>
                <Progress value={(score / quizQuestions.length) * 100} className="h-2.5" />
                <div className="mt-3 flex justify-between text-[12px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-success" />
                    {t("correctCount", { count: score })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <XCircle className="size-3.5 text-destructive" />
                    {t("incorrectCount", { count: quizQuestions.length - score })}
                  </span>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Question Map */}
          <Card className="shadow-sm border-[1.5px]">
            <CardHeader className="p-5 pb-0">
              <CardTitle className="font-display text-[11px] font-bold tracking-[1px] uppercase text-muted-foreground">
                {mapTotalPages > 1 ? t("mapRange", { start: mapStart + 1, end: mapEnd, total: quizQuestions.length }) : t("questionMap")}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-3.5">
              <div className="flex flex-wrap gap-x-1.5 gap-y-3.5 pt-2">
                {quizQuestions.slice(mapStart, mapEnd).map((q, offset) => {
                  const i = mapStart + offset;
                  const isQuestionFlagged = flaggedSet.has(i);
                  const correct = isComplete ? isQuestionCorrect(q) : null;
                  const state = getQuestionState(q);
                  const btnClass = cn(
                    "size-[30px] rounded-[7px] text-[11px] font-bold border flex items-center justify-center cursor-pointer transition-colors relative focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
                    // Active question highlight
                    i === currentIndex && !isComplete && "bg-primary text-primary-foreground border-primary",
                    // Review mode: green/red + ring for active
                    isComplete && correct && i === currentIndex && "bg-success text-white border-success ring-2 ring-success/50 ring-offset-1",
                    isComplete && correct && i !== currentIndex && "bg-success/15 border-success/50 text-success",
                    isComplete && !correct && i === currentIndex && "bg-destructive text-white border-destructive ring-2 ring-destructive/50 ring-offset-1",
                    isComplete && !correct && i !== currentIndex && "bg-destructive/15 border-destructive/50 text-destructive",
                    // Exam mode (not submitted)
                    !isComplete && i !== currentIndex && state === "answered" && "bg-foreground/10 border-foreground/30 text-foreground",
                    !isComplete && i !== currentIndex && state === "partial" && "bg-amber-50 border-amber-500/50 text-amber-600 dark:bg-amber-950/30 dark:text-amber-400",
                    !isComplete && i !== currentIndex && state === "unanswered" && "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
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
                        onClick={() => setManualMapPage(p)}
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
                    onClick={() => setManualMapPage(Math.min(mapTotalPages - 1, mapPage + 1))}
                    disabled={mapPage === mapTotalPages - 1}
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
                      {t("correct")}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block size-3 rounded-[3px] bg-destructive/15 border border-destructive/50" />
                      {t("incorrect")}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="inline-block size-3 rounded-[3px] bg-foreground/10 border border-foreground/30" />
                      {t("answered")}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block size-3 rounded-[3px] bg-amber-50 border border-amber-500/50 dark:bg-amber-950/30" />
                      {t("partiallyAnswered")}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block size-3 rounded-[3px] bg-card border border-border" />
                      {t("unanswered")}
                    </div>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Contribute CTA */}
          <Card className="bg-foreground text-card border-foreground shadow-sm">
            <CardContent className="px-4 py-3.5 flex items-center justify-between gap-3">
              <span className="text-[13px] text-card/65 leading-snug">{t("contributePrompt")}</span>
              <Button
                render={<a href="https://github.com/FidelusAleksander/ghcertified/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                className="bg-card text-foreground hover:bg-card/90 font-bold text-[12px] px-3 py-1.5 h-auto flex-shrink-0"
              >
                {t("contribute")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Submit confirmation dialog */}
      <Dialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="font-display text-xl font-extrabold">{t("submitDialogTitle")}</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              {t("submitDialogDescription")}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="flex flex-col gap-2.5 text-[14px]">
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="inline-block size-2.5 rounded-full bg-foreground/30" />
                  {t("answered")}
                </span>
                <span className="font-semibold text-foreground tabular-nums">{fullyAnsweredCount}</span>
              </div>
              {partialCount > 0 && (
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <span className="inline-block size-2.5 rounded-full bg-amber-500" />
                    {t("partiallyAnswered")}
                  </span>
                  <span className="font-semibold text-foreground tabular-nums">{partialCount}</span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="inline-block size-2.5 rounded-full bg-border-dark" />
                  {t("unanswered")}
                </span>
                <span className="font-semibold text-foreground tabular-nums">{unansweredCount}</span>
              </div>
              {flaggedSet.size > 0 && (
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <span className="text-sm">🚩</span>
                    {t("submitDialogFlagged")}
                  </span>
                  <span className="font-semibold text-foreground tabular-nums">{flaggedSet.size}</span>
                </div>
              )}
            </div>
            {(unansweredCount > 0 || partialCount > 0) && (
              <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3.5 py-2.5 text-[13.5px] text-amber-700 dark:text-amber-400">
                <TriangleAlert className="size-4 mt-0.5 flex-shrink-0" />
                <span>
                  {unansweredCount > 0 && partialCount > 0
                    ? t("submitDialogWarningBoth", { unanswered: unansweredCount, partial: partialCount })
                    : unansweredCount > 0
                      ? t("submitDialogWarningUnanswered", { count: unansweredCount })
                      : t("submitDialogWarningPartial", { count: partialCount })
                  }
                </span>
              </div>
            )}
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setShowConfirmDialog(false)}>
              {t("cancel")}
            </Button>
            <Button onClick={handleConfirmSubmit} className="bg-foreground text-card hover:bg-foreground/90">
              <Send className="size-4" />
              {t("submitExam")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

