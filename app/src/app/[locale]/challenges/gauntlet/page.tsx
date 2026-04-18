/**
 * Gauntlet page — loads all questions and renders gameplay.
 *
 * Questions come from ALL certifications combined into a single pool.
 * Server component loads questions, client GauntletMode handles gameplay.
 */

import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { getAllQuestions, getCertCatalog, parseSupportedLocale } from "@/lib/questions";
import { buildAlternates, OG_IMAGE } from "@/lib/seo";
import Link from "next/link";
import { GauntletMode } from "@/components/challenges/GauntletMode";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const catalog = getCertCatalog(parseSupportedLocale(locale));
  const totalQuestions = catalog.reduce((sum, c) => sum + c.questionCount, 0);
  const title = "Gauntlet — Games";
  const description = `Gauntlet: ${totalQuestions} questions from all certifications, 3 lives. How far can you go?`;

  return {
    title,
    description,
    alternates: buildAlternates(locale, "/challenges/gauntlet"),
    openGraph: { title, description, locale, images: [OG_IMAGE] },
  };
}

export default async function GauntletPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Challenges");
  const questions = getAllQuestions(parseSupportedLocale(locale));

  return (
    <div>
      {/* Breadcrumb */}
      <div className="max-w-[800px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10">
        <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
          <Link href={`/${locale}/challenges`} className="text-primary no-underline hover:underline">
            {t("label")}
          </Link>
          <span>›</span>
          <span>{t("gauntletMode")}</span>
        </div>
      </div>

      <GauntletMode questions={questions} />
    </div>
  );
}
