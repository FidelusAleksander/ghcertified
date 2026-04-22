"use client";

/**
 * ChallengesCatalog — displays available game modes with rules and leaderboards.
 *
 * Three slots: Gauntlet, Time Trial, Suggest a Game.
 * Game modes are not split by certification — questions from all certs
 * are combined into a single pool.
 */

import type { LeaderboardEntry } from "@/types/challenges";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { ChallengeCard } from "@/components/challenges/ChallengeCard";
import { DEFAULT_LIVES, DEFAULT_TIME_LIMIT } from "@/hooks/useGauntletMode";
import { INITIAL_TIME, MAX_TIME, CORRECT_BONUS, CORRECT_BONUS_MULTI, WRONG_PENALTY } from "@/hooks/useTimeTrialMode";
import { getLeaderboard } from "@/lib/leaderboard";
import { hasSupabaseConfig } from "@/lib/supabase";
import { Heart, Timer, Lightbulb } from "lucide-react";

interface Props {
  locale: string;
}

type LeaderboardStatus = "loading" | "ready" | "empty" | "error" | "unavailable";

interface LoadableLeaderboard {
  entries: LeaderboardEntry[];
  status: LeaderboardStatus;
}

const SUGGEST_DISCUSSION_URL = "https://github.com/FidelusAleksander/ghcertified/discussions/new?category=challenge-ideas";

function toLoadableLeaderboard(
  result: PromiseSettledResult<LeaderboardEntry[]>,
): LoadableLeaderboard {
  if (result.status === "rejected") {
    return { entries: [], status: "error" };
  }

  return result.value.length > 0
    ? { entries: result.value, status: "ready" }
    : { entries: [], status: "empty" };
}

export function ChallengesCatalog({ locale }: Props) {
  const t = useTranslations("Challenges");
  const [gauntletLeaderboard, setGauntletLeaderboard] = useState<LoadableLeaderboard>({
    entries: [],
    status: hasSupabaseConfig() ? "loading" : "unavailable",
  });
  const [timeTrialLeaderboard, setTimeTrialLeaderboard] = useState<LoadableLeaderboard>({
    entries: [],
    status: hasSupabaseConfig() ? "loading" : "unavailable",
  });

  useEffect(() => {
    if (!hasSupabaseConfig()) {
      return;
    }

    let cancelled = false;

    void Promise.allSettled([
      getLeaderboard("gauntlet"),
      getLeaderboard("time-trial"),
    ]).then(([gauntletResult, timeTrialResult]) => {
      if (cancelled) {
        return;
      }

      const gauntlet = toLoadableLeaderboard(gauntletResult);
      const timeTrial = toLoadableLeaderboard(timeTrialResult);

      setGauntletLeaderboard(gauntlet);
      setTimeTrialLeaderboard(timeTrial);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* Gauntlet */}
      <ChallengeCard
        icon={<Heart className="size-6 text-destructive" />}
        iconBg="bg-destructive/10"
        title={t("gauntletMode")}
        badges={[
          { label: `${DEFAULT_LIVES} Lives`, icon: <Heart className="size-3 mr-1 text-destructive" /> },
          { label: "All Certs" },
        ]}
        rules={[
          t("gauntletRule1", { lives: DEFAULT_LIVES }),
          t("gauntletRule2"),
          t("gauntletRule3", { seconds: DEFAULT_TIME_LIMIT }),
          t("gauntletRule4"),
          t("gauntletRule5"),
        ]}
        leaderboard={gauntletLeaderboard.entries}
        leaderboardStatus={gauntletLeaderboard.status}
        leaderboardHref={`/${locale}/challenges/leaderboard?tab=gauntlet`}
        scoreLabel={t("score")}
        href={`/${locale}/challenges/gauntlet`}
        buttonLabel={t("play")}
      />

      {/* Time Trial */}
      <ChallengeCard
        icon={<Timer className="size-6 text-primary" />}
        iconBg="bg-primary/10"
        title={t("timeTrialMode")}
        badges={[
          { label: "⏱ Timed", icon: <Timer className="size-3 mr-1 text-primary" /> },
          { label: "All Certs" },
        ]}
        rules={[
          t("timeTrialRule1", { seconds: INITIAL_TIME }),
          t("timeTrialRule2", { seconds: CORRECT_BONUS, multiSeconds: CORRECT_BONUS_MULTI }),
          t("timeTrialRule3", { seconds: WRONG_PENALTY }),
          t("timeTrialRule4", { maxTime: `${Math.floor(MAX_TIME / 60)}:${String(MAX_TIME % 60).padStart(2, "0")}` }),
          t("timeTrialRule5"),
        ]}
        leaderboard={timeTrialLeaderboard.entries}
        leaderboardStatus={timeTrialLeaderboard.status}
        leaderboardHref={`/${locale}/challenges/leaderboard?tab=time-trial`}
        scoreLabel={t("score")}
        href={`/${locale}/challenges/time-trial`}
        buttonLabel={t("play")}
      />

      {/* Suggest a Game */}
      <ChallengeCard
        icon={<Lightbulb className="size-6 text-amber-500" />}
        iconBg="bg-amber-500/10"
        title={t("suggestChallenge")}
        description={t("suggestChallengeDescription")}
        badges={[
          { label: t("community") },
        ]}
        rules={[
          t("suggestRule1"),
          t("suggestRule2"),
          t("suggestRule3"),
        ]}
        href={SUGGEST_DISCUSSION_URL}
        external
        buttonLabel={t("suggestChallengeButton")}
        variant="dashed"
      />
    </div>
  );
}
