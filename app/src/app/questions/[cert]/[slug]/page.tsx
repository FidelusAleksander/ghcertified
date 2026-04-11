/**
 * Individual question view — server component loads data,
 * passes to client QuizWrapper.
 */

import { notFound } from "next/navigation";
import { getQuestionsByCert } from "@/lib/questions";
import type { CertificationType } from "@/lib/questions";
import { QuizWrapper } from "@/app/practice-tests/[cert]/quiz-wrapper";

const CERT_NAMES: Record<string, string> = {
  actions: "GitHub Actions",
  foundations: "GitHub Foundations",
  advanced_security: "GitHub Advanced Security",
  admin: "GitHub Administration",
  copilot: "GitHub Copilot",
};

interface Props {
  params: Promise<{ cert: string; slug: string }>;
}

export default async function SingleQuestionPage({ params }: Props) {
  const { cert, slug } = await params;
  const questions = getQuestionsByCert(cert as CertificationType);
  const question = questions.find((q) => q.id === slug);

  if (!question) {
    notFound();
  }

  return (
    <QuizWrapper
      questions={[question]}
      questionCount={1}
      cert={cert as CertificationType}
      certName={CERT_NAMES[cert] ?? cert}
    />
  );
}
