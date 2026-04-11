/**
 * Questions library for a specific certification type.
 * Server component loads data, mounts the client QuestionBrowser.
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import type { CertificationType, SupportedLocale } from "@/lib/questions";
import { getQuestionsByCert, getCertInfo, SUPPORTED_LOCALES } from "@/lib/questions";
import { QuestionBrowser } from "./question-browser";

const VALID_CERTS: CertificationType[] = [
  "actions", "admin", "advanced_security", "copilot", "foundations",
];

export function generateStaticParams() {
  return SUPPORTED_LOCALES.flatMap((locale) =>
    VALID_CERTS.map((cert) => ({ locale, cert })),
  );
}

interface Props {
  params: Promise<{ locale: string; cert: string }>;
}

export default async function CertQuestionsPage({ params }: Props) {
  const { locale, cert } = await params;
  const certInfo = getCertInfo(cert as CertificationType, locale as SupportedLocale);

  if (!certInfo) {
    notFound();
  }

  const questions = getQuestionsByCert(cert as CertificationType, locale as SupportedLocale);

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
      <div className="flex items-center gap-2 text-[13px] text-muted-foreground mb-4">
        <Link href={`/${locale}/questions`} className="text-primary no-underline hover:underline">Questions</Link>
        <span>›</span>
        <span>{certInfo.title}</span>
      </div>
      <h1 className="font-display text-[30px] font-extrabold text-foreground tracking-tight">
        {certInfo.title}
      </h1>
      <p className="mt-2 text-muted-foreground mb-8">
        {questions.length} questions available
      </p>

      <QuestionBrowser questions={questions} />
    </div>
  );
}
