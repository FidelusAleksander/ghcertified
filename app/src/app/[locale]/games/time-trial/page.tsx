/**
 * Time Trial page — race the clock with certification questions.
 *
 * Server component loads all questions, client TimeTrialMode handles gameplay.
 * Global countdown: correct answers add time, wrong answers subtract time.
 */

import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { getAllQuestions, getCertCatalog, parseSupportedLocale } from "@/lib/questions";
import { buildAlternates, OG_IMAGE } from "@/lib/seo";
import Link from "next/link";
import { TimeTrialMode } from "@/components/games/TimeTrialMode";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const catalog = getCertCatalog(parseSupportedLocale(locale));
  const totalQuestions = catalog.reduce((sum, c) => sum + c.questionCount, 0);
  const title = "Time Trial — Games";
  const description = `Time Trial: ${totalQuestions} questions, race the clock. Correct answers add time, wrong answers drain it.`;

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
  const questions = getAllQuestions(parseSupportedLocale(locale));

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

      <TimeTrialMode questions={questions} />
    </div>
  );
}
