"use client";

/**
 * Leaderboard — displays top players for a game mode.
 *
 * Rows show rank (with trophy icons for top 3), GitHub username,
 * score, and a link to the user's GitHub profile.
 */

import type { LeaderboardEntry } from "@/types/challenges";
import { useTranslations } from "next-intl";
import { Trophy } from "lucide-react";

const MAX_ENTRIES = 5;

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  scoreLabel?: string;
}

const TROPHY_STYLES: Record<number, string> = {
  1: "text-yellow-500",
  2: "text-zinc-400",
  3: "text-amber-700",
};

export function Leaderboard({ entries, scoreLabel }: LeaderboardProps) {
  const t = useTranslations("Challenges");
  const label = scoreLabel ?? t("score");

  const topEntries = entries.slice(0, MAX_ENTRIES);

  if (topEntries.length === 0) return null;

  return (
    <div className="space-y-0.5">
      {/* Header */}
      <div className="flex items-center justify-between px-2 py-1.5 text-[10px] font-bold tracking-[1px] uppercase text-muted-foreground">
        <span>{t("topPlayers")}</span>
        <span>{label}</span>
      </div>

      {/* Entries */}
      {topEntries.map((entry) => (
        <div
          key={entry.rank}
          className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-colors hover:bg-muted/50 group"
        >
          {/* Rank / Trophy */}
          <div className="w-6 flex items-center justify-center shrink-0">
            {entry.rank <= 3 ? (
              <Trophy className={`size-4 ${TROPHY_STYLES[entry.rank]}`} />
            ) : (
              <span className="text-[12px] font-bold tabular-nums text-muted-foreground">
                {entry.rank}
              </span>
            )}
          </div>

          {/* Avatar + Username */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={entry.avatarUrl ?? `https://github.com/${entry.githubUsername}.png?size=60`}
            alt=""
            loading="lazy"
            className="size-5 rounded-full shrink-0"
          />
          <span className="flex-1 truncate text-[13px] font-medium text-foreground">
            {entry.githubUsername}
          </span>

          {/* Score */}
          <span className="text-[13px] font-bold tabular-nums text-foreground mr-1">
            {entry.score}
          </span>

          {/* GitHub link */}
          <a
            href={`https://github.com/${entry.githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            title={t("viewProfile")}
            className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/github_invertocat_black.svg"
              alt="GitHub"
              loading="lazy"
              className="size-4"
            />
          </a>
        </div>
      ))}
    </div>
  );
}
