/**
 * Questions library for a specific certification type.
 * Server component loads data, mounts the client QuestionBrowser.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { CertificationType } from "@/lib/questions";
import { getQuestionsByCert, getCertInfo, SUPPORTED_LOCALES, CERT_TITLES, VALID_CERTS, parseSupportedLocale } from "@/lib/questions";
import { buildAlternates, OG_IMAGE } from "@/lib/seo";
import { QuestionBrowser } from "./question-browser";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.flatMap((locale) =>
    VALID_CERTS.map((cert) => ({ locale, cert })),
  );
}

interface Props {
  params: Promise<{ locale: string; cert: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale, cert } = await params;
  const certName = CERT_TITLES[cert as CertificationType] ?? cert;
  const questions = getQuestionsByCert(cert as CertificationType, parseSupportedLocale(locale));
  const title = `${certName} Questions`;
  const description = `Browse ${questions.length} practice questions for the ${certName} certification exam.`;

  return {
    title,
    description,
    alternates: buildAlternates(locale, `/questions/${cert}`),
    openGraph: {
      title,
      description,
      locale,
      images: [OG_IMAGE],
    },
  };
}

export default async function CertQuestionsPage({ params }: Props) {
  const { locale, cert } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("QuestionsLibrary");
  const certInfo = getCertInfo(cert as CertificationType, parseSupportedLocale(locale));

  if (!certInfo) {
    notFound();
  }

  const questions = getQuestionsByCert(cert as CertificationType, parseSupportedLocale(locale));

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
      <div className="flex items-center gap-2 text-[13px] text-muted-foreground mb-4">
        <Link href={`/${locale}/questions`} className="text-primary no-underline hover:underline">{t("label")}</Link>
        <span>›</span>
        <span>{certInfo.title}</span>
      </div>
      <h1 className="font-display text-[30px] font-extrabold text-foreground tracking-tight">
        {certInfo.title}
      </h1>
      <p className="mt-2 text-muted-foreground mb-8">
        {t("questions", { count: questions.length })}
      </p>

      <QuestionBrowser questions={questions} />
    </div>
  );
}
