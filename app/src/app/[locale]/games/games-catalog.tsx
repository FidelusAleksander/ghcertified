"use client";

/**
 * GamesCatalog — displays available game modes with rules and leaderboards.
 *
 * Three slots: Survival Mode, Time Trial, Suggest a Game.
 * Game modes are not split by certification — questions from all certs
 * are combined into a single pool.
 */

import type { LeaderboardEntry } from "@/types/games";
import { useTranslations } from "next-intl";
import { GameCard } from "@/components/games/GameCard";
import { DEFAULT_LIVES, DEFAULT_TIME_LIMIT } from "@/hooks/useSurvivalMode";
import { Heart, Timer, MessageSquarePlus } from "lucide-react";

interface Props {
  totalQuestions: number;
  locale: string;
  survivalLeaderboard: LeaderboardEntry[];
  timeTrialLeaderboard: LeaderboardEntry[];
}

const REPO_URL = "https://github.com/FidelusAleksander/ghcertified/discussions";

export function GamesCatalog({
  totalQuestions,
  locale,
  survivalLeaderboard,
  timeTrialLeaderboard,
}: Props) {
  const t = useTranslations("Games");

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* Survival Mode */}
      <GameCard
        icon={<Heart className="size-6 text-destructive" />}
        iconBg="bg-destructive/10"
        title={t("survivalMode")}
        subtitle={t("questionsAvailable", { count: totalQuestions })}
        badges={[
          { label: `${DEFAULT_LIVES} Lives`, icon: <Heart className="size-3 mr-1 text-destructive" /> },
          { label: "All Certs" },
        ]}
        rules={[
          t("survivalRule1", { lives: DEFAULT_LIVES }),
          t("survivalRule2", { seconds: DEFAULT_TIME_LIMIT }),
          t("survivalRule3"),
          t("survivalRule4"),
        ]}
        leaderboard={survivalLeaderboard}
        scoreLabel={t("score")}
        href={`/${locale}/games/survival`}
        buttonLabel={t("play")}
      />

      {/* Time Trial */}
      <GameCard
        icon={<Timer className="size-6 text-primary" />}
        iconBg="bg-primary/10"
        title={t("timeTrialMode")}
        subtitle={t("comingSoon")}
        badges={[
          { label: "⏱ Timed", icon: <Timer className="size-3 mr-1 text-primary" /> },
          { label: "All Certs" },
        ]}
        rules={[
          t("timeTrialRule1"),
          t("timeTrialRule2"),
          t("timeTrialRule3"),
          t("timeTrialRule4"),
        ]}
        leaderboard={timeTrialLeaderboard}
        scoreLabel={t("score")}
        href={`/${locale}/games/time-trial`}
        buttonLabel={t("comingSoon")}
      />

      {/* Suggest a Game */}
      <GameCard
        icon={<MessageSquarePlus className="size-6 text-muted-foreground" />}
        iconBg="bg-muted"
        title={t("suggestGame")}
        badges={[]}
        rules={[]}
        href={REPO_URL}
        external
        buttonLabel={t("suggestGameButton")}
        variant="dashed"
      />
    </div>
  );
}
