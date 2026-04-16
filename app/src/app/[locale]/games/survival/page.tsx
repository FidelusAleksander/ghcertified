/**
 * Survival Mode page — placeholder until gameplay is implemented.
 *
 * Questions come from ALL certifications combined into a single pool.
 * No cert param — this is a universal game mode.
 * Full gameplay in Issue #529.
 */

import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { getCertCatalog, parseSupportedLocale } from "@/lib/questions";
import { buildAlternates, OG_IMAGE } from "@/lib/seo";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const catalog = getCertCatalog(parseSupportedLocale(locale));
  const totalQuestions = catalog.reduce((sum, c) => sum + c.questionCount, 0);
  const title = "Survival Mode — Games";
  const description = `Survival Mode: ${totalQuestions} questions from all certifications, 1 life. How far can you go?`;

  return {
    title,
    description,
    alternates: buildAlternates(locale, "/games/survival"),
    openGraph: { title, description, locale, images: [OG_IMAGE] },
  };
}

export default async function SurvivalModePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Games");
  const totalQuestions = getCertCatalog(parseSupportedLocale(locale))
    .reduce((sum, c) => sum + c.questionCount, 0);

  return (
    <div className="max-w-[720px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
      <div className="flex items-center gap-2 text-[13px] text-muted-foreground mb-6">
        <Link href={`/${locale}/games`} className="text-primary no-underline hover:underline">
          {t("label")}
        </Link>
        <span>›</span>
        <span>{t("survivalMode")}</span>
      </div>

      <Card className="border-[1.5px]">
        <CardContent className="p-8 sm:p-12 text-center">
          <div className="size-16 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="size-8 text-destructive" />
          </div>
          <h1 className="font-display text-[24px] sm:text-[30px] font-extrabold tracking-tight text-foreground mb-2">
            {t("survivalMode")}
          </h1>
          <p className="text-[13px] text-muted-foreground mb-8">
            {totalQuestions} questions · 1 life · All certifications
          </p>

          <div className="bg-muted/50 rounded-xl p-6 mb-8">
            <p className="font-display text-[15px] font-semibold text-foreground mb-1">
              {t("comingSoon")}
            </p>
            <p className="text-[13px] text-muted-foreground">
              {t("comingSoonDescription")}
            </p>
          </div>

          <Button
            render={<Link href={`/${locale}/games`} />}
            nativeButton={false}
            variant="outline"
            className="rounded-[9px] text-[13.5px] font-semibold"
          >
            {t("backToGames")}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
