"use client";

/**
 * FullLeaderboard — paginated leaderboard with podium and styled rows.
 *
 * Top 3 get a visual podium section. Remaining entries (#4+) displayed
 * in a card with alternating row backgrounds and load-more pagination.
 * Shows when each high score was achieved.
 */

import { useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import type { ChallengeType, LeaderboardEntry } from "@/types/challenges";
import { getLeaderboardPage, type LeaderboardCursor } from "@/lib/leaderboard";
import { hasSupabaseConfig } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 20;

interface FullLeaderboardProps {
  gameType: ChallengeType;
  /** GitHub username of the signed-in user, if any. */
  currentUsername?: string | null;
}

type Status = "idle" | "loading" | "ready" | "empty" | "error" | "unavailable";

/* ── Date formatting ────────────────────────────────────────────────── */

/** Format achieved_at as a short date (e.g. "Jan 5, 2026"). */
function formatAchievedAt(iso: string | undefined): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/* ── Podium ─────────────────────────────────────────────────────────── */

const PODIUM_CONFIG: Record<number, {
  order: string;
  size: string;
  avatarSize: string;
  ring: string;
  bg: string;
  label: string;
  trophy: string;
}> = {
  1: {
    order: "order-2",
    size: "pt-0",
    avatarSize: "size-16",
    ring: "ring-2 ring-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
    label: "🥇",
    trophy: "text-yellow-500",
  },
  2: {
    order: "order-1",
    size: "pt-6",
    avatarSize: "size-12",
    ring: "ring-2 ring-zinc-300",
    bg: "bg-zinc-100/60 border-zinc-200 dark:bg-zinc-800/40 dark:border-zinc-700",
    label: "🥈",
    trophy: "text-zinc-400",
  },
  3: {
    order: "order-3",
    size: "pt-6",
    avatarSize: "size-12",
    ring: "ring-2 ring-amber-600/60",
    bg: "bg-amber-500/10 border-amber-600/20",
    label: "🥉",
    trophy: "text-amber-700",
  },
};

function Podium({ entries, currentUsername }: { entries: LeaderboardEntry[]; currentUsername?: string | null }) {
  if (entries.length === 0) return null;

  const padded = [entries[0], entries[1] ?? null, entries[2] ?? null];

  return (
    <div className="flex items-end justify-center gap-3 mb-6">
      {padded.map((entry, i) => {
        const rank = i + 1;
        const config = PODIUM_CONFIG[rank];
        if (!entry) {
          return <div key={rank} className={cn("flex-1 max-w-[160px]", config.order, config.size)} />;
        }
        const isCurrentUser = currentUsername && entry.githubUsername === currentUsername;

        return (
          <div
            key={entry.githubUsername}
            className={cn(
              "flex-1 max-w-[160px] rounded-xl border p-3 text-center",
              config.order,
              config.size,
              config.bg,
              isCurrentUser && "ring-2 ring-primary",
            )}
          >
            <div className="flex flex-col items-center gap-1.5">
              <span className="text-lg">{config.label}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={entry.avatarUrl ?? `https://github.com/${entry.githubUsername}.png?size=120`}
                alt=""
                className={cn("rounded-full shrink-0", config.avatarSize, config.ring)}
              />
              <div className="min-w-0 w-full">
                <div className="truncate text-[13px] font-semibold text-foreground">
                  {entry.githubUsername}
                </div>
                <div className="text-[12px] font-bold tabular-nums text-muted-foreground">
                  {entry.score}
                </div>
                {entry.achievedAt && (
                  <div className="text-[10px] text-muted-foreground/60 mt-0.5">
                    {formatAchievedAt(entry.achievedAt)}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Rows ───────────────────────────────────────────────────────────── */

function LeaderboardRow({ entry, isCurrentUser, t }: {
  entry: LeaderboardEntry;
  isCurrentUser: boolean;
  t: ReturnType<typeof useTranslations<"Challenges">>;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[3rem_1fr_4rem_5.5rem_2rem] items-center gap-3 px-4 py-2.5 transition-colors",
        isCurrentUser
          ? "bg-primary/5 hover:bg-primary/10"
          : "even:bg-muted/30 hover:bg-muted/50",
      )}
    >
      {/* Rank badge */}
      <div className="flex items-center justify-center">
        {entry.rank <= 10 ? (
          <span className={cn(
            "inline-flex items-center justify-center size-7 rounded-full text-[12px] font-bold tabular-nums",
            entry.rank <= 3 ? "bg-amber-500/15 text-amber-600" : "bg-muted text-muted-foreground",
          )}>
            {entry.rank}
          </span>
        ) : (
          <span className="text-[13px] font-bold tabular-nums text-muted-foreground">
            {entry.rank}
          </span>
        )}
      </div>

      {/* Avatar + Username + You badge */}
      <div className="flex items-center gap-2.5 min-w-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={entry.avatarUrl ?? `https://github.com/${entry.githubUsername}.png?size=60`}
          alt=""
          className="size-8 rounded-full shrink-0"
        />
        <span className="truncate text-[14px] font-medium text-foreground">
          {entry.githubUsername}
        </span>
        {isCurrentUser && (
          <span className="shrink-0 inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-primary">
            {t("yourRank")}
          </span>
        )}
      </div>

      {/* Score */}
      <span className="text-[14px] font-bold tabular-nums text-foreground text-right">
        {entry.score}
      </span>

      {/* Achieved date */}
      <span className="hidden sm:block text-[12px] text-muted-foreground text-right tabular-nums">
        {formatAchievedAt(entry.achievedAt)}
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
  );
}

/* ── Main ───────────────────────────────────────────────────────────── */

export function FullLeaderboard({ gameType, currentUsername }: FullLeaderboardProps) {
  const t = useTranslations("Challenges");
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [status, setStatus] = useState<Status>(
    hasSupabaseConfig() ? "idle" : "unavailable"
  );
  const [loadingMore, setLoadingMore] = useState(false);
  const [cursor, setCursor] = useState<LeaderboardCursor | undefined>(undefined);

  const fetchPage = useCallback(async (pageCursor: LeaderboardCursor | undefined, append: boolean) => {
    if (!append) {
      setStatus("loading");
      setEntries([]);
    }
    try {
      const result = await getLeaderboardPage(gameType, PAGE_SIZE, pageCursor);
      setTotalCount(result.totalCount);
      setEntries((prev) => {
        const next = append ? [...prev, ...result.entries] : result.entries;
        // Fix ranks based on accumulated position
        return next.map((e, i) => ({ ...e, rank: i + 1 }));
      });
      // Update cursor to last entry for next page
      const lastEntry = result.entries[result.entries.length - 1];
      if (lastEntry) {
        setCursor({
          score: lastEntry.score,
          achievedAt: lastEntry.achievedAt ?? "",
          githubUsername: lastEntry.githubUsername,
        });
      }
      setStatus(result.entries.length === 0 && !append ? "empty" : "ready");
    } catch {
      if (!append) setStatus("error");
    }
  }, [gameType]);

  useEffect(() => {
    if (status === "unavailable") return;
    setCursor(undefined);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- data-fetch pattern: setState tracks async loading lifecycle
    void fetchPage(undefined, false);
  }, [gameType, fetchPage]); // eslint-disable-line react-hooks/exhaustive-deps -- status is a guard, not a trigger

  const handleLoadMore = async () => {
    setLoadingMore(true);
    await fetchPage(cursor, true);
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

  if (status === "error" || status === "unavailable") {
    return (
      <p className="text-center text-muted-foreground py-12 text-[15px]">
        {t("leaderboardUnavailable")}
      </p>
    );
  }

  const podiumEntries = entries.slice(0, 3);
  const restEntries = entries.slice(3);

  return (
    <div>
      {/* Podium for top 3 */}
      <Podium entries={podiumEntries} currentUsername={currentUsername} />

      {/* Remaining rows in a card */}
      {restEntries.length > 0 && (
        <Card className="overflow-hidden">
          {/* Table header */}
          <div className="hidden sm:grid grid-cols-[3rem_1fr_4rem_5.5rem_2rem] items-center gap-3 px-4 py-2 text-[11px] font-bold tracking-[1px] uppercase text-muted-foreground border-b bg-muted/40">
            <span>{t("rank")}</span>
            <span>{t("player")}</span>
            <span className="text-right">{t("score")}</span>
            <span className="text-right">{t("achievedAt")}</span>
            <span />
          </div>

          {restEntries.map((entry) => (
            <LeaderboardRow
              key={`${entry.rank}-${entry.githubUsername}`}
              entry={entry}
              isCurrentUser={!!currentUsername && entry.githubUsername === currentUsername}
              t={t}
            />
          ))}
        </Card>
      )}

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

/* ── Skeleton ───────────────────────────────────────────────────────── */

function LeaderboardSkeleton() {
  return (
    <div>
      {/* Podium skeleton */}
      <div className="flex items-end justify-center gap-3 mb-6">
        {[2, 1, 3].map((rank) => {
          const config = PODIUM_CONFIG[rank];
          return (
            <div
              key={rank}
              className={cn("flex-1 max-w-[160px] rounded-xl border p-3", config.order, config.size, "bg-muted/30")}
            >
              <div className="flex flex-col items-center gap-1.5">
                <Skeleton className="size-4" />
                <Skeleton className={cn("rounded-full", rank === 1 ? "size-16" : "size-12")} />
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-3 w-10" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Row skeleton */}
      <Card className="overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="grid grid-cols-[2.5rem_1fr_auto] sm:grid-cols-[3rem_1fr_4rem_5.5rem_2rem] items-center gap-3 px-4 py-2.5"
          >
            <Skeleton className="size-7 rounded-full mx-auto" />
            <div className="flex items-center gap-2.5">
              <Skeleton className="size-8 rounded-full" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-4 w-8 ml-auto" />
            <Skeleton className="hidden sm:block h-3 w-12 ml-auto" />
            <Skeleton className="hidden sm:block h-4 w-4" />
          </div>
        ))}
      </Card>
    </div>
  );
}
