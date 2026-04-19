"use client";

/**
 * TimeTrialMode — main orchestrator for Time Trial gameplay.
 *
 * Two-column layout: question card (left) + sticky sidebar (right).
 * Sidebar shows game name, global countdown, time gained/lost, score, pause.
 * Collapses to compact horizontal strip on mobile.
 */

import { useEffect, useState } from "react";
import type { Question } from "@/types/quiz";
import { cn } from "@/lib/utils";
import { useTimeTrialMode, INITIAL_TIME, CORRECT_BONUS, WRONG_PENALTY } from "@/hooks/useTimeTrialMode";
import { useTranslations } from "next-intl";
import { renderCodeSpans } from "@/lib/render-code-spans";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { AnswerList } from "@/components/quiz/AnswerList";
import { FeedbackAlert } from "@/components/quiz/FeedbackAlert";
import { TimeTrialResults } from "@/components/challenges/TimeTrialResults";
import { SaveResultButton } from "@/components/challenges/SaveResultButton";
import { ChallengeSidebar, PauseButton } from "@/components/challenges/ChallengeSidebar";
import { WrongReviewCallout } from "@/components/challenges/WrongReviewCallout";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Pause, Play, Timer, ArrowRight } from "lucide-react";

interface TimeTrialModeProps {
  questions: Question[];
}

export function TimeTrialMode({ questions }: TimeTrialModeProps) {
  const t = useTranslations("TimeTrial");
  const tChallenges = useTranslations("Challenges");
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
    pauseRequested,
    togglePause,
    failedQuestion,
    failedAnswers,
    continueAfterWrong,
    totalGained,
    totalLost,
    lastDelta,
    deltaKey,
  } = useTimeTrialMode(questions);

  function buildReportHref(q: Question) {
    const fileLink = `[${q.id}](https://github.com/FidelusAleksander/ghcertified/blob/main/questions/en/${q.cert}/question-${q.id.replace(`${q.cert}-`, "")}.md)`;
    const title = encodeURIComponent(t("reportIssueTitle", { cert: q.cert, questionId: q.id }));
    const body = encodeURIComponent(t("reportIssueBody", { question: q.question, fileLink }));
    return `https://github.com/FidelusAleksander/ghcertified/issues/new?title=${title}&body=${body}&labels=question-issue`;
  }

  // Shared sidebar reused across phases
  const sidebar = (frozen?: boolean) => (
    <ChallengeSidebar
      title={tChallenges("timeTrialMode")}
      icon={<Timer className="size-4 text-primary" />}
      timerSlot={
        <div className="relative">
          <GlobalTimerDisplay timeRemaining={timeRemaining} />
          {!frozen && <TimeDeltaPopup delta={lastDelta} triggerKey={deltaKey} />}
        </div>
      }
      timerExtra={
        <div className="flex items-center gap-2.5 justify-center">
          {totalGained > 0 && (
            <span className="text-[12px] font-bold tabular-nums text-emerald-500">
              +{formatTimeDelta(totalGained)}
            </span>
          )}
          {totalLost > 0 && (
            <span className="text-[12px] font-bold tabular-nums text-destructive">
              −{formatTimeDelta(totalLost)}
            </span>
          )}
        </div>
      }
      scoreLabel={tChallenges("score")}
      scoreValue={state.correct}
      progressSlot={
        <div className="flex items-center justify-between text-[12px] text-muted-foreground tabular-nums">
          <span>{tChallenges("progress")}</span>
          <span className="font-bold text-foreground">{state.correct + state.wrong} / {state.questions.length}</span>
        </div>
      }
      countersSlot={
        <div className="flex items-center justify-between text-[12px] tabular-nums">
          <span className="text-emerald-500 font-bold">✓ {state.correct}</span>
          <span className="text-destructive font-bold">✗ {state.wrong}</span>
        </div>
      }
      pauseSlot={
        state.phase !== "paused" && !frozen ? (
          <PauseButton
            pauseRequested={pauseRequested}
            onToggle={togglePause}
            label={t("pause")}
            queuedLabel={t("pauseQueued")}
          />
        ) : undefined
      }
    />
  );

  // Loading state while questions shuffle
  if (state.phase === "loading" || !currentQuestion) {
    if (result) {
      return (
        <div className="px-4 sm:px-8 py-6 sm:py-12">
          <TimeTrialResults
            result={result}
            onRestart={restart}
            saveAction={<SaveResultButton gameType="time-trial" result={result} />}
          />
        </div>
      );
    }
    return (
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
        <Skeleton className="h-8 w-48 mb-6" />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          <Skeleton className="h-[400px] rounded-xl" />
          <Skeleton className="h-[280px] rounded-xl hidden lg:block" />
        </div>
      </div>
    );
  }

  // Results screen
  if (result) {
    return (
      <div className="px-4 sm:px-8 py-6 sm:py-12">
        <TimeTrialResults
          result={result}
          onRestart={restart}
          saveAction={<SaveResultButton gameType="time-trial" result={result} />}
        />
      </div>
    );
  }

  // Wrong answer review
  if (state.phase === "wrong_review" && failedQuestion) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">
          <QuestionCard
            headerLabel={tChallenges("timeTrialMode")}
            reportHref={buildReportHref(failedQuestion)}
            reportLabel={t("report")}
            reportTooltip={t("reportTooltip")}
            footer={
              <div className="px-4 sm:px-7 py-4 sm:py-5 flex items-center justify-end">
                <Button
                  onClick={continueAfterWrong}
                  className="bg-foreground text-card hover:bg-foreground/90"
                >
                  <ArrowRight data-icon="inline-start" className="size-4" />
                  {t("continueNext")}
                </Button>
              </div>
            }
          >
            <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:duration-200">
              <div className="text-[17px] font-medium text-foreground leading-relaxed mb-6 text-left">
                {renderCodeSpans(failedQuestion.question)}
                {failedQuestion.codeBlock && renderCodeSpans(failedQuestion.codeBlock)}
              </div>

              <AnswerList
                question={failedQuestion}
                selectedIds={failedAnswers}
                showResults={true}
                isDisabled={true}
                showSelectionHint={false}
                dimUnselected={false}
                onToggle={() => {}}
                labels={{
                  answerGroup: t("answerGroup"),
                  answerOption: (num, text) => t("answerOption", { number: num, text }),
                  selectExactly: t("selectExactly", { count: failedQuestion.answers.filter((a) => a.isCorrect).length }),
                  yourAnswer: t("yourAnswer"),
                }}
              />

              <FeedbackAlert
                isCorrect={false}
                correctLabel={t("correctFeedback")}
                incorrectLabel={t("incorrectFeedback")}
                className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-1 motion-safe:duration-200"
              />

              <WrongReviewCallout
                pausedLabel={t("reviewPaused")}
                reportLabel={t("reportQuestion")}
                reportHref={buildReportHref(failedQuestion)}
              />
            </div>
          </QuestionCard>

          {sidebar(true)}
        </div>
      </div>
    );
  }

  // Paused screen
  if (state.phase === "paused") {
    return (
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">
          <Card className="border-[1.5px]">
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

          {sidebar(true)}
        </div>
      </div>
    );
  }

  // Active gameplay
  const isFeedback = state.phase === "feedback";
  const canConfirm = state.phase === "playing" && isAnswerComplete();

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
      {/* Mobile-only: compact timer bar */}
      <div className="lg:hidden mb-2">
        <GlobalTimerDisplay timeRemaining={timeRemaining} />
      </div>

      {/* Pause queued banner */}
      {pauseRequested && (
        <div className="flex items-center gap-2 rounded-lg bg-primary/10 border border-primary/20 px-4 py-2.5 mb-4 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-200">
          <Pause className="size-4 text-primary shrink-0" />
          <span className="text-[13px] font-medium text-primary">
            {t("pauseBanner")}
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">
        <QuestionCard
          headerLabel={tChallenges("timeTrialMode")}
          reportHref={buildReportHref(currentQuestion)}
          reportLabel={t("report")}
          reportTooltip={t("reportTooltip")}
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

        {sidebar()}
      </div>
    </div>
  );
}

