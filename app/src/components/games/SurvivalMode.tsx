"use client";

/**
 * SurvivalMode — in-game UI for Survival Mode.
 *
 * Forward-only, one question at a time. 1 life.
 * Reuses QuestionCard, AnswerList, AnswerOption, FeedbackAlert from quiz/.
 * Header shows lives (heart), running score, and question number.
 * Answer flow: select → confirm → feedback → auto-advance or game over.
 */

import { useState, useCallback, useEffect, useRef } from "react";
import type { Question } from "@/types/quiz";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { localePath } from "@/lib/locales";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Heart, Send } from "lucide-react";
import { renderCodeSpans } from "@/lib/render-code-spans";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { AnswerList } from "@/components/quiz/AnswerList";
import { FeedbackAlert } from "@/components/quiz/FeedbackAlert";
import { SurvivalResults } from "@/components/games/SurvivalResults";
import { useSurvivalMode } from "@/hooks/useSurvivalMode";

const FEEDBACK_DELAY_MS = 1500;

interface SurvivalModeProps {
  questions: Question[];
}

export function SurvivalMode({ questions }: SurvivalModeProps) {
  const locale = useLocale();
  const t = useTranslations("SurvivalMode");
  const {
    state,
    currentQuestion,
    currentIndex,
    lives,
    score,
    totalQuestions,
    result,
    submitAnswer,
    nextQuestion,
    restart,
    isLoading,
  } = useSurvivalMode(questions);

  const [selectedAnswers, setSelectedAnswers] = useState<Set<string>>(new Set());
  const [feedbackState, setFeedbackState] = useState<"selecting" | "feedback">("selecting");
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);
  const [transitionKey, setTransitionKey] = useState(0);
  const feedbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
    };
  }, []);

  const handleToggleAnswer = useCallback(
    (answerId: string) => {
      if (!currentQuestion || feedbackState !== "selecting") return;

      setSelectedAnswers((prev) => {
        const next = new Set(prev);
        if (currentQuestion.isMultiSelect) {
          const correctMax = currentQuestion.answers.filter((a) => a.isCorrect).length;
          if (next.has(answerId)) {
            next.delete(answerId);
          } else if (next.size < correctMax) {
            next.add(answerId);
          }
        } else {
          next.clear();
          next.add(answerId);
        }
        return next;
      });
    },
    [currentQuestion, feedbackState],
  );

  const handleConfirm = useCallback(() => {
    if (selectedAnswers.size === 0 || feedbackState !== "selecting") return;

    const isCorrect = submitAnswer(selectedAnswers);
    setLastAnswerCorrect(isCorrect);
    setFeedbackState("feedback");

    if (isCorrect) {
      // Show feedback, then advance after delay
      feedbackTimerRef.current = setTimeout(() => {
        nextQuestion();
        setSelectedAnswers(new Set());
        setFeedbackState("selecting");
        setTransitionKey((k) => k + 1);
      }, FEEDBACK_DELAY_MS);
    }
    // Wrong answer → game_over state set by hook, no auto-advance needed
  }, [selectedAnswers, feedbackState, submitAnswer, nextQuestion]);

  const handlePlayAgain = useCallback(() => {
    if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
    restart();
    setSelectedAnswers(new Set());
    setFeedbackState("selecting");
    setTransitionKey(0);
  }, [restart]);

  // Loading skeleton
  if (isLoading) {
    return (
      <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-8 w-32" />
        </div>
        <Skeleton className="h-[400px] rounded-xl" />
      </div>
    );
  }

  // Results screen
  if ((state === "game_over" || state === "completed") && result) {
    return (
      <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
        <SurvivalResults
          result={result}
          isCompleted={state === "completed"}
          onPlayAgain={handlePlayAgain}
          backHref={localePath(locale, "/games")}
          labels={{
            title: state === "completed" ? t("resultsCompleted") : t("resultsGameOver"),
            scoreOf: t("resultsScoreOf", { score: result.correct, total: result.total }),
            correct: t("resultsCorrect"),
            wrong: t("resultsWrong"),
            unanswered: t("resultsUnanswered"),
            playAgain: t("playAgain"),
            backToGames: t("backToGames"),
            completedMessage: t("completedMessage"),
            gameOverMessage: t("gameOverMessage"),
          }}
        />
      </div>
    );
  }

  if (!currentQuestion) return null;

  const showFeedback = feedbackState === "feedback";
  const isDisabled = showFeedback;

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
      {/* Header bar */}
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <h1 className="font-display text-[24px] sm:text-[30px] font-extrabold text-foreground tracking-tight">
          {t("title")}
        </h1>
        <div className="flex items-center gap-4 text-sm font-medium">
          {/* Lives */}
          <div className="flex items-center gap-1.5" aria-label={t("livesLabel", { count: lives })}>
            <Heart
              className={cn(
                "size-5 transition-colors",
                lives > 0
                  ? "text-destructive fill-destructive"
                  : "text-muted-foreground",
              )}
            />
            <span className="tabular-nums font-bold">{lives}</span>
          </div>
          {/* Score */}
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <span className="text-xs font-bold uppercase tracking-wide">{t("score")}</span>
            <span className="tabular-nums font-bold text-foreground">{score}</span>
          </div>
        </div>
      </div>

      {/* Question card */}
      <QuestionCard
        headerLabel={t("questionNumber", { number: currentIndex + 1 })}
        progressBar={
          <div className="h-1 w-full rounded-full bg-card/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        }
        documentationHref={currentQuestion.documentation}
        reportHref={`https://github.com/FidelusAleksander/ghcertified/issues/new?title=${encodeURIComponent(`[${currentQuestion.cert}] Issue with ${currentQuestion.id}`)}&labels=question-issue`}
        learnMoreLabel={t("learnMore")}
        reportLabel={t("report")}
        reportTooltip={t("reportTooltip")}
        footer={
          <div className="px-4 sm:px-7 py-4 sm:py-5 flex items-center justify-end">
            {!showFeedback && (
              <Button
                onClick={handleConfirm}
                disabled={selectedAnswers.size === 0}
                className="bg-foreground text-card hover:bg-foreground/90"
              >
                <Send data-icon="inline-start" className="size-4" />
                {t("confirm")}
              </Button>
            )}
          </div>
        }
      >
        <div
          key={transitionKey}
          className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-right-2 motion-safe:duration-200"
        >
          {/* Question text */}
          <div className="text-[17px] font-medium text-foreground leading-relaxed mb-6 text-left">
            {renderCodeSpans(currentQuestion.question)}
            {currentQuestion.codeBlock && renderCodeSpans(currentQuestion.codeBlock)}
          </div>

          <AnswerList
            question={currentQuestion}
            selectedIds={selectedAnswers}
            showResults={showFeedback}
            isDisabled={isDisabled}
            showSelectionHint={!showFeedback}
            dimUnselected
            onToggle={handleToggleAnswer}
            labels={{
              answerGroup: t("answerGroup"),
              answerOption: (num, text) => t("answerOption", { number: num, text }),
              selectExactly: t("selectExactly", { count: currentQuestion.answers.filter((a) => a.isCorrect).length }),
              yourAnswer: t("yourAnswer"),
            }}
          />

          {showFeedback && (
            <FeedbackAlert
              isCorrect={lastAnswerCorrect}
              correctLabel={t("correct")}
              incorrectLabel={t("incorrect")}
              className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-1 motion-safe:duration-200"
            />
          )}
        </div>
      </QuestionCard>
    </div>
  );
}
