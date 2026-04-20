/**
 * Gauntlet page — loads all questions and renders gameplay.
 *
 * Questions come from ALL certifications combined into a single pool.
 * Server component loads questions, client GauntletMode handles gameplay.
 */

import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { getAllQuestions, getCertCatalog, parseSupportedLocale } from "@/lib/questions";
import { buildAlternates, CHALLENGES_OG_IMAGE } from "@/lib/seo";
import { PageBreadcrumb } from "@/components/PageBreadcrumb";
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
    openGraph: { title, description, locale, images: [CHALLENGES_OG_IMAGE] },
  };
}

export default async function GauntletPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Challenges");
  const questions = getAllQuestions(parseSupportedLocale(locale));

  return (
    <div>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10">
        <PageBreadcrumb
          items={[
            { label: t("label"), href: `/${locale}/challenges` },
            { label: t("gauntletMode") },
          ]}
        />
      </div>

      <GauntletMode questions={questions} />
    </div>
  );
}
