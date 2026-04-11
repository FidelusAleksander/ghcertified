import { notFound } from "next/navigation";
import { getQuestionsByCert, SUPPORTED_LOCALES } from "@/lib/questions";
import type { CertificationType, SupportedLocale } from "@/lib/questions";
import { QuizWrapper } from "./quiz-wrapper";

const VALID_CERTS: CertificationType[] = [
  "actions", "admin", "advanced_security", "copilot", "foundations",
];

const CERT_NAMES: Record<string, string> = {
  actions: "GitHub Actions",
  foundations: "GitHub Foundations",
  advanced_security: "GitHub Advanced Security",
  admin: "GitHub Administration",
  copilot: "GitHub Copilot",
};

export function generateStaticParams() {
  return SUPPORTED_LOCALES.flatMap((locale) =>
    VALID_CERTS.map((cert) => ({ locale, cert })),
  );
}

interface Props {
  params: Promise<{ locale: string; cert: string }>;
}

export default async function PracticeTestPage({ params }: Props) {
  const { locale, cert } = await params;

  if (!VALID_CERTS.includes(cert as CertificationType)) {
    notFound();
  }

  const certType = cert as CertificationType;
  const questions = getQuestionsByCert(certType, locale as SupportedLocale);

  return (
    <QuizWrapper
      questions={questions}
      cert={certType}
      certName={CERT_NAMES[certType] ?? certType}
    />
  );
}
