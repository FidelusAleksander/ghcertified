"use client";

/**
 * FullLeaderboard — paginated leaderboard table for a single game mode.
 *
 * Fetches entries via getLeaderboardPage with "load more" pagination.
 * Top 3 get trophy icons; all rows show avatar, username, score.
 */

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import type { GameType, LeaderboardEntry } from "@/types/games";
import { getLeaderboardPage } from "@/lib/leaderboard";
import { hasSupabaseConfig } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Trophy, Loader2 } from "lucide-react";

const PAGE_SIZE = 20;

const TROPHY_STYLES: Record<number, string> = {
  1: "text-yellow-500",
  2: "text-zinc-400",
  3: "text-amber-700",
};

interface FullLeaderboardProps {
  gameType: GameType;
}

type Status = "idle" | "loading" | "ready" | "empty" | "error" | "unavailable";

export function FullLeaderboard({ gameType }: FullLeaderboardProps) {
  const t = useTranslations("Games");
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [status, setStatus] = useState<Status>(
    hasSupabaseConfig() ? "idle" : "unavailable"
  );
  const [loadingMore, setLoadingMore] = useState(false);

  const fetchPage = useCallback(async (from: number, to: number, append: boolean) => {
    if (!append) {
      setStatus("loading");
      setEntries([]);
    }
    try {
      const result = await getLeaderboardPage(gameType, from, to);
      setTotalCount(result.totalCount);
      setEntries((prev) => append ? [...prev, ...result.entries] : result.entries);
      setStatus(result.entries.length === 0 && from === 0 ? "empty" : "ready");
    } catch {
      if (from === 0) setStatus("error");
    }
  }, [gameType]);

  useEffect(() => {
    if (status === "unavailable") return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- data-fetch pattern: setState tracks async loading lifecycle
    void fetchPage(0, PAGE_SIZE - 1, false);
  }, [gameType, fetchPage]); // eslint-disable-line react-hooks/exhaustive-deps -- status is a guard, not a trigger

  const handleLoadMore = async () => {
    setLoadingMore(true);
    await fetchPage(entries.length, entries.length + PAGE_SIZE - 1, true);
    setLoadingMore(false);
  };

  const hasMore = entries.length < totalCount;

  if (status === "loading") {
    return <LeaderboardSkeleton />;
  }

  if (status === "empty") {
    return (
      <p className="text-center text-muted-foreground py-12 text-[15px]">
        {t("leaderboardEmpty")}
      </p>
    );
  }

  if (status === "error") {
    return (
      <p className="text-center text-muted-foreground py-12 text-[15px]">
        {t("leaderboardUnavailable")}
      </p>
    );
  }

  if (status === "unavailable") {
    return (
      <p className="text-center text-muted-foreground py-12 text-[15px]">
        {t("leaderboardUnavailable")}
      </p>
    );
  }

  return (
    <div>
      {/* Table header */}
      <div className="hidden sm:grid grid-cols-[3rem_1fr_4rem_2rem] items-center gap-3 px-3 py-2 text-[11px] font-bold tracking-[1px] uppercase text-muted-foreground border-b">
        <span>{t("rank")}</span>
        <span>{t("player")}</span>
        <span className="text-right">{t("score")}</span>
        <span />
      </div>

      {/* Entries */}
      <div className="divide-y">
        {entries.map((entry) => (
          <div
            key={`${entry.rank}-${entry.githubUsername}`}
            className="grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[3rem_1fr_4rem_2rem] items-center gap-3 px-3 py-2.5 transition-colors hover:bg-muted/50"
          >
            {/* Rank */}
            <div className="flex items-center justify-center">
              {entry.rank <= 3 ? (
                <Trophy className={`size-4 ${TROPHY_STYLES[entry.rank]}`} />
              ) : (
                <span className="text-[13px] font-bold tabular-nums text-muted-foreground">
                  {entry.rank}
                </span>
              )}
            </div>

            {/* Avatar + Username */}
            <div className="flex items-center gap-2.5 min-w-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={entry.avatarUrl ?? `https://github.com/${entry.githubUsername}.png?size=60`}
                alt=""
                className="size-7 rounded-full shrink-0"
              />
              <span className="truncate text-[14px] font-medium text-foreground">
                {entry.githubUsername}
              </span>
            </div>

            {/* Score */}
            <span className="text-[14px] font-bold tabular-nums text-foreground text-right">
              {entry.score}
            </span>

            {/* GitHub link */}
            <a
              href={`https://github.com/${entry.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              title={t("viewProfile")}
              className="hidden sm:flex shrink-0 text-muted-foreground hover:text-foreground transition-colors"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/github_invertocat_black.svg"
                alt="GitHub"
                className="size-4"
              />
            </a>
          </div>
        ))}
      </div>

      {/* Footer: count + load more */}
      <div className="flex flex-col items-center gap-3 pt-6 pb-2">
        <p className="text-[13px] text-muted-foreground">
          {hasMore
            ? t("showingEntries", { count: entries.length, total: totalCount })
            : t("noMoreEntries")}
        </p>
        {hasMore && (
          <Button
            variant="outline"
            onClick={handleLoadMore}
            disabled={loadingMore}
            className="rounded-[9px] text-[14px] font-semibold"
          >
            {loadingMore && <Loader2 className="size-4 animate-spin mr-2" />}
            {t("loadMore")}
          </Button>
        )}
      </div>
    </div>
  );
}

function LeaderboardSkeleton() {
  return (
    <div className="space-y-0">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[3rem_1fr_4rem_2rem] items-center gap-3 px-3 py-2.5"
        >
          <Skeleton className="h-4 w-6 mx-auto" />
          <div className="flex items-center gap-2.5">
            <Skeleton className="size-7 rounded-full" />
            <Skeleton className="h-4 w-24" />
          </div>
          <Skeleton className="h-4 w-8 ml-auto" />
          <Skeleton className="hidden sm:block h-4 w-4" />
        </div>
      ))}
    </div>
  );
}
