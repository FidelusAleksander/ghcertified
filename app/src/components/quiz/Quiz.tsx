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
import { useCountUp } from "@/hooks/useCountUp";
import { localePath } from "@/lib/locales";
import { useLocale, useTranslations } from "next-intl";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Flag, ChevronLeft, ChevronRight, Send } from "lucide-react";
import { renderInlineMarkdown } from "@/lib/render-inline-markdown";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { AnswerList } from "@/components/quiz/AnswerList";
import { FeedbackAlert } from "@/components/quiz/FeedbackAlert";
import { QuizResults } from "@/components/quiz/QuizResults";
import { QuizQuestionMap } from "@/components/quiz/QuizQuestionMap";
import { SubmitDialog } from "@/components/quiz/SubmitDialog";

interface QuizProps {
  questions: Question[];
  questionCount: number;
  cert: string;
  certName: string;
}

export function Quiz({ questions, questionCount, cert, certName }: QuizProps) {
  const locale = useLocale();
  const t = useTranslations("Quiz");
  const tQ = useTranslations("QuestionCommon");
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

  // Direction tracking for question transition animation
  const [slideDirection, setSlideDirection] = useState<"right" | "left">("right");
  const [transitionKey, setTransitionKey] = useState(0);

  const goToQuestion = useCallback((next: number) => {
    setSlideDirection(next >= currentIndex ? "right" : "left");
    setCurrentIndex(next);
    setTransitionKey((k) => k + 1);
  }, [currentIndex]);

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
      goToQuestion(next);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const next = currentIndex - 1;
      if (Math.floor(next / MAP_PAGE_SIZE) !== Math.floor(currentIndex / MAP_PAGE_SIZE)) {
        setManualMapPage(null);
      }
      goToQuestion(next);
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
  const scorePercent = quizQuestions.length > 0 ? Math.round((score / quizQuestions.length) * 100) : 0;
  const animatedPercent = useCountUp(isComplete ? scorePercent : 0);
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
        <PageBreadcrumb
          className="mb-1"
          items={[
            { label: t("breadcrumbPracticeTests"), href: localePath(locale, "/practice-tests") },
            { label: certName },
          ]}
        />
        <h1 className="font-display text-[24px] sm:text-[30px] font-extrabold text-foreground tracking-tight">{certName}</h1>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">
        {/* Question card */}
        <QuestionCard
          headerLabel={tQ("questionOf", { current: currentIndex + 1, total: quizQuestions.length })}
          headerActions={
            !isComplete ? (
              <button
                type="button"
                onClick={handleToggleFlag}
                className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase transition-colors text-card/50 hover:bg-card/10 hover:text-card/70 focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
                title={isFlagged ? t("unflag") : t("flagForReview")}
              >
                <Flag className={cn("size-3.5", isFlagged && "text-warning fill-warning")} />
                <span className={cn("hidden sm:inline", isFlagged && "text-warning")}>{isFlagged ? t("flagged") : t("flag")}</span>
              </button>
            ) : undefined
          }
          progressBar={
            !isComplete ? (
              <div className="h-1 w-full rounded-full bg-card/10 overflow-hidden">
                <div
                  className="h-full w-full rounded-full bg-primary transition-transform duration-300 ease-out origin-left"
                  style={{ transform: `scaleX(${(currentIndex + 1) / quizQuestions.length})` }}
                />
              </div>
            ) : undefined
          }
          documentationHref={currentQuestion.documentation}
          reportHref={`https://github.com/FidelusAleksander/ghcertified/issues/new?title=${encodeURIComponent(tQ("reportIssueTitle", { cert, questionId: currentQuestion.id }))}&body=${encodeURIComponent(tQ("reportIssueBody", { question: currentQuestion.question, fileLink: `[${currentQuestion.id}](https://github.com/FidelusAleksander/ghcertified/blob/main/questions/en/${cert}/question-${currentQuestion.id.replace(`${cert}-`, "")}.md)` }))}&labels=question-issue`}
          learnMoreLabel={tQ("learnMore")}
          reportLabel={tQ("report")}
          reportTooltip={tQ("reportTooltip")}
          footer={
            <>
              {/* Mobile question strip */}
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
                      !isComplete && i !== currentIndex && state === "partial" && "bg-amber-50 border-amber-500/50 text-amber-600",
                      !isComplete && i !== currentIndex && state === "unanswered" && "border-border bg-card text-muted-foreground",
                    );
                    return (
                      <button key={i} onClick={() => goToQuestion(i)} className={dotClass}>
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
                    {tQ("previous")}
                  </Button>
                  {currentIndex < quizQuestions.length - 1 ? (
                    <Button
                      onClick={handleNext}
                      className="bg-foreground text-card hover:bg-foreground/90"
                    >
                      {tQ("nextQuestion")}
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
            </>
          }
        >
          <div
            key={transitionKey}
            className={cn(
              "motion-safe:animate-in motion-safe:fade-in motion-safe:duration-200",
              slideDirection === "right"
                ? "motion-safe:slide-in-from-right-2"
                : "motion-safe:slide-in-from-left-2",
            )}
          >
            {/* Question text */}
            <div className="text-[17px] font-medium text-foreground leading-relaxed mb-6 text-left">
              {renderInlineMarkdown(currentQuestion.question)}
              {currentQuestion.codeBlock && renderInlineMarkdown(currentQuestion.codeBlock)}
            </div>

            <AnswerList
              question={currentQuestion}
              selectedIds={currentSelected}
              showResults={isComplete}
              isDisabled={isComplete}
              showSelectionHint={!isComplete}
              dimUnselected
              onToggle={handleToggleAnswer}
              labels={{
                answerGroup: tQ("answerGroup"),
                answerOption: (num, text) => tQ("answerOption", { number: num, text }),
                selectExactly: tQ("selectExactly", { count: currentQuestion.answers.filter((a) => a.isCorrect).length }),
                yourAnswer: tQ("yourAnswer"),
              }}
            />

            {isComplete && (
              <FeedbackAlert
                isCorrect={isCurrentCorrectInReview}
                correctLabel={tQ("correct")}
                incorrectLabel={tQ("incorrect")}
                className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-1 motion-safe:duration-200"
              />
            )}
          </div>
        </QuestionCard>

        {/* Sidebar */}
        <div className="flex flex-col gap-4 lg:sticky lg:top-6">
          {isComplete && (
            <QuizResults
              animatedPercent={animatedPercent}
              score={score}
              total={quizQuestions.length}
              labels={{
                results: t("results"),
                scoreOf: t("scoreOf", { score, total: quizQuestions.length }),
                correctCount: t("correctCount", { count: score }),
                incorrectCount: t("incorrectCount", { count: quizQuestions.length - score }),
              }}
            />
          )}

          <QuizQuestionMap
            questions={quizQuestions}
            currentIndex={currentIndex}
            isComplete={isComplete}
            flaggedSet={flaggedSet}
            getQuestionState={getQuestionState}
            isQuestionCorrect={isQuestionCorrect}
            goToQuestion={goToQuestion}
            mapPage={mapPage}
            mapTotalPages={mapTotalPages}
            mapStart={mapStart}
            mapEnd={mapEnd}
            setManualMapPage={setManualMapPage}
            labels={{
              mapRange: mapTotalPages > 1 ? t("mapRange", { start: mapStart + 1, end: mapEnd, total: quizQuestions.length }) : "",
              questionMap: t("questionMap"),
              previousMapPage: t("previousMapPage"),
              nextMapPage: t("nextMapPage"),
              correct: tQ("correct"),
              incorrect: tQ("incorrect"),
              answered: t("answered"),
              partiallyAnswered: t("partiallyAnswered"),
              unanswered: t("unanswered"),
            }}
          />

          {/* Contribute CTA */}
          <Card className="bg-foreground text-card border-foreground shadow-sm">
            <CardContent className="px-4 py-3.5 flex items-center justify-between gap-3">
              <span className="text-[13px] text-card/65 leading-snug">{t("contributePrompt")}</span>
              <Button
                render={<a href="https://github.com/FidelusAleksander/ghcertified/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                className="bg-card text-foreground hover:bg-card/90 font-bold text-[12px] px-3 py-1.5 h-auto flex-shrink-0"
              >
                {t("contribute")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <SubmitDialog
        open={showConfirmDialog}
        onOpenChange={setShowConfirmDialog}
        onConfirm={handleConfirmSubmit}
        fullyAnsweredCount={fullyAnsweredCount}
        partialCount={partialCount}
        unansweredCount={unansweredCount}
        flaggedCount={flaggedSet.size}
        labels={{
          title: t("submitDialogTitle"),
          description: t("submitDialogDescription"),
          answered: t("answered"),
          partiallyAnswered: t("partiallyAnswered"),
          unanswered: t("unanswered"),
          flagged: t("submitDialogFlagged"),
          warningBoth: t("submitDialogWarningBoth", { unanswered: unansweredCount, partial: partialCount }),
          warningUnanswered: t("submitDialogWarningUnanswered", { count: unansweredCount }),
          warningPartial: t("submitDialogWarningPartial", { count: partialCount }),
          cancel: t("cancel"),
          submitExam: t("submitExam"),
        }}
      />
    </div>
  );
}
