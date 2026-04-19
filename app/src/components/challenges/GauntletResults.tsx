"use client";

/**
 * GauntletResults — end-of-run results screen for Gauntlet.
 *
 * Thin wrapper around ChallengeResults with Gauntlet-specific
 * tier thresholds, icon, and translation namespace.
 */

import type { ReactNode } from "react";
import type { ChallengeResult } from "@/types/challenges";
import { Heart } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { ChallengeResults, type Tier } from "@/components/challenges/ChallengeResults";

interface GauntletResultsProps {
  result: ChallengeResult;
  onRestart: () => void;
  saveAction?: ReactNode;
}

function getTier(streak: number): Tier {
  if (streak >= 50) return { emoji: "🏆", title: "resultLegendary", color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/30", glow: true };
  if (streak >= 30) return { emoji: "🔥", title: "resultUnstoppable", color: "text-orange-500", bg: "bg-orange-500/10", border: "border-orange-500/30", glow: true };
  if (streak >= 15) return { emoji: "⚡", title: "resultOnFire", color: "text-primary", bg: "bg-primary/10", border: "border-primary/30", glow: false };
  if (streak >= 5)  return { emoji: "💪", title: "resultSolid", color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/30", glow: false };
  return { emoji: "💀", title: "resultTough", color: "text-muted-foreground", bg: "bg-muted", border: "border-border", glow: false };
}

export function GauntletResults({ result, onRestart, saveAction }: GauntletResultsProps) {
  const locale = useLocale();
  const t = useTranslations("Gauntlet");
  const tChallenges = useTranslations("Challenges");
  const tCC = useTranslations("ChallengeCommon");
  const tier = getTier(result.correct);

  return (
    <ChallengeResults
      result={result}
      onRestart={onRestart}
      saveAction={saveAction}
      icon={Heart}
      iconBg="bg-destructive/10"
      iconColor="text-destructive"
      tier={{ ...tier, title: t(tier.title) }}
      heroValue={result.correct}
      heroLabel={t("questionsSurvived")}
      statLabels={[
        t("correctCount", { count: result.correct }).replace(String(result.correct), "").trim(),
        t("wrongCount", { count: result.wrong }).replace(String(result.wrong), "").trim(),
        tCC("accuracy"),
      ]}
      playAgainLabel={tCC("playAgain")}
      viewLeaderboardLabel={tChallenges("viewLeaderboard")}
      backLabel={tCC("backToChallenges")}
      locale={locale}
      leaderboardTab="gauntlet"
    />
  );
}
