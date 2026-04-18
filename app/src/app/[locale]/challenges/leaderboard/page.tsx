/**
 * Full leaderboard page — shows paginated rankings for all game modes.
 *
 * Static shell rendered at build time. Leaderboard data is fetched client-side
 * after hydration because the app uses `output: "export"`.
 */

import type { Metadata } from "next";
import { Suspense } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { buildAlternates, OG_IMAGE } from "@/lib/seo";
import { LeaderboardPage } from "./leaderboard-page";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Challenges" });
  const title = `${t("fullLeaderboard")} — Games`;
  const description = t("fullLeaderboardDescription");

  return {
    title,
    description,
    alternates: buildAlternates(locale, "/challenges/leaderboard"),
    openGraph: { title, description, locale, images: [OG_IMAGE] },
  };
}

export default async function FullLeaderboardRoute({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Challenges");

  return (
    <div className="max-w-[720px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
      <div className="mb-8">
        <h1 className="font-display text-[clamp(26px,3vw,36px)] font-extrabold tracking-tight leading-[1.1] text-foreground">
          {t("fullLeaderboard")}
        </h1>
        <p className="text-[15px] text-muted-foreground mt-2">
          {t("fullLeaderboardDescription")}
        </p>
      </div>

      <Suspense>
        <LeaderboardPage locale={locale} />
      </Suspense>
    </div>
  );
}
