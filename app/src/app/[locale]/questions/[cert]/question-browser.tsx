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
import { useTranslations } from "next-intl";
import type { Question } from "@/types/quiz";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Info, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, CircleAlert, BookOpen } from "lucide-react";
import { renderCodeSpans } from "@/lib/render-code-spans";
import { AnswerExplanation } from "@/components/quiz/AnswerExplanation";

interface QuestionBrowserProps {
  questions: Question[];
}

export function QuestionBrowser({ questions }: QuestionBrowserProps) {
  const t = useTranslations("QuestionBrowser");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, Set<string>>>({});
  const [revealedMap, setRevealedMap] = useState<Record<number, boolean>>({});

  // Sidebar pagination — auto-follows active question, manual override resets on question nav
  const PAGE_SIZE = 20;
  const totalPages = Math.ceil(questions.length / PAGE_SIZE);
  const activeQuestionPage = Math.floor(currentIndex / PAGE_SIZE);
  const [manualSidebarPage, setManualSidebarPage] = useState<number | null>(null);
  const sidebarPage = manualSidebarPage ?? activeQuestionPage;
  const pageStart = sidebarPage * PAGE_SIZE;
  const pageEnd = Math.min(pageStart + PAGE_SIZE, questions.length);

  // Reset manual override when active question moves to a different page
  const handleSetCurrentIndex = useCallback((idx: number | ((prev: number) => number)) => {
    setCurrentIndex((prev) => {
      const next = typeof idx === "function" ? idx(prev) : idx;
      if (Math.floor(next / PAGE_SIZE) !== Math.floor(prev / PAGE_SIZE)) {
        setManualSidebarPage(null);
      }
      return next;
    });
  }, []);

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
    [currentQuestion, isRevealed],
  );

  const handleCheck = () => {
    if (!canCheck) return;
    setRevealedMap((prev) => ({ ...prev, [currentIndex]: true }));
  };

  // Check Answer is enabled only when the right number of answers is selected
  const requiredCount = currentQuestion
    ? (currentQuestion.isMultiSelect ? currentQuestion.answers.filter((a) => a.isCorrect).length : 1)
    : 1;
  const canCheck = currentSelected.size === requiredCount;

  const handleNext = () => {
    if (currentIndex < questions.length - 1) handleSetCurrentIndex((i) => i + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) handleSetCurrentIndex((i) => i - 1);
  };

  const isCurrentCorrect = () => {
    if (!currentQuestion) return false;
    const correctIds = new Set(currentQuestion.answers.filter((a) => a.isCorrect).map((a) => a.id));
    return correctIds.size === currentSelected.size && [...correctIds].every((id) => currentSelected.has(id));
  };

  if (!currentQuestion) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 items-start">
      {/* Sidebar — paginated numbered grid */}
      <Card className="shadow-sm border-[1.5px] lg:sticky lg:top-6">
        <CardHeader className="p-4 pb-0">
          <span className="font-display text-[11px] font-bold tracking-[1px] uppercase text-muted-foreground">
            {t("sidebarRange", { start: pageStart + 1, end: pageEnd, total: questions.length })}
          </span>
        </CardHeader>
        <CardContent className="p-4 pt-3">
          {/* Mobile: horizontal scroll strip (all questions) */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 lg:hidden">
            {questions.map((_, i) => (
              <button
                key={i}
                onClick={() => handleSetCurrentIndex(i)}
                className={cn(
                  "size-[30px] rounded-[7px] text-[11px] font-bold border flex-shrink-0 flex items-center justify-center cursor-pointer transition-colors focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
                  i === currentIndex
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
                )}
              >
                {i + 1}
              </button>
            ))}
          </div>
          {/* Desktop: paginated grid */}
          <div className="hidden lg:block">
            <div className="flex flex-wrap gap-x-1.5 gap-y-1.5">
              {Array.from({ length: pageEnd - pageStart }, (_, offset) => {
                const i = pageStart + offset;
                return (
                  <button
                    key={i}
                    onClick={() => handleSetCurrentIndex(i)}
                    className={cn(
                      "size-[30px] rounded-[7px] text-[11px] font-bold border flex items-center justify-center cursor-pointer transition-colors focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
                      i === currentIndex
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
                    )}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
            {/* Pagination controls */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-1 mt-3 pt-3 border-t border-border">
                <button
                  onClick={() => setManualSidebarPage(Math.max(0, sidebarPage - 1))}
                  disabled={sidebarPage === 0}
                  aria-label={t("previousSidebarPage")}
                  className="size-7 rounded flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  <ChevronsLeft className="size-3.5" />
                </button>
                {Array.from({ length: totalPages }, (_, p) => {
                  // Show first, last, and pages near current
                  const show = p === 0 || p === totalPages - 1 || Math.abs(p - sidebarPage) <= 1;
                  const showEllipsis = !show && (p === 1 || p === totalPages - 2) &&
                    Math.abs(p - sidebarPage) === 2;
                  if (showEllipsis) {
                    return <span key={p} className="text-[10px] text-muted-foreground px-0.5">…</span>;
                  }
                  if (!show) return null;
                  return (
                    <button
                      key={p}
                      onClick={() => setManualSidebarPage(p)}
                      className={cn(
                        "size-7 rounded text-[11px] font-bold flex items-center justify-center transition-colors focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
                        p === sidebarPage
                          ? "bg-primary text-primary-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted",
                      )}
                    >
                      {p + 1}
                    </button>
                  );
                })}
                <button
                  onClick={() => setManualSidebarPage(Math.min(totalPages - 1, sidebarPage + 1))}
                  disabled={sidebarPage === totalPages - 1}
                  aria-label={t("nextSidebarPage")}
                  className="size-7 rounded flex items-center justify-center text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  <ChevronsRight className="size-3.5" />
                </button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Question card */}
      <Card className="overflow-hidden shadow-sm border-[1.5px] pt-0 gap-0">
        <CardHeader className="bg-foreground px-4 sm:px-7 py-4 sm:py-5 flex flex-row items-center justify-between gap-3 space-y-0">
          <span className="font-display text-[13px] font-bold text-card/50 tracking-wide">
            {t("questionOf", { current: currentIndex + 1, total: questions.length })}
          </span>
          <div className="flex items-center gap-2.5">
            {currentQuestion.documentation && (
              <a
                href={currentQuestion.documentation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase transition-colors text-card/50 hover:bg-card/10 hover:text-card/70"
                title={t("learnMore")}
              >
                <BookOpen className="size-3.5" />
                <span className="hidden sm:inline">{t("learnMore")}</span>
              </a>
            )}
            <a
              href={`https://github.com/FidelusAleksander/ghcertified/issues/new?title=${encodeURIComponent(t("reportIssueTitle", { cert: currentQuestion.cert, questionId: currentQuestion.id }))}&body=${encodeURIComponent(t("reportIssueBody", { question: currentQuestion.question }))}&labels=question-issue`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase transition-colors text-card/50 hover:bg-card/10 hover:text-card/70"
              title={t("reportTooltip")}
            >
              <CircleAlert className="size-3.5" />
              <span className="hidden sm:inline">{t("report")}</span>
            </a>
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
              {t("selectExactly", { count: currentQuestion.answers.filter((a) => a.isCorrect).length })}
            </div>
          )}

          {/* Answer options */}
          <div
            role={currentQuestion.isMultiSelect ? "group" : "radiogroup"}
            aria-label={t("answerGroup")}
            className="flex flex-col gap-2.5"
          >
            {currentQuestion.answers.map((answer, answerIdx) => {
              const isSelected = currentSelected.has(answer.id);
              const isCorrectOpt = answer.isCorrect;

              const optionClass = cn(
                "w-full flex items-start gap-3.5 p-3.5 border-[1.5px] rounded-xl cursor-pointer transition-all text-[14.5px] leading-relaxed text-left focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
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
                <div key={answer.id}>
                  <button
                    type="button"
                    role={currentQuestion.isMultiSelect ? "checkbox" : "radio"}
                    aria-checked={isSelected}
                    aria-label={t("answerOption", { number: answerIdx + 1, text: answer.text })}
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
                    {isRevealed && isSelected && (
                      <span className={cn(
                        "text-[11px] font-semibold uppercase tracking-wide whitespace-nowrap px-2 py-0.5 rounded-md",
                        isCorrectOpt ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive",
                      )}>
                        {t("yourAnswer")}
                      </span>
                    )}
                  </button>
                  {isRevealed && answer.explanation && (
                    <AnswerExplanation text={answer.explanation} />
                  )}
                </div>
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
                {isCurrentCorrect() ? t("correct") : t("notQuite")}
              </AlertTitle>
            </Alert>
          )}
        </CardContent>

        <Separator />

        {/* Navigation footer */}
        <div className="px-4 sm:px-7 py-4 sm:py-5 flex items-center justify-between gap-3 flex-wrap">
          <div>
            {!isRevealed && (
              <Button onClick={handleCheck} disabled={!canCheck}>{t("checkAnswer")}</Button>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={handlePrev} disabled={currentIndex === 0}>
              <ChevronLeft data-icon="inline-start" />
              {t("previous")}
            </Button>
            <Button
              onClick={handleNext}
              disabled={currentIndex === questions.length - 1}
              className="bg-foreground text-card hover:bg-foreground/90"
            >
              {t("nextQuestion")}
              <ChevronRight data-icon="inline-end" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
