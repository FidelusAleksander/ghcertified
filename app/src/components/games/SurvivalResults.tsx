"use client";

/**
 * SurvivalResults — end-of-run results screen for Survival Mode.
 *
 * Shows final score percentage, correct/wrong/unanswered breakdown,
 * and action buttons for replay and navigation.
 *
 * Accepts optional `saveAction` prop as a future hook point for
 * auth/persistence (renders nothing now).
 */

import type { ReactNode } from "react";
import type { GameResult } from "@/hooks/useSurvivalMode";
import { useCountUp } from "@/hooks/useCountUp";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle, MinusCircle, RotateCcw, ArrowLeft } from "lucide-react";

export interface SurvivalResultsLabels {
  title: string;
  scoreOf: string;
  correct: string;
  wrong: string;
  unanswered: string;
  playAgain: string;
  backToGames: string;
  completedMessage: string;
  gameOverMessage: string;
}

export interface SurvivalResultsProps {
  result: GameResult;
  isCompleted: boolean;
  onPlayAgain: () => void;
  backHref: string;
  labels: SurvivalResultsLabels;
  /** Future hook point for auth/persistence — renders nothing now. */
  saveAction?: ReactNode;
}

export function SurvivalResults({
  result,
  isCompleted,
  onPlayAgain,
  backHref,
  labels,
  saveAction,
}: SurvivalResultsProps) {
  const animatedPercent = useCountUp(result.scorePercent);

  return (
    <div className="max-w-md mx-auto motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-300">
      <Card className="shadow-md border-[1.5px] overflow-hidden">
        <CardContent className="p-6 sm:p-8">
          {/* Header message */}
          <div className="text-center mb-6">
            <div className="text-3xl mb-2">{isCompleted ? "🏆" : "💀"}</div>
            <h2 className="font-display text-xl font-extrabold text-foreground tracking-tight">
              {labels.title}
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              {isCompleted ? labels.completedMessage : labels.gameOverMessage}
            </p>
          </div>

          {/* Score */}
          <div className="text-center mb-5">
            <span className="font-display text-[48px] font-extrabold text-foreground leading-none tabular-nums">
              {animatedPercent}%
            </span>
            <div className="text-[13px] text-muted-foreground mt-1">
              {labels.scoreOf}
            </div>
          </div>

          <Progress value={(result.correct / result.total) * 100} className="h-2.5 mb-5" />

          {/* Breakdown */}
          <div className="flex flex-col gap-2.5 mb-6">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="size-4 text-success" />
                {labels.correct}
              </span>
              <span className="font-bold text-foreground tabular-nums">{result.correct}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <XCircle className="size-4 text-destructive" />
                {labels.wrong}
              </span>
              <span className="font-bold text-foreground tabular-nums">{result.wrong}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-muted-foreground">
                <MinusCircle className="size-4 text-muted-foreground" />
                {labels.unanswered}
              </span>
              <span className="font-bold text-foreground tabular-nums">{result.unanswered}</span>
            </div>
          </div>

          {/* Future save action hook */}
          {saveAction}

          {/* Actions */}
          <div className="flex flex-col gap-2.5">
            <Button onClick={onPlayAgain} className="w-full bg-foreground text-card hover:bg-foreground/90">
              <RotateCcw data-icon="inline-start" className="size-4" />
              {labels.playAgain}
            </Button>
            <Button
              render={<a href={backHref} />}
              nativeButton={false}
              variant="outline"
              className="w-full"
            >
              <ArrowLeft data-icon="inline-start" className="size-4" />
              {labels.backToGames}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
