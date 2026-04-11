"use client";

/**
 * Individual question view — renders single question as mini quiz.
 */

import { useParams } from "next/navigation";
import Link from "next/link";
import { getQuestionsByCert, getCertInfo } from "@/lib/questions";
import { CertificationType } from "@/types/quiz";
import { Quiz } from "@/components/quiz/Quiz";

const CERT_NAMES: Record<string, string> = {
  actions: "GitHub Actions",
  foundations: "GitHub Foundations",
  advanced_security: "GitHub Advanced Security",
  admin: "GitHub Administration",
  copilot: "GitHub Copilot",
};

export default function SingleQuestionPage() {
  const params = useParams();
  const cert = params.cert as CertificationType;
  const slug = params.slug as string;
  const certInfo = getCertInfo(cert);
  const questions = getQuestionsByCert(cert);
  const question = questions.find((q) => q.id === slug);

  if (!certInfo || !question) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h1 className="font-display text-2xl font-bold">Question not found</h1>
        <Link href={`/questions/${cert}`} className="mt-4 inline-flex text-sm text-primary underline underline-offset-4">
          ← Back to {certInfo?.title ?? "questions"}
        </Link>
      </div>
    );
  }

  return (
    <Quiz
      questions={[question]}
      questionCount={1}
      cert={cert}
      certName={CERT_NAMES[cert] ?? cert}
    />
  );
}
