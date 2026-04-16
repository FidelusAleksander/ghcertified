"use client";

/**
 * SurvivalResults — end-of-run results screen for Survival Mode.
 *
 * Primary metric is streak (questions survived), not percentage.
 * Accepts optional saveAction prop for future auth/persistence.
 */

import type { ReactNode } from "react";
import type { GameResult } from "@/types/games";
import { useCountUp } from "@/hooks/useCountUp";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Heart, RotateCcw, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

interface SurvivalResultsProps {
  result: GameResult;
  onRestart: () => void;
  saveAction?: ReactNode;
}

export function SurvivalResults({ result, onRestart, saveAction }: SurvivalResultsProps) {
  const locale = useLocale();
  const t = useTranslations("Survival");
  const animatedStreak = useCountUp(result.correct);
  const isFullClear = result.wrong === 0;

  return (
    <div className="max-w-[520px] mx-auto motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-400">
      <Card className="border-[1.5px] shadow-sm overflow-hidden">
        <CardContent className="p-8 sm:p-10">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className={`size-20 rounded-2xl flex items-center justify-center ${isFullClear ? "bg-success/10" : "bg-destructive/10"}`}>
              <Heart className={`size-10 ${isFullClear ? "text-success" : "text-destructive"}`} />
            </div>
          </div>

          {/* Streak */}
          <div className="text-center mb-6">
            <div className="font-display text-[48px] font-extrabold text-foreground leading-none tabular-nums">
              {animatedStreak}
            </div>
            <div className="text-[14px] text-muted-foreground mt-1">
              {t("questionsSurvived")}
            </div>
          </div>

          {/* Progress bar */}
          <Progress value={(result.correct / result.totalQuestions) * 100} className="h-2.5 mb-8" />

          {/* Save action slot */}
          {saveAction}

          {/* Action buttons */}
          <div className="flex flex-col gap-2.5">
            <Button
              onClick={onRestart}
              className="w-full rounded-[9px] text-[14px] font-semibold bg-foreground text-card hover:bg-foreground/90"
            >
              <RotateCcw data-icon="inline-start" className="size-4" />
              {t("playAgain")}
            </Button>
            <Button
              render={<Link href={`/${locale}/games`} />}
              nativeButton={false}
              variant="outline"
              className="w-full rounded-[9px] text-[14px] font-semibold"
            >
              <ArrowLeft data-icon="inline-start" className="size-4" />
              {t("backToGames")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
