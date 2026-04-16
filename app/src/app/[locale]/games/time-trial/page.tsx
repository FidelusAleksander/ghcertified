/**
 * Time Trial page — placeholder for upcoming game mode.
 *
 * Shows a "coming soon" card with game description.
 */

import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { buildAlternates, OG_IMAGE } from "@/lib/seo";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const title = "Time Trial — Games";
  const description = "Time Trial: Race the clock with certification questions. Coming soon.";

  return {
    title,
    description,
    alternates: buildAlternates(locale, "/games/time-trial"),
    openGraph: { title, description, locale, images: [OG_IMAGE] },
  };
}

export default async function TimeTrialPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tGames = await getTranslations("Games");
  const t = await getTranslations("TimeTrial");

  return (
    <div>
      {/* Breadcrumb */}
      <div className="max-w-[800px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10">
        <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
          <Link href={`/${locale}/games`} className="text-primary no-underline hover:underline">
            {tGames("label")}
          </Link>
          <span>›</span>
          <span>{t("title")}</span>
        </div>
      </div>

      {/* Coming soon card */}
      <div className="max-w-[520px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
        <Card className="border-[1.5px] shadow-sm overflow-hidden">
          <CardContent className="p-8 sm:p-12 text-center">
            <div className="size-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Timer className="size-10 text-primary" />
            </div>
            <h2 className="font-display text-[24px] sm:text-[28px] font-extrabold tracking-tight text-foreground mb-2">
              {t("comingSoonTitle")}
            </h2>
            <p className="text-[14px] text-muted-foreground mb-8 max-w-[360px] mx-auto">
              {t("comingSoonDescription")}
            </p>
            <Button
              render={<Link href={`/${locale}/games`} />}
              nativeButton={false}
              variant="outline"
              className="rounded-[9px] text-[14px] font-semibold"
            >
              <ArrowLeft data-icon="inline-start" className="size-4" />
              {t("backToGames")}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
