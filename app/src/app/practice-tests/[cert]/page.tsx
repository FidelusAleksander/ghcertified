/**
 * Practice test page — server component that loads questions
 * and passes them to the client Quiz component.
 */

import { notFound } from "next/navigation";
import { getQuestionsByCert } from "@/lib/questions";
import type { CertificationType } from "@/lib/questions";
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
  return VALID_CERTS.map((cert) => ({ cert }));
}

interface Props {
  params: Promise<{ cert: string }>;
}

export default async function PracticeTestPage({ params }: Props) {
  const { cert } = await params;

  if (!VALID_CERTS.includes(cert as CertificationType)) {
    notFound();
  }

  const certType = cert as CertificationType;
  const questions = getQuestionsByCert(certType);

  return (
    <QuizWrapper
      questions={questions}
      cert={certType}
      certName={CERT_NAMES[certType] ?? certType}
    />
  );
}