// ── Helpers ────────────────────────────────────────────────────────

/** Format seconds as "Xm Ys" when ≥ 60, otherwise "Xs". */
function formatTimeDelta(seconds: number): string {
  const abs = Math.abs(seconds);
  if (abs < 60) return `${abs}s`;
  const m = Math.floor(abs / 60);
  const s = abs % 60;
  return s > 0 ? `${m}m ${s}s` : `${m}m`;
}

// ── Floating delta popup ───────────────────────────────────────────

function TimeDeltaPopup({ delta, triggerKey }: { delta: number | null; triggerKey: number }) {
  const [visible, setVisible] = useState(false);
  const [displayDelta, setDisplayDelta] = useState<number | null>(null);

  useEffect(() => {
    if (triggerKey === 0 || delta === null) return;
    setDisplayDelta(delta);
    setVisible(true);
    const timeout = setTimeout(() => setVisible(false), 1200);
    return () => clearTimeout(timeout);
  }, [triggerKey, delta]);

  if (!visible || displayDelta === null) return null;

  const isPositive = displayDelta > 0;

  return (
    <span
      key={triggerKey}
      className={cn(
        "absolute -top-6 left-1/2 -translate-x-1/2 font-display text-[14px] font-extrabold tabular-nums pointer-events-none whitespace-nowrap",
        "motion-safe:animate-out motion-safe:fade-out motion-safe:slide-out-to-top-4 motion-safe:duration-1000 motion-safe:fill-forwards",
        isPositive ? "text-emerald-500" : "text-destructive",
      )}
    >
      {isPositive ? `+${displayDelta}s` : `${displayDelta}s`}
    </span>
  );
}

// ── Global timer display ───────────────────────────────────────────

function GlobalTimerDisplay({ timeRemaining, compact }: { timeRemaining: number; compact?: boolean }) {
  const isLow = timeRemaining <= 15;
  const isCritical = timeRemaining <= 5;

  const minutes = Math.floor(Math.max(0, timeRemaining) / 60);
  const seconds = Math.max(0, timeRemaining) % 60;
  const display = minutes > 0
    ? `${minutes}:${seconds.toString().padStart(2, "0")}`
    : `${seconds}s`;

  if (compact) {
    return (
      <span className={cn(
        "font-display text-[12px] font-bold tabular-nums tracking-wide",
        isCritical ? "text-destructive animate-pulse" : isLow ? "text-warning" : "text-card/60",
      )}>
        {display}
      </span>
    );
  }

  const fraction = Math.min(timeRemaining / INITIAL_TIME, 1);

  return (
    <div className="flex items-center gap-2.5 w-full">
      <Timer className={cn("size-4 shrink-0", isCritical ? "text-destructive" : isLow ? "text-warning" : "text-muted-foreground")} />
      <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-linear",
            isCritical ? "bg-destructive" : isLow ? "bg-warning" : "bg-primary",
          )}
          style={{ width: `${Math.max(0, fraction) * 100}%` }}
        />
      </div>
      <span className={cn(
        "font-display text-[14px] font-bold tabular-nums min-w-[40px] text-right",
        isCritical ? "text-destructive animate-pulse" : isLow ? "text-warning" : "text-foreground",
      )}>
        {display}
      </span>
    </div>
  );
}
