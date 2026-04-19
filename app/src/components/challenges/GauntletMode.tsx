"use client";

/**
 * GauntletMode — main orchestrator for Gauntlet gameplay.
 *
 * Two-column layout: question card (left) + sticky sidebar (right).
 * Sidebar shows game name, lives, per-question timer, score, pause.
 * Collapses to compact horizontal strip on mobile.
 */

import type { Question } from "@/types/quiz";
import { cn } from "@/lib/utils";
import { useGauntletMode } from "@/hooks/useGauntletMode";
import { useTranslations } from "next-intl";
import { renderCodeSpans } from "@/lib/render-code-spans";
import { QuestionCard } from "@/components/quiz/QuestionCard";
import { AnswerList } from "@/components/quiz/AnswerList";
import { FeedbackAlert } from "@/components/quiz/FeedbackAlert";
import { GauntletResults } from "@/components/challenges/GauntletResults";
import { SaveResultButton } from "@/components/challenges/SaveResultButton";
import { ChallengeSidebar, LivesDisplay, TimerBar, PauseButton } from "@/components/challenges/ChallengeSidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Pause, Play, ArrowRight, Heart } from "lucide-react";

interface GauntletModeProps {
  questions: Question[];
}

export function GauntletMode({ questions }: GauntletModeProps) {
  const t = useTranslations("Gauntlet");
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
    timeLimitSeconds,
    pauseRequested,
    togglePause,
    failedQuestion,
    failedAnswers,
    failedByTimeout,
    proceedToResults,
    continueAfterWrong,
  } = useGauntletMode(questions);

  function buildReportHref(q: Question) {
    const fileLink = `[${q.id}](https://github.com/FidelusAleksander/ghcertified/blob/main/questions/en/${q.cert}/question-${q.id.replace(`${q.cert}-`, "")}.md)`;
    const title = encodeURIComponent(t("reportIssueTitle", { cert: q.cert, questionId: q.id }));
    const body = encodeURIComponent(t("reportIssueBody", { question: q.question, fileLink }));
    return `https://github.com/FidelusAleksander/ghcertified/issues/new?title=${title}&body=${body}&labels=question-issue`;
  }

  // Shared sidebar element reused across phases
  const sidebar = (frozen?: boolean) => (
    <ChallengeSidebar
      title={tChallenges("gauntletMode")}
      icon={<Heart className="size-4 text-destructive" />}
      livesSlot={<LivesDisplay lives={state.lives} initialLives={state.initialLives} />}
      timerSlot={<TimerBar timeRemaining={frozen ? timeLimitSeconds : timeRemaining} timeLimitSeconds={timeLimitSeconds} />}
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

  // Loading
  if (state.phase === "loading" || !currentQuestion) {
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

  // Results screen (full-width, no sidebar)
  if (result) {
    return (
      <div className="px-4 sm:px-8 py-6 sm:py-12">
        <GauntletResults
          result={result}
          onRestart={restart}
          saveAction={<SaveResultButton gameType="gauntlet" result={result} />}
        />
      </div>
    );
  }

  // Wrong answer review
  if ((state.phase === "game_over_review" || state.phase === "wrong_review") && failedQuestion) {
    const isGameOver = state.phase === "game_over_review";
    return (
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 items-start">
          <QuestionCard
            headerLabel={tChallenges("gauntletMode")}
            reportHref={buildReportHref(failedQuestion)}
            reportLabel={t("report")}
            reportTooltip={t("reportTooltip")}
            headerActions={<LivesDisplay lives={state.lives} initialLives={state.initialLives} compact />}
            footer={
              <div className="px-4 sm:px-7 py-4 sm:py-5 flex items-center justify-end">
                <Button
                  onClick={isGameOver ? proceedToResults : continueAfterWrong}
                  className="bg-foreground text-card hover:bg-foreground/90"
                >
                  <ArrowRight data-icon="inline-start" className="size-4" />
                  {isGameOver ? t("continueToResults") : t("continueNext")}
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
                incorrectLabel={
                  failedByTimeout
                    ? (isGameOver ? t("timeUpGameOver") : t("timeUpLifeLost"))
                    : (isGameOver ? t("wrongGameOver") : t("wrongLifeLost"))
                }
                className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-1 motion-safe:duration-200"
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
        <TimerBar timeRemaining={timeRemaining} timeLimitSeconds={timeLimitSeconds} />
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
          headerLabel={tChallenges("gauntletMode")}
          reportHref={buildReportHref(currentQuestion)}
          reportLabel={t("report")}
          reportTooltip={t("reportTooltip")}
          headerActions={
            <div className="flex items-center gap-3">
              <LivesDisplay lives={state.lives} initialLives={state.initialLives} compact />
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
                incorrectLabel={t("wrongLifeLost")}
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
