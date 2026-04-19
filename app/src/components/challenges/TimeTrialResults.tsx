"use client";

/**
 * TimeTrialResults — end-of-run results screen for Time Trial.
 *
 * Thin wrapper around ChallengeResults with Time Trial-specific
 * tier thresholds, icon, and translation namespace.
 */

import type { ReactNode } from "react";
import type { ChallengeResult } from "@/types/challenges";
import { Timer } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { ChallengeResults, type Tier } from "@/components/challenges/ChallengeResults";

interface TimeTrialResultsProps {
  result: ChallengeResult;
  onRestart: () => void;
  saveAction?: ReactNode;
}

function getTier(correct: number): Tier {
  if (correct >= 50) return { emoji: "🏆", title: "resultLegendary", color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/30", glow: true };
  if (correct >= 35) return { emoji: "🔥", title: "resultBlaze", color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/30", glow: true };
  if (correct >= 18) return { emoji: "⚡", title: "resultQuick", color: "text-primary", bg: "bg-primary/10", border: "border-primary/30", glow: false };
  if (correct >= 8)  return { emoji: "⏱️", title: "resultSteady", color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/30", glow: false };
  return { emoji: "⏰", title: "resultOutOfTime", color: "text-muted-foreground", bg: "bg-muted", border: "border-border", glow: false };
}

export function TimeTrialResults({ result, onRestart, saveAction }: TimeTrialResultsProps) {
  const locale = useLocale();
  const t = useTranslations("TimeTrial");
  const tChallenges = useTranslations("Challenges");
  const tCC = useTranslations("ChallengeCommon");
  const tier = getTier(result.correct);

  return (
    <ChallengeResults
      result={result}
      onRestart={onRestart}
      saveAction={saveAction}
      icon={Timer}
      iconBg="bg-primary/10"
      iconColor="text-primary"
      tier={{ ...tier, title: t(tier.title) }}
      heroValue={result.correct}
      heroLabel={t("questionsAnswered")}
      statLabels={[tCC("correctCounter"), t("wrong"), tCC("accuracy")]}
      playAgainLabel={tCC("playAgain")}
      viewLeaderboardLabel={tChallenges("viewLeaderboard")}
      backLabel={tCC("backToChallenges")}
      locale={locale}
      leaderboardTab="time-trial"
    />
  );
}
