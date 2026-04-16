"use client";

/**
 * SurvivalMode — main orchestrator for Survival Mode gameplay.
 *
 * Wires the useSurvivalMode hook to QuestionCard, AnswerList,
 * FeedbackAlert, and SurvivalResults. Forward-only, no back nav.
 * Includes per-question countdown timer and pause-between-questions.
 *
 * Questions from all certifications, shuffled client-side.
 */

import type { Question } from "@/types/quiz";
import { cn } from "@/lib/utils";
import { useSurvivalMode } from "@/hooks/useSurvivalMode";
import { useTranslations } from "next-intl";
import { renderCodeSpans } from "@/lib/render-code-spans";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { AnswerList } from "@/components/quiz/AnswerList";
import { FeedbackAlert } from "@/components/quiz/FeedbackAlert";
import { SurvivalResults } from "@/components/games/SurvivalResults";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Check, Pause, Play, Timer } from "lucide-react";

interface SurvivalModeProps {
  questions: Question[];
}

export function SurvivalMode({ questions }: SurvivalModeProps) {
  const t = useTranslations("Survival");
  const {
    state,
    currentQuestion,
    selectedAnswers,
    toggleAnswer,
    confirmAnswer,
    isAnswerComplete,
    restart,
    result,
    timeRemaining,
    timeLimitSeconds,
    pauseRequested,
    togglePause,
  } = useSurvivalMode(questions);

  // Loading state while questions shuffle
  if (state.phase === "loading" || !currentQuestion) {
    return (
      <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
        <Skeleton className="h-8 w-48 mb-6" />
        <Skeleton className="h-[400px] rounded-xl" />
      </div>
    );
  }

  // Results screen
  if (result) {
    return (
      <div className="px-4 sm:px-8 py-6 sm:py-12">
        <SurvivalResults result={result} onRestart={restart} />
      </div>
    );
  }

  // Paused screen
  if (state.phase === "paused") {
    return (
      <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
        {/* Status bar (same layout, keeps context) */}
        <StatusBar state={state} timeRemaining={timeLimitSeconds} timeLimitSeconds={timeLimitSeconds} pauseRequested={true} onTogglePause={togglePause} t={t} />

        <Card className="border-[1.5px] mt-6">
          <CardContent className="p-8 sm:p-12 text-center">
            <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Pause className="size-8 text-primary" />
            </div>
            <h2 className="font-display text-[24px] sm:text-[28px] font-extrabold tracking-tight text-foreground mb-2">
              {t("paused")}
            </h2>
            <p className="text-[14px] text-muted-foreground mb-8 max-w-[360px] mx-auto">
              {t("pausedDescription")}
            </p>
            <Button
              onClick={togglePause}
              className="bg-foreground text-card hover:bg-foreground/90 rounded-[9px] text-[14px] font-semibold px-8"
            >
              <Play data-icon="inline-start" className="size-4" />
              {t("resume")}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const isFeedback = state.phase === "feedback";
  const canConfirm = state.phase === "playing" && isAnswerComplete();

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
      {/* Status bar */}
      <StatusBar state={state} timeRemaining={timeRemaining} timeLimitSeconds={timeLimitSeconds} pauseRequested={pauseRequested} onTogglePause={togglePause} t={t} />

      {/* Pause queued banner */}
      {pauseRequested && (
        <div className="flex items-center gap-2 rounded-lg bg-primary/10 border border-primary/20 px-4 py-2.5 mb-4 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-200">
          <Pause className="size-4 text-primary shrink-0" />
          <span className="text-[13px] font-medium text-primary">
            {t("pauseBanner")}
          </span>
        </div>
      )}

      {/* Question card */}
      <QuestionCard
        headerLabel={t("questionCounter", { current: state.currentIndex + 1 })}
        headerActions={
          <div className="flex items-center gap-3">
            {/* Timer in header */}
            <TimerDisplay timeRemaining={timeRemaining} timeLimitSeconds={timeLimitSeconds} compact />
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-card/50 tracking-wide uppercase">
              <Heart className={cn("size-3.5", state.lives > 0 ? "text-destructive fill-destructive" : "text-card/30")} />
              {t("livesCount", { count: state.lives })}
            </span>
          </div>
        }
        footer={
          <div className="px-4 sm:px-7 py-4 sm:py-5 flex items-center justify-end">
            {!isFeedback && (
              <Button
                onClick={confirmAnswer}
                disabled={!canConfirm}
                className="bg-foreground text-card hover:bg-foreground/90"
              >
                <Check data-icon="inline-start" className="size-4" />
                {t("confirm")}
              </Button>
            )}
            {isFeedback && (
              <span className="text-[13px] text-muted-foreground font-medium">
                {pauseRequested ? t("pausingNext") : t("nextQuestionIn")}
              </span>
            )}
          </div>
        }
      >
        <div
          key={state.currentIndex}
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
            showResults={isFeedback}
            isDisabled={isFeedback}
            showSelectionHint={!isFeedback}
            dimUnselected
            onToggle={toggleAnswer}
            labels={{
              answerGroup: t("answerGroup"),
              answerOption: (num, text) => t("answerOption", { number: num, text }),
              selectExactly: t("selectExactly", { count: currentQuestion.answers.filter((a) => a.isCorrect).length }),
              yourAnswer: t("yourAnswer"),
            }}
          />

          {isFeedback && state.lastAnswerCorrect !== null && (
            <FeedbackAlert
              isCorrect={state.lastAnswerCorrect}
              correctLabel={t("correctFeedback")}
              incorrectLabel={t("incorrectFeedback")}
              className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-1 motion-safe:duration-200"
            />
          )}
        </div>
      </QuestionCard>
    </div>
  );
}

// ── Timer display ──────────────────────────────────────────────────

function TimerDisplay({ timeRemaining, timeLimitSeconds, compact }: { timeRemaining: number; timeLimitSeconds: number; compact?: boolean }) {
  const fraction = timeRemaining / timeLimitSeconds;
  const isUrgent = timeRemaining <= 10;
  const isCritical = timeRemaining <= 5;

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const display = minutes > 0
    ? `${minutes}:${seconds.toString().padStart(2, "0")}`
    : `${seconds}s`;

  if (compact) {
    return (
      <span className={cn(
        "font-display text-[12px] font-bold tabular-nums tracking-wide",
        isCritical ? "text-destructive animate-pulse" : isUrgent ? "text-warning" : "text-card/60",
      )}>
        {display}
      </span>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Timer className={cn("size-4", isCritical ? "text-destructive" : isUrgent ? "text-warning" : "text-muted-foreground")} />
      <div className="flex items-center gap-2 min-w-[100px]">
        <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
          <div
            className={cn(
              "h-full rounded-full transition-all duration-1000 ease-linear",
              isCritical ? "bg-destructive" : isUrgent ? "bg-warning" : "bg-primary",
            )}
            style={{ width: `${fraction * 100}%` }}
          />
        </div>
        <span className={cn(
          "font-display text-[14px] font-bold tabular-nums min-w-[40px] text-right",
          isCritical ? "text-destructive animate-pulse" : isUrgent ? "text-warning" : "text-foreground",
        )}>
          {display}
        </span>
      </div>
    </div>
  );
}

// ── Status bar ─────────────────────────────────────────────────────

interface StatusBarProps {
  state: { lives: number; correct: number; currentIndex: number; phase: string };
  timeRemaining: number;
  timeLimitSeconds: number;
  pauseRequested: boolean;
  onTogglePause: () => void;
  t: ReturnType<typeof useTranslations>;
}

function StatusBar({ state, timeRemaining, timeLimitSeconds, pauseRequested, onTogglePause, t }: StatusBarProps) {
  return (
    <div className="flex items-center justify-between mb-6 gap-4">
      <div className="flex items-center gap-4">
        {/* Lives */}
        <div className="flex items-center gap-1.5">
          <Heart className={cn("size-5", state.lives > 0 ? "text-destructive fill-destructive" : "text-muted-foreground")} />
          <span className="font-display text-[14px] font-bold text-foreground tabular-nums">
            {state.lives}
          </span>
        </div>

        {/* Score */}
        <div className="flex items-center gap-1.5 text-[14px] text-muted-foreground">
          <span className="font-display font-bold text-foreground tabular-nums">{state.correct}</span>
          <span>{t("correct")}</span>
        </div>

        {/* Timer */}
        <TimerDisplay timeRemaining={timeRemaining} timeLimitSeconds={timeLimitSeconds} />
      </div>

      <div className="flex items-center gap-3">
        {/* Pause button */}
        {state.phase !== "paused" && (
          <button
            type="button"
            onClick={onTogglePause}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[12px] font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
              pauseRequested
                ? "bg-primary/10 text-primary border border-primary/30"
                : "text-muted-foreground hover:text-foreground hover:bg-muted",
            )}
            title={pauseRequested ? t("pauseQueued") : t("pause")}
          >
            <Pause className="size-3.5" />
            <span className="hidden sm:inline">{pauseRequested ? t("pauseQueued") : t("pause")}</span>
          </button>
        )}

        {/* Question counter */}
        <span className="font-display text-[13px] font-bold text-muted-foreground tracking-wide">
          {t("questionCounter", { current: state.currentIndex + 1 })}
        </span>
      </div>
    </div>
  );
}
