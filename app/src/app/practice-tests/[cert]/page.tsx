"use client";

/**
 * Practice test page for a specific certification.
 *
 * Dynamic route: /practice-tests/[cert]
 * Reads cert from URL params and question count from search params.
 * Quiz component handles its own layout (two-column with sidebar).
 */

import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { CertificationType } from "@/types/quiz";
import { getQuestionsByCert, getCertInfo } from "@/lib/questions";
import { Quiz } from "@/components/quiz/Quiz";

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

export default function PracticeTestPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const cert = params.cert as string;
  const questionsParam = searchParams.get("questions");

  if (!VALID_CERTS.includes(cert as CertificationType)) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h1 className="font-display text-2xl font-bold">Test not found</h1>
        <p className="mt-3 text-muted-foreground">
          No practice test exists for &ldquo;{cert}&rdquo;.
        </p>
        <Link
          href="/practice-tests"
          className="mt-6 inline-flex items-center rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          ← Back to tests
        </Link>
      </div>
    );
  }

  const certType = cert as CertificationType;
  const questions = getQuestionsByCert(certType);
  const questionCount = questionsParam
    ? Math.min(Math.max(1, parseInt(questionsParam, 10)), questions.length)
    : questions.length;

  return (
    <Quiz
      questions={questions}
      questionCount={questionCount}
      cert={certType}
      certName={CERT_NAMES[certType] ?? certType}
    />
  );
}
