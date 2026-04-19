"use client";

/**
 * ChallengeResults — shared end-of-run results screen for challenge modes.
 *
 * Accepts mode-specific config (icon, tiers, translations) so Gauntlet
 * and Time Trial can reuse the same layout without duplication.
 */

import { useState, useEffect, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import type { ChallengeResult } from "@/types/challenges";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RotateCcw, ArrowLeft, Trophy } from "lucide-react";
import Link from "next/link";

export interface Tier {
  emoji: string;
  title: string;
  color: string;
  bg: string;
  border: string;
  glow: boolean;
}

export interface ChallengeResultsProps {
  result: ChallengeResult;
  onRestart: () => void;
  saveAction?: ReactNode;
  /** Hero icon shown in the top badge */
  icon: LucideIcon;
  /** Tailwind bg class for the icon container */
  iconBg: string;
  /** Tailwind text class for the icon */
  iconColor: string;
  /** Tier resolved from score */
  tier: Tier;
  /** Large number displayed as the headline stat */
  heroValue: number;
  /** Label beneath the hero number */
  heroLabel: string;
  /** Stat card labels — [correct, wrong, accuracy] */
  statLabels: [string, string, string];
  /** Button / link labels */
  playAgainLabel: string;
  viewLeaderboardLabel: string;
  backLabel: string;
  /** Locale for building links */
  locale: string;
  /** Leaderboard tab query param, e.g. "gauntlet" or "time-trial" */
  leaderboardTab: string;
}

export function ChallengeResults({
  result,
  onRestart,
  saveAction,
  icon: Icon,
  iconBg,
  iconColor,
  tier,
  heroValue,
  heroLabel,
  statLabels,
  playAgainLabel,
  viewLeaderboardLabel,
  backLabel,
  locale,
  leaderboardTab,
}: ChallengeResultsProps) {
  const animatedHero = useCountUp(heroValue);
  const total = result.correct + result.wrong;
  const accuracy = total > 0 ? Math.round((result.correct / total) * 100) : 0;

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
            <div className={cn("size-20 rounded-2xl flex items-center justify-center mb-4", iconBg)}>
              <Icon className={cn("size-10", iconColor)} />
            </div>
            <div className="text-center">
              <span className="text-2xl">{tier.emoji}</span>
              <h2 className="font-display text-[22px] sm:text-[26px] font-extrabold tracking-tight text-foreground mt-1">
                {tier.title}
              </h2>
            </div>
          </div>

          {/* Hero score */}
          <div className="text-center mb-8">
            <div className={cn("font-display text-[64px] sm:text-[72px] font-extrabold leading-none tabular-nums", tier.color)}>
              {animatedHero}
            </div>
            <div className="text-[14px] text-muted-foreground mt-1 font-medium">
              {heroLabel}
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
                {statLabels[0]}
              </div>
            </div>
            <div className="rounded-xl bg-destructive/10 border border-destructive/20 p-3 text-center">
              <div className="font-display text-[22px] font-extrabold text-destructive tabular-nums">
                {result.wrong}
              </div>
              <div className="text-[11px] font-semibold text-destructive/70 uppercase tracking-wide">
                {statLabels[1]}
              </div>
            </div>
            <div className="rounded-xl bg-muted border border-border p-3 text-center">
              <div className="font-display text-[22px] font-extrabold text-foreground tabular-nums">
                {accuracy}%
              </div>
              <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wide">
                {statLabels[2]}
              </div>
            </div>
          </div>

          {/* Save action slot */}
          {saveAction && <div className="mb-4">{saveAction}</div>}

          {/* Actions: single primary CTA + inline secondary links */}
          <div className="flex flex-col gap-2">
            <Button
              onClick={onRestart}
              className="w-full rounded-[9px] text-[14px] font-semibold bg-foreground text-card hover:bg-foreground/90"
            >
              <RotateCcw data-icon="inline-start" className="size-4" />
              {playAgainLabel}
            </Button>

            <div className="flex items-center justify-center gap-1">
              <Button
                render={<Link href={`/${locale}/challenges/leaderboard?tab=${leaderboardTab}`} />}
                nativeButton={false}
                variant="ghost"
                className="rounded-[9px] text-[13px] font-medium text-muted-foreground hover:text-foreground"
              >
                <Trophy data-icon="inline-start" className="size-3.5" />
                {viewLeaderboardLabel}
              </Button>

              <span className="text-muted-foreground/30 text-xs select-none">·</span>

              <Button
                render={<Link href={`/${locale}/challenges`} />}
                nativeButton={false}
                variant="ghost"
                className="rounded-[9px] text-[13px] font-medium text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft data-icon="inline-start" className="size-3.5" />
                {backLabel}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
