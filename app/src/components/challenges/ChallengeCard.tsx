"use client";

/**
 * ChallengeCard — rich card for the challenges catalog page.
 *
 * Shows game icon, title, badges, rules, leaderboard, and CTA.
 * Reusable across all game types.
 */

import type { ReactNode } from "react";
import type { LeaderboardEntry } from "@/types/challenges";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Leaderboard } from "@/components/challenges/Leaderboard";
import { Trophy } from "lucide-react";

interface ChallengeCardProps {
  /** Card icon rendered in a colored container */
  icon: ReactNode;
  iconBg: string;
  title: string;
  subtitle?: string;
  /** Description text shown below badges */
  description?: string;
  badges: { label: string; icon?: ReactNode }[];
  rules: string[];
  leaderboard?: LeaderboardEntry[];
  leaderboardStatus?: "loading" | "ready" | "empty" | "error" | "unavailable";
  scoreLabel?: string;
  /** Link href for the play button */
  href?: string;
  /** Button label */
  buttonLabel: string;
  /** Secondary link */
  secondaryHref?: string;
  /** Secondary button label */
  secondaryButtonLabel?: string;
  /** If true, secondary link opens in new tab */
  secondaryExternal?: boolean;
  /** Link to the full leaderboard page */
  leaderboardHref?: string;
  /** Extra class for the card wrapper */
  className?: string;
  /** If true, uses anchor tag (external link) instead of Next.js Link */
  external?: boolean;
  /** Variant: "default" for playable challenges, "dashed" for suggest-a-challenge */
  variant?: "default" | "dashed";
}

export function ChallengeCard({
  icon,
  iconBg,
  title,
  subtitle,
  description,
  badges,
  rules,
  leaderboard,
  leaderboardStatus,
  leaderboardHref,
  scoreLabel,
  href,
  buttonLabel,
  secondaryHref,
  secondaryButtonLabel,
  secondaryExternal,
  className,
  external,
  variant = "default",
}: ChallengeCardProps) {
  const t = useTranslations("Challenges");

  const cardClass =
    variant === "dashed"
      ? "border-dashed border-2 bg-card/50 hover:border-primary/40 hover:bg-card transition-all"
      : "bg-card transition-all hover:border-primary hover:shadow-[0_0_0_3px_hsl(var(--primary-soft))] hover:-translate-y-0.5";

  return (
    <Card className={`${cardClass} ${className ?? ""} flex flex-col`}>
      <CardContent className="p-6 flex flex-col gap-4 flex-1">
        {/* Header: icon + title */}
        <div className="flex items-center gap-3.5">
          <div className={`size-12 rounded-xl flex items-center justify-center shrink-0 ${iconBg}`}>
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-display text-[17px] font-bold text-foreground tracking-tight">
              {title}
            </div>
            {subtitle && (
              <div className="text-xs text-muted-foreground mt-0.5">{subtitle}</div>
            )}
          </div>
        </div>

        {/* Badges */}
        {badges.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {badges.map((b) => (
              <Badge
                key={b.label}
                variant="outline"
                className="text-[10px] font-bold tracking-wide uppercase"
              >
                {b.icon}
                {b.label}
              </Badge>
            ))}
          </div>
        )}

        {/* Description */}
        {description && (
          <p className="text-[13px] text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}

        {/* Rules */}
        {rules.length > 0 && (
          <div>
            <div className="text-[10px] font-bold tracking-[1px] uppercase text-muted-foreground mb-2">
              {t("rules")}
            </div>
            <ul className="space-y-1.5">
              {rules.map((rule) => (
                <li
                  key={rule}
                  className="text-[13px] text-muted-foreground leading-snug flex gap-2"
                >
                  <span className="text-primary shrink-0">•</span>
                  {rule}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Spacer to push leaderboard + button to bottom */}
        <div className="flex-1" />

        {/* Leaderboard */}
        {(leaderboardStatus !== undefined || (leaderboard && leaderboard.length > 0)) && (
          <>
            <Separator />
            <div>
              <div className="text-[10px] font-bold tracking-[1px] uppercase text-muted-foreground mb-2">
                {t("leaderboard")}
              </div>
              {leaderboard && leaderboard.length > 0 ? (
                <>
                  <Leaderboard entries={leaderboard} scoreLabel={scoreLabel} />
                  {leaderboardHref && (
                    <Link
                      href={leaderboardHref}
                      className="mt-2 flex items-center justify-center gap-1 rounded-lg border border-dashed border-muted-foreground/25 py-1.5 text-[12px] font-semibold text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      <Trophy className="size-3" />
                      {t("viewFullLeaderboard")}
                    </Link>
                  )}
                </>
              ) : (
                <p className="px-2 py-1.5 text-[13px] text-muted-foreground leading-relaxed">
                  {leaderboardStatus === "loading" ? t("leaderboardLoading")
                    : leaderboardStatus === "empty" ? t("leaderboardEmpty")
                      : t("leaderboardUnavailable")}
                </p>
              )}
            </div>
          </>
        )}

        {/* CTA */}
        <div className="flex flex-col gap-2">
          {href && (
            external ? (
              <Button
                render={<a href={href} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                variant={variant === "dashed" ? "outline" : "default"}
                className="w-full rounded-[9px] text-[13.5px] font-semibold"
              >
                {buttonLabel}
              </Button>
            ) : (
              <Button
                render={<Link href={href} />}
                nativeButton={false}
                variant={variant === "dashed" ? "outline" : "default"}
                className="w-full rounded-[9px] text-[13.5px] font-semibold"
              >
                {buttonLabel}
              </Button>
            )
          )}
          {secondaryHref && secondaryButtonLabel && (
            secondaryExternal ? (
              <Button
                render={<a href={secondaryHref} target="_blank" rel="noopener noreferrer" />}
                nativeButton={false}
                variant="outline"
                className="w-full rounded-[9px] text-[13.5px] font-semibold"
              >
                {secondaryButtonLabel}
              </Button>
            ) : (
              <Button
                render={<Link href={secondaryHref} />}
                nativeButton={false}
                variant="outline"
                className="w-full rounded-[9px] text-[13.5px] font-semibold"
              >
                {secondaryButtonLabel}
              </Button>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
}
