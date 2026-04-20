/**
 * Games landing page — pick a game mode to play.
 *
 * The page shell is rendered statically. Leaderboard data is loaded by the
 * client after hydration because the app uses `output: "export"`.
 */

import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { buildAlternates, CHALLENGES_OG_IMAGE } from "@/lib/seo";
import { ChallengesCatalog } from "./challenges-catalog";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Challenges" });
  const title = `${t("headingPrefix")} ${t("headingHighlight")} — Games`;
  const description = t("description");

  return {
    title,
    description,
    alternates: buildAlternates(locale, "/challenges"),
    openGraph: { title, description, locale, images: [CHALLENGES_OG_IMAGE] },
  };
}

export default async function GamesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Challenges");

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
      <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[1.2px] uppercase text-muted-foreground mb-4">
        {t("label")}
      </div>
      <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
        <div>
          <h2 className="font-display text-[clamp(26px,3vw,36px)] font-extrabold tracking-tight leading-[1.1] text-foreground">
            {t("headingPrefix")}<br />{t("headingHighlight")}
          </h2>
          <p className="text-[15px] text-muted-foreground mt-2 max-w-[480px]">
            {t("description")}
          </p>
        </div>
      </div>

      <ChallengesCatalog
        locale={locale}
      />
    </div>
  );
}
