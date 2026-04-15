import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getQuestionsByCert, SUPPORTED_LOCALES, CERT_TITLES, VALID_CERTS, parseSupportedLocale } from "@/lib/questions";
import type { CertificationType } from "@/lib/questions";
import { buildAlternates, OG_IMAGE } from "@/lib/seo";
import { QuizWrapper } from "./quiz-wrapper";

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
  const title = `${certName} Practice Test`;
  const description = `Practice ${questions.length} questions for the ${certName} certification exam. Free, open-source, community-created.`;

  return {
    title,
    description,
    alternates: buildAlternates(locale, `/practice-tests/${cert}`),
    openGraph: {
      title,
      description,
      locale,
      images: [OG_IMAGE],
    },
  };
}

export default async function PracticeTestPage({ params }: Props) {
  const { locale, cert } = await params;
  setRequestLocale(locale);

  if (!VALID_CERTS.includes(cert as CertificationType)) {
    notFound();
  }

  const certType = cert as CertificationType;
  const questions = getQuestionsByCert(certType, parseSupportedLocale(locale));
  const certName = CERT_TITLES[certType] ?? certType;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    name: `${certName} Practice Test`,
    description: `Practice ${questions.length} questions for the ${certName} certification exam.`,
    educationalLevel: "Professional",
    about: {
      "@type": "Thing",
      name: certName,
    },
    provider: {
      "@type": "Organization",
      name: "GitHub Certified",
      url: "https://ghcertified.com",
    },
    inLanguage: locale,
    isAccessibleForFree: true,
    numberOfQuestions: questions.length,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <QuizWrapper
        questions={questions}
        cert={certType}
        certName={certName}
      />
    </>
  );
}
