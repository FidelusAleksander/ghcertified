"use client";

/**
 * TimeTrialResults — end-of-run results screen for Time Trial.
 *
 * Primary metric is correct answers count.
 * Secondary info: total questions attempted.
 */

import type { GameResult } from "@/types/games";
import { useCountUp } from "@/hooks/useCountUp";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Timer, RotateCcw, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

interface TimeTrialResultsProps {
  result: GameResult;
  onRestart: () => void;
}

export function TimeTrialResults({ result, onRestart }: TimeTrialResultsProps) {
  const locale = useLocale();
  const t = useTranslations("TimeTrial");
  const animatedCorrect = useCountUp(result.correct);
  const total = result.correct + result.wrong;

  return (
    <div className="max-w-[520px] mx-auto motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-400">
      <Card className="border-[1.5px] shadow-sm overflow-hidden">
        <CardContent className="p-8 sm:p-10">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="size-20 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Timer className="size-10 text-primary" />
            </div>
          </div>

          {/* Score */}
          <div className="text-center mb-6">
            <div className="font-display text-[48px] font-extrabold text-foreground leading-none tabular-nums">
              {animatedCorrect}
            </div>
            <div className="text-[14px] text-muted-foreground mt-1">
              {t("questionsAnswered")}
            </div>
            <div className="text-[13px] text-muted-foreground/70 mt-0.5">
              {t("totalAttempted", { count: total })}
            </div>
          </div>

          {/* Progress */}
          <Progress value={total > 0 ? (result.correct / total) * 100 : 0} className="h-2.5 mb-8" />

          {/* Actions */}
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
