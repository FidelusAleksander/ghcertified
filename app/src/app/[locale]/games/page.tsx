import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { SUPPORTED_LOCALES } from "@/lib/locales";
import { buildAlternates, OG_IMAGE } from "@/lib/seo";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
      <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[1.2px] uppercase text-muted-foreground mb-4">
        {t("label")}
      </div>
      <div className="mb-10">
        <h1 className="font-display text-[clamp(26px,3vw,36px)] font-extrabold tracking-tight leading-[1.1] text-foreground">
          {t("title")}
        </h1>
        <p className="text-[15px] text-muted-foreground mt-2 max-w-[480px]">
          {t("description")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <Link href={`/${locale}/games/survival`} className="no-underline group">
          <Card className="h-full transition-all hover:shadow-md hover:border-primary/50 group-focus-visible:ring-2 group-focus-visible:ring-ring/50">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="size-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <Heart className="size-5 text-destructive" />
                </div>
                <h2 className="font-display text-lg font-bold text-foreground tracking-tight">
                  {t("survivalTitle")}
                </h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("survivalDescription")}
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
