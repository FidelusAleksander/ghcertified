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
import { TimeTrialMode } from "@/components/challenges/TimeTrialMode";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const catalog = getCertCatalog(parseSupportedLocale(locale));
  const totalQuestions = catalog.reduce((sum, c) => sum + c.questionCount, 0);
  const title = "Time Trial — Games";
  const description = `Time Trial: ${totalQuestions} questions, race the clock. Correct answers add 15s, wrong answers drain 5s.`;

  return {
    title,
    description,
    alternates: buildAlternates(locale, "/challenges/time-trial"),
    openGraph: { title, description, locale, images: [OG_IMAGE] },
  };
}

export default async function TimeTrialPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tChallenges = await getTranslations("Challenges");
  const t = await getTranslations("TimeTrial");
  const questions = getAllQuestions(parseSupportedLocale(locale));

  return (
    <div>
      {/* Breadcrumb */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 pt-6 sm:pt-10">
        <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
          <Link href={`/${locale}/challenges`} className="text-primary no-underline hover:underline">
            {tChallenges("label")}
          </Link>
          <span>›</span>
          <span>{t("title")}</span>
        </div>
      </div>

      <TimeTrialMode questions={questions} />
    </div>
  );
}
