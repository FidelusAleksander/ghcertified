/**
 * Survival Mode page — loads all questions across all certifications.
 *
 * Server component that loads every question and renders a placeholder
 * until the Survival game client component is implemented.
 */

import type { Metadata } from "next";
import Link from "next/link";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { getAllQuestions, parseSupportedLocale } from "@/lib/questions";
import { buildAlternates, OG_IMAGE } from "@/lib/seo";
import { Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Games" });
  const title = t("survivalTitle");
  const description = t("survivalDescription");

  return {
    title,
    description,
    alternates: buildAlternates(locale, "/games/survival"),
    openGraph: { title, description, locale, images: [OG_IMAGE] },
  };
}

export default async function SurvivalPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Games");
  const questions = getAllQuestions(parseSupportedLocale(locale));

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
      <div className="mb-6 sm:mb-9">
        <div className="flex items-center gap-2 text-[13px] text-muted-foreground mb-1">
          <Link
            href={`/${locale}/games`}
            className="text-primary no-underline hover:underline"
          >
            {t("label")}
          </Link>
          <span>›</span>
          <span>{t("survivalMode")}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Flame className="size-5 text-destructive" />
          <h1 className="font-display text-[24px] sm:text-[30px] font-extrabold text-foreground tracking-tight">
            {t("survivalTitle")}
          </h1>
        </div>
      </div>

      {/* Placeholder — will be replaced by the Survival game client component */}
      <Card className="bg-card">
        <CardContent className="p-8 text-center">
          <Flame className="size-10 text-destructive mx-auto mb-4" />
          <h2 className="font-display text-[20px] font-bold text-foreground mb-2">
            {t("survivalMode")}
          </h2>
          <p className="text-muted-foreground text-[15px] mb-1">
            {t("questionsAvailable", { count: questions.length })}
          </p>
          <p className="text-muted-foreground text-sm">
            {t("comingSoon")}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
