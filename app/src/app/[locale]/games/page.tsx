/**
 * Games landing page — pick a game mode to play.
 *
 * Server component that loads total question count, renders available
 * game modes as cards linking to their respective pages.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { getAllQuestions, parseSupportedLocale } from "@/lib/questions";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Flame } from "lucide-react";
import { buildAlternates, OG_IMAGE } from "@/lib/seo";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Games" });
  const title = t("title");
  const description = t("description");

  return {
    title,
    description,
    alternates: buildAlternates(locale, "/games"),
    openGraph: { title, description, locale, images: [OG_IMAGE] },
  };
}

export default async function GamesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Games");
  const totalQuestions = getAllQuestions(parseSupportedLocale(locale)).length;

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
      <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[1.2px] uppercase text-muted-foreground mb-4">
        {t("label")}
      </div>
      <h1 className="font-display text-[clamp(26px,3vw,36px)] font-extrabold tracking-tight leading-[1.1] text-foreground">
        {t("title")}
      </h1>
      <p className="text-[15px] text-muted-foreground mt-2 max-w-[480px] mb-10">
        {t("description")}
      </p>

      {/* Game mode cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Link href={`/${locale}/games/survival`} className="group no-underline">
          <Card className="transition-all hover:border-primary hover:shadow-[0_0_0_3px_hsl(var(--primary-soft))] hover:-translate-y-0.5 cursor-pointer bg-card h-full">
            <CardContent className="p-6 flex flex-col gap-4 h-full">
              <div className="flex items-center gap-3.5">
                <div className="size-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
                  <Flame className="size-6 text-destructive" />
                </div>
                <div>
                  <div className="font-display text-[17px] font-bold text-foreground tracking-tight">
                    {t("survivalMode")}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {t("questionsAvailable", { count: totalQuestions })}
                  </div>
                </div>
              </div>
              <div className="text-[13.5px] text-muted-foreground leading-relaxed flex-1">
                {t("survivalDescription")}
              </div>
              <div className="flex items-center gap-1.5 text-[13px] font-semibold text-primary">
                {t("play")}
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
