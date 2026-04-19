"use client";

/**
 * TimeTrialResults — end-of-run results screen for Time Trial.
 *
 * Performance-tiered with fun titles, stat breakdown, and
 * celebratory visuals for high scores.
 */

import { useState, useEffect, type ReactNode } from "react";
import type { ChallengeResult } from "@/types/challenges";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, RotateCcw, ArrowLeft, Trophy } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

interface TimeTrialResultsProps {
  result: ChallengeResult;
  onRestart: () => void;
  saveAction?: ReactNode;
}

function getTier(correct: number) {
  if (correct >= 50) return { emoji: "🏆", title: "resultLegendary", color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/30", glow: true };
  if (correct >= 35) return { emoji: "🔥", title: "resultBlaze", color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/30", glow: true };
  if (correct >= 18) return { emoji: "⚡", title: "resultQuick", color: "text-primary", bg: "bg-primary/10", border: "border-primary/30", glow: false };
  if (correct >= 8) return { emoji: "⏱️", title: "resultSteady", color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/30", glow: false };
  return { emoji: "⏰", title: "resultOutOfTime", color: "text-muted-foreground", bg: "bg-muted", border: "border-border", glow: false };
}

export function TimeTrialResults({ result, onRestart, saveAction }: TimeTrialResultsProps) {
  const locale = useLocale();
  const t = useTranslations("TimeTrial");
  const tChallenges = useTranslations("Challenges");
  const animatedCorrect = useCountUp(result.correct);
  const total = result.correct + result.wrong;
  const tier = getTier(result.correct);
  const accuracy = total > 0 ? Math.round((result.correct / total) * 100) : 0;

  // Delayed entrance for stats
  const [showStats, setShowStats] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowStats(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-[520px] mx-auto motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-500">
      <Card className={cn("border-[1.5px] shadow-sm overflow-hidden relative", tier.glow && "shadow-lg")}>
        {/* Decorative top stripe */}
        <div className={cn("h-1.5 w-full", tier.bg)} />

        <CardContent className="p-8 sm:p-10">
          {/* Tier icon + title */}
          <div className="flex flex-col items-center mb-6">
            <div className="size-20 rounded-2xl flex items-center justify-center mb-4 bg-primary/10">
              <Timer className="size-10 text-primary" />
            </div>
            <div className="text-center">
              <span className="text-2xl">{tier.emoji}</span>
              <h2 className="font-display text-[22px] sm:text-[26px] font-extrabold tracking-tight text-foreground mt-1">
                {t(tier.title)}
              </h2>
            </div>
          </div>

          {/* Big score number */}
          <div className="text-center mb-8">
            <div className={cn("font-display text-[64px] sm:text-[72px] font-extrabold leading-none tabular-nums", tier.color)}>
              {animatedCorrect}
            </div>
            <div className="text-[14px] text-muted-foreground mt-1 font-medium">
              {t("questionsAnswered")}
            </div>
          </div>

          {/* Stat cards */}
          <div className={cn(
            "grid grid-cols-3 gap-3 mb-8 transition-all duration-500",
            showStats ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
          )}>
            <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-3 text-center">
              <div className="font-display text-[22px] font-extrabold text-emerald-600 tabular-nums">
                {result.correct}
              </div>
              <div className="text-[11px] font-semibold text-emerald-600/70 uppercase tracking-wide">
                {t("correct")}
              </div>
            </div>
            <div className="rounded-xl bg-destructive/10 border border-destructive/20 p-3 text-center">
              <div className="font-display text-[22px] font-extrabold text-destructive tabular-nums">
                {result.wrong}
              </div>
              <div className="text-[11px] font-semibold text-destructive/70 uppercase tracking-wide">
                {t("wrong")}
              </div>
            </div>
            <div className="rounded-xl bg-muted border border-border p-3 text-center">
              <div className="font-display text-[22px] font-extrabold text-foreground tabular-nums">
                {accuracy}%
              </div>
              <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
                {t("accuracy")}
              </div>
            </div>
          </div>

          {/* Save action slot */}
          {saveAction}

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
              render={<Link href={`/${locale}/challenges/leaderboard?tab=time-trial`} />}
              nativeButton={false}
              variant="outline"
              className="w-full rounded-[9px] text-[14px] font-semibold"
            >
              <Trophy data-icon="inline-start" className="size-4" />
              {tChallenges("viewLeaderboard")}
            </Button>
            <Button
              render={<Link href={`/${locale}/challenges`} />}
              nativeButton={false}
              variant="outline"
              className="w-full rounded-[9px] text-[14px] font-semibold"
            >
              <ArrowLeft data-icon="inline-start" className="size-4" />
              {t("backToChallenges")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
