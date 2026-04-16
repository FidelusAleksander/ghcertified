"use client";

/**
 * SurvivalMode — in-game UI for Survival Mode.
 *
 * Forward-only, one question at a time. 1 life.
 * Reuses QuestionCard, AnswerList, AnswerOption, FeedbackAlert from quiz/.
 * Header shows lives (heart), running score, question number, countdown timer,
 * and a pause button.
 *
 * Timer: 60 seconds per question. Expiry = game over.
 * Pause: doesn't freeze current question — user must complete it.
 *   After confirming, the game pauses before showing the next question.
 *   Unpausing reveals the next question with a fresh timer.
 *
 * Answer flow: select → confirm → feedback → auto-advance (or pause) or game over.
 */

import { useState, useCallback, useEffect, useRef } from "react";
import type { Question } from "@/types/quiz";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { localePath } from "@/lib/locales";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Heart, Send, Pause, Play, Timer } from "lucide-react";
import { renderCodeSpans } from "@/lib/render-code-spans";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { AnswerList } from "@/components/quiz/AnswerList";
import { FeedbackAlert } from "@/components/quiz/FeedbackAlert";
import { SurvivalResults } from "@/components/games/SurvivalResults";
import { useSurvivalMode } from "@/hooks/useSurvivalMode";

const FEEDBACK_DELAY_MS = 1500;
const QUESTION_TIME_LIMIT = 60;

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
    timeUp,
    nextQuestion,
    restart,
    isLoading,
  } = useSurvivalMode(questions);

  const [selectedAnswers, setSelectedAnswers] = useState<Set<string>>(new Set());
  const [feedbackState, setFeedbackState] = useState<"selecting" | "feedback">("selecting");
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);
  const [transitionKey, setTransitionKey] = useState(0);
  const feedbackTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Timer state
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME_LIMIT);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Pause state — "pending" means user hit pause, will take effect after current question
  const [pauseState, setPauseState] = useState<"running" | "pending" | "paused">("running");

  // Start/reset timer when question changes (via transitionKey) and game is playing
  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (state !== "playing" || pauseState === "paused") return;

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          timerRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [transitionKey, state, pauseState]);

  // Handle timer expiry
  useEffect(() => {
    if (timeLeft === 0 && state === "playing" && feedbackState === "selecting") {
      timeUp();
    }
  }, [timeLeft, state, feedbackState, timeUp]);

  // Stop timer when feedback is shown (answer submitted)
  useEffect(() => {
    if (feedbackState === "feedback" && timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [feedbackState]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
      if (timerRef.current) clearInterval(timerRef.current);
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
      // If pause is pending, pause instead of auto-advancing
      if (pauseState === "pending") {
        feedbackTimerRef.current = setTimeout(() => {
          setPauseState("paused");
        }, FEEDBACK_DELAY_MS);
      } else {
        // Show feedback, then advance after delay
        feedbackTimerRef.current = setTimeout(() => {
          nextQuestion();
          setSelectedAnswers(new Set());
          setFeedbackState("selecting");
          setTransitionKey((k) => k + 1);
          setTimeLeft(QUESTION_TIME_LIMIT);
        }, FEEDBACK_DELAY_MS);
      }
    }
    // Wrong answer → game_over state set by hook, no auto-advance needed
  }, [selectedAnswers, feedbackState, submitAnswer, nextQuestion, pauseState]);

  const handleTogglePause = useCallback(() => {
    if (pauseState === "running") {
      // Mark as pending — will pause after current question is answered
      setPauseState("pending");
    } else if (pauseState === "pending") {
      // Cancel pending pause
      setPauseState("running");
    } else if (pauseState === "paused") {
      // Resume — advance to next question
      setPauseState("running");
      nextQuestion();
      setSelectedAnswers(new Set());
      setFeedbackState("selecting");
      setTransitionKey((k) => k + 1);
      setTimeLeft(QUESTION_TIME_LIMIT);
    }
  }, [pauseState, nextQuestion]);

  const handlePlayAgain = useCallback(() => {
    if (feedbackTimerRef.current) clearTimeout(feedbackTimerRef.current);
    if (timerRef.current) clearInterval(timerRef.current);
    restart();
    setSelectedAnswers(new Set());
    setFeedbackState("selecting");
    setTransitionKey(0);
    setPauseState("running");
    setTimeLeft(QUESTION_TIME_LIMIT);
  }, [restart]);

  // Timer visual helpers
  const timerPercent = (timeLeft / QUESTION_TIME_LIMIT) * 100;
  const timerUrgent = timeLeft <= 10;

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

  // Paused overlay
  if (pauseState === "paused") {
    return (
      <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
        {/* Header bar — same as gameplay */}
        <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
          <h1 className="font-display text-[24px] sm:text-[30px] font-extrabold text-foreground tracking-tight">
            {t("title")}
          </h1>
          <div className="flex items-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-1.5" aria-label={t("livesLabel", { count: lives })}>
              <Heart className="size-5 text-destructive fill-destructive" />
              <span className="tabular-nums font-bold">{lives}</span>
            </div>
            <div className="flex items-center gap-1.5 text-muted-foreground">
              <span className="text-xs font-bold uppercase tracking-wide">{t("score")}</span>
              <span className="tabular-nums font-bold text-foreground">{score}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-20 gap-6 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-300">
          <div className="size-16 rounded-full bg-muted flex items-center justify-center">
            <Pause className="size-8 text-muted-foreground" />
          </div>
          <div className="text-center">
            <h2 className="font-display text-xl font-extrabold text-foreground tracking-tight mb-1">
              {t("paused")}
            </h2>
            <p className="text-sm text-muted-foreground">
              {t("pausedDescription")}
            </p>
          </div>
          <Button
            onClick={handleTogglePause}
            className="bg-foreground text-card hover:bg-foreground/90"
          >
            <Play data-icon="inline-start" className="size-4" />
            {t("resume")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
      {/* Header bar */}
      <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
        <h1 className="font-display text-[24px] sm:text-[30px] font-extrabold text-foreground tracking-tight">
          {t("title")}
        </h1>
        <div className="flex items-center gap-4 text-sm font-medium">
          {/* Timer */}
          <div
            className={cn(
              "flex items-center gap-1.5 tabular-nums font-bold transition-colors",
              timerUrgent ? "text-destructive" : "text-muted-foreground",
            )}
            aria-label={t("timeRemaining", { seconds: timeLeft })}
          >
            <Timer className={cn("size-4", timerUrgent && "animate-pulse")} />
            <span>{timeLeft}s</span>
          </div>
          {/* Pause */}
          <button
            type="button"
            onClick={handleTogglePause}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-semibold tracking-wide uppercase transition-colors focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
              pauseState === "pending"
                ? "text-amber-600 bg-amber-100 dark:bg-amber-950/30 dark:text-amber-400"
                : "text-muted-foreground hover:text-foreground hover:bg-muted",
            )}
            title={pauseState === "pending" ? t("pausePending") : t("pause")}
          >
            <Pause className="size-3.5" />
            <span className="hidden sm:inline">
              {pauseState === "pending" ? t("pausePending") : t("pause")}
            </span>
          </button>
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
          <div className="flex flex-col gap-1.5">
            {/* Question progress bar */}
            <div className="h-1 w-full rounded-full bg-card/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-300 ease-out"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
            {/* Timer bar */}
            <div className="h-1.5 w-full rounded-full bg-card/10 overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-1000 linear",
                  timerUrgent ? "bg-destructive" : "bg-amber-400",
                  showFeedback && "opacity-50",
                )}
                style={{ width: `${timerPercent}%` }}
              />
            </div>
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
