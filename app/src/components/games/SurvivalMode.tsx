"use client";

/**
 * SurvivalMode — main orchestrator for Survival Mode gameplay.
 *
 * Wires the useSurvivalMode hook to QuestionCard, AnswerList,
 * FeedbackAlert, and SurvivalResults. Forward-only, no back nav.
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
import { Heart, Check } from "lucide-react";

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

  const isFeedback = state.phase === "feedback";
  const canConfirm = state.phase === "playing" && isAnswerComplete();

  return (
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
      {/* Status bar */}
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
        </div>

        {/* Question counter */}
        <span className="font-display text-[13px] font-bold text-muted-foreground tracking-wide">
          {t("questionCounter", { current: state.currentIndex + 1 })}
        </span>
      </div>

      {/* Question card */}
      <QuestionCard
        headerLabel={t("questionCounter", { current: state.currentIndex + 1 })}
        headerActions={
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-card/50 tracking-wide uppercase">
            <Heart className={cn("size-3.5", state.lives > 0 ? "text-destructive fill-destructive" : "text-card/30")} />
            {t("livesCount", { count: state.lives })}
          </span>
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
                {t("nextQuestionIn")}
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
