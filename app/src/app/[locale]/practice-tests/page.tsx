/**
 * Catalog page — choose a certification track and start practicing.
 *
 * Server component that loads dynamic question counts at build time,
 * passes them to the client CatalogCards for interactive inputs.
 */

import type { Metadata } from "next";
import { getCertCatalog } from "@/lib/questions";
import { parseSupportedLocale } from "@/lib/questions";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { buildAlternates, OG_IMAGE } from "@/lib/seo";
import { CatalogCards } from "./catalog-cards";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "PracticeTests" });
  const title = `${t("headingPrefix")} ${t("headingHighlight")}`;
  const description = t("description");

  return {
    title,
    description,
    alternates: buildAlternates(locale, "/practice-tests"),
    openGraph: { title, description, locale, images: [OG_IMAGE] },
  };
}

export default async function PracticeTestsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("PracticeTests");
  const certs = getCertCatalog(parseSupportedLocale(locale)).map((c) => ({
    id: c.cert,
    name: c.title,
    questions: c.questionCount,
  }));

  const totalQuestions = certs.reduce((sum, c) => sum + c.questions, 0);

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
          <p className="text-[13px] text-muted-foreground/70 mt-1.5 tabular-nums">
            {t("totalStat", { totalQuestions, certCount: certs.length })}
          </p>
        </div>
      </div>

      <CatalogCards certs={certs} locale={locale} />
    </div>
  );
}
