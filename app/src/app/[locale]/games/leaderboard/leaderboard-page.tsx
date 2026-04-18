"use client";

/**
 * LeaderboardPage — client component that renders tabbed leaderboards.
 *
 * Reads URL hash on mount to select the correct tab when deep-linked
 * from game results screens (e.g. #time-trial).
 */

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FullLeaderboard } from "@/components/games/FullLeaderboard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Timer } from "lucide-react";
import Link from "next/link";

interface Props {
  locale: string;
}

const VALID_TABS = ["gauntlet", "time-trial"] as const;

export function LeaderboardPage({ locale }: Props) {
  const t = useTranslations("Games");
  const [activeTab, setActiveTab] = useState<string>("gauntlet");

  // Read URL hash after hydration to select correct tab from deep links
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (VALID_TABS.includes(hash as (typeof VALID_TABS)[number])) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time init from browser state unavailable at SSR
      setActiveTab(hash);
    }
  }, []);

  return (
    <div className="space-y-6">
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
          <FullLeaderboard gameType="gauntlet" />
        </TabsContent>

        <TabsContent value="time-trial">
          <FullLeaderboard gameType="time-trial" />
        </TabsContent>
      </Tabs>

      <div className="flex justify-center">
        <Button
          render={<Link href={`/${locale}/games`} />}
          nativeButton={false}
          variant="outline"
          className="rounded-[9px] text-[14px] font-semibold"
        >
          <ArrowLeft data-icon="inline-start" className="size-4" />
          {t("backToGames")}
        </Button>
      </div>
    </div>
  );
}
