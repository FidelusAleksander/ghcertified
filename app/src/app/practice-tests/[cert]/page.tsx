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

interface Props {
  params: Promise<{ cert: string }>;
  searchParams: Promise<{ questions?: string }>;
}

export default async function PracticeTestPage({ params, searchParams }: Props) {
  const { cert } = await params;
  const { questions: questionsParam } = await searchParams;

  if (!VALID_CERTS.includes(cert as CertificationType)) {
    notFound();
  }

  const certType = cert as CertificationType;
  const questions = getQuestionsByCert(certType);
  const questionCount = questionsParam
    ? Math.min(Math.max(1, parseInt(questionsParam, 10)), questions.length)
    : questions.length;

  return (
    <QuizWrapper
      questions={questions}
      questionCount={questionCount}
      cert={certType}
      certName={CERT_NAMES[certType] ?? certType}
    />
  );
}
