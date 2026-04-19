"use client";

/**
 * ChallengeSidebar — shared sidebar for game modes.
 *
 * Renders as a sticky vertical card on desktop (lg+),
 * compact horizontal strip on mobile (< lg).
 *
 * Shows game name, rules, lives, timer, score, and pause controls.
 */

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Timer, Pause, Play } from "lucide-react";

// ── Shared display components ──────────────────────────────────────

export function LivesDisplay({ lives, initialLives, compact }: { lives: number; initialLives: number; compact?: boolean }) {
  const size = compact ? "size-3.5" : "size-5";
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: initialLives }, (_, i) => (
        <Heart
          key={i}
          className={cn(
            size,
            i < lives
              ? "text-destructive fill-destructive"
              : compact ? "text-card/20" : "text-muted-foreground/30",
          )}
        />
      ))}
    </div>
  );
}

export function TimerBar({
  timeRemaining,
  timeLimitSeconds,
  compact,
}: {
  timeRemaining: number;
  timeLimitSeconds: number;
  compact?: boolean;
}) {
  const fraction = Math.min(Math.max(0, timeRemaining) / timeLimitSeconds, 1);
  const isUrgent = timeRemaining <= 10;
  const isCritical = timeRemaining <= 5;

  const minutes = Math.floor(Math.max(0, timeRemaining) / 60);
  const seconds = Math.max(0, timeRemaining) % 60;
  const display = minutes > 0
    ? `${minutes}:${seconds.toString().padStart(2, "0")}`
    : `${seconds}s`;

  if (compact) {
    return (
      <span className={cn(
        "font-display text-[12px] font-bold tabular-nums tracking-wide",
        isCritical ? "text-destructive animate-pulse" : isUrgent ? "text-warning" : "text-card/60",
      )}>
        {display}
      </span>
    );
  }

  return (
    <div className="flex items-center gap-2.5 w-full">
      <Timer className={cn("size-4 shrink-0", isCritical ? "text-destructive" : isUrgent ? "text-warning" : "text-muted-foreground")} />
      <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-linear",
            isCritical ? "bg-destructive" : isUrgent ? "bg-warning" : "bg-primary",
          )}
          style={{ width: `${fraction * 100}%` }}
        />
      </div>
      <span className={cn(
        "font-display text-[14px] font-bold tabular-nums min-w-[40px] text-right",
        isCritical ? "text-destructive animate-pulse" : isUrgent ? "text-warning" : "text-foreground",
      )}>
        {display}
      </span>
    </div>
  );
}

// ── Sidebar ────────────────────────────────────────────────────────

interface ChallengeSidebarProps {
  /** Game mode name displayed at top. */
  title: string;
  /** Icon next to game name. */
  icon?: ReactNode;
  /** Lives display slot (Gauntlet). Omit for modes without lives. */
  livesSlot?: ReactNode;
  /** Timer display slot. */
  timerSlot: ReactNode;
  /** Extra content below timer (e.g. Time Trial gain/loss counters). */
  timerExtra?: ReactNode;
  /** Label for the score row (e.g. "Score"). */
  scoreLabel: string;
  scoreValue: number;
  /** Question progress slot (e.g. "12 / 50"). */
  progressSlot?: ReactNode;
  /** Correct/incorrect counters slot. */
  countersSlot?: ReactNode;
  /** Pause control — pass undefined when pausing isn't available. */
  pauseSlot?: ReactNode;
}

export function ChallengeSidebar({
  title,
  icon,
  livesSlot,
  timerSlot,
  timerExtra,
  scoreLabel,
  scoreValue,
  progressSlot,
  countersSlot,
  pauseSlot,
}: ChallengeSidebarProps) {
  return (
    <>
      {/* Desktop: vertical sticky sidebar */}
      <div className="hidden lg:flex flex-col gap-4 lg:sticky lg:top-6">
        <Card className="overflow-hidden shadow-sm border-[1.5px]">
          <CardContent className="p-4 flex flex-col gap-3">
            {/* Game name */}
            <div className="flex items-center justify-center gap-2">
              {icon}
              <h3 className="font-display text-[15px] font-extrabold tracking-tight text-foreground">
                {title}
              </h3>
            </div>

            <Separator />

            {livesSlot && (
              <>
                <div className="flex items-center justify-center py-1">
                  {livesSlot}
                </div>
                <Separator />
              </>
            )}

            <div className="flex flex-col gap-1.5">
              {timerSlot}
              {timerExtra}
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <span className="text-[13px] text-muted-foreground">{scoreLabel}</span>
              <span className="font-display text-[18px] font-extrabold tabular-nums text-foreground">{scoreValue}</span>
            </div>

            {(progressSlot || countersSlot) && (
              <>
                <Separator />
                <div className="flex flex-col gap-1.5">
                  {progressSlot}
                  {countersSlot}
                </div>
              </>
            )}

            {pauseSlot && (
              <>
                <Separator />
                <div className="flex items-center justify-center">
                  {pauseSlot}
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Mobile: compact horizontal strip */}
      <div className="flex lg:hidden items-center justify-between gap-3 mb-4 px-1">
        <div className="flex items-center gap-3">
          {livesSlot}
          <div className="flex items-center gap-1.5 text-[13px] text-muted-foreground">
            <span className="font-display font-bold text-foreground tabular-nums">{scoreValue}</span>
            <span>{scoreLabel}</span>
          </div>
          {progressSlot}
          {countersSlot}
        </div>
        <div className="flex items-center gap-3">
          {pauseSlot}
        </div>
      </div>
    </>
  );
}

// ── Pause button (full-width, prominent) ───────────────────────────

export function PauseButton({
  pauseRequested,
  onToggle,
  label,
  queuedLabel,
}: {
  pauseRequested: boolean;
  onToggle: () => void;
  label: string;
  queuedLabel: string;
}) {
  return (
    <Button
      variant="outline"
      onClick={onToggle}
      className={cn(
        "w-full gap-1.5 text-[13px] font-semibold",
        pauseRequested && "border-primary/30 bg-primary/10 text-primary hover:bg-primary/15 hover:text-primary",
      )}
    >
      <Pause className="size-3.5" />
      {pauseRequested ? queuedLabel : label}
    </Button>
  );
}
