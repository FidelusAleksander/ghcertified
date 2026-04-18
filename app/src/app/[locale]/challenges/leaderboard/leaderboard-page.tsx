"use client";

/**
 * LeaderboardPage — client component that renders tabbed leaderboards.
 *
 * Reads URL hash on mount to select the correct tab when deep-linked
 * from game results screens (e.g. #time-trial).
 * Shows sign-in CTA for unauthenticated users to see their rank.
 */

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { FullLeaderboard } from "@/components/challenges/FullLeaderboard";
import { useAuth } from "@/components/AuthProvider";
import { GitHubMark } from "@/components/GitHubMark";
import { ArrowLeft, Heart, Timer } from "lucide-react";
import Link from "next/link";

interface Props {
  locale: string;
}

const VALID_TABS = ["gauntlet", "time-trial"] as const;

export function LeaderboardPage({ locale }: Props) {
  const t = useTranslations("Challenges");
  const { available, user, signIn, loading: authLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<string>("gauntlet");

  // Read URL hash after hydration to select correct tab from deep links
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (VALID_TABS.includes(hash as (typeof VALID_TABS)[number])) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time init from browser state unavailable at SSR
      setActiveTab(hash);
    }
  }, []);

  const currentUsername = user?.user_metadata?.user_name as string | undefined;

  return (
    <div className="space-y-6">
      {/* Sign-in CTA for unauthenticated users */}
      {available && !user && !authLoading && (
        <div className="flex items-center justify-between rounded-xl border border-dashed border-muted-foreground/25 bg-muted/30 px-4 py-3">
          <span className="text-[13px] text-muted-foreground font-medium">
            {t("signInToSeeRank")}
          </span>
          <Button
            onClick={() => void signIn()}
            variant="outline"
            size="sm"
            className="rounded-[9px] text-[13px] font-semibold gap-1.5"
          >
            <GitHubMark />
            Sign in
          </Button>
        </div>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList variant="line" className="w-full">
          <TabsTrigger value="gauntlet" className="flex-1 gap-1.5">
            <Heart className="size-3.5 text-destructive" />
            {t("gauntletMode")}
          </TabsTrigger>
          <TabsTrigger value="time-trial" className="flex-1 gap-1.5">
            <Timer className="size-3.5 text-primary" />
            {t("timeTrialMode")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="gauntlet">
          <p className="text-[13px] text-muted-foreground mb-4 mt-1">{t("gauntletSubtitle")}</p>
          <FullLeaderboard gameType="gauntlet" currentUsername={currentUsername} />
        </TabsContent>

        <TabsContent value="time-trial">
          <p className="text-[13px] text-muted-foreground mb-4 mt-1">{t("timeTrialSubtitle")}</p>
          <FullLeaderboard gameType="time-trial" currentUsername={currentUsername} />
        </TabsContent>
      </Tabs>

      <div className="flex justify-center">
        <Button
          render={<Link href={`/${locale}/challenges`} />}
          nativeButton={false}
          variant="outline"
          className="rounded-[9px] text-[14px] font-semibold"
        >
          <ArrowLeft data-icon="inline-start" className="size-4" />
          {t("backToChallenges")}
        </Button>
      </div>
    </div>
  );
}
