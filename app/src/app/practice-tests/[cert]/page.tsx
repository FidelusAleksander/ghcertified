"use client";

/**
 * Practice test page for a specific certification.
 *
 * This is a dynamic route: /practice-tests/[cert]
 * The [cert] parameter tells us which certification's questions to load.
 * The ?questions= search param tells us how many to show.
 *
 * "use client" because we read URL params with useParams/useSearchParams
 * and render the interactive Quiz component.
 */

import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { CertificationType } from "@/types/quiz";
import { getQuestionsByCert, getCertInfo } from "@/lib/questions";
import { Quiz } from "@/components/quiz/Quiz";

const VALID_CERTS: CertificationType[] = [
  "actions",
  "admin",
  "advanced_security",
  "copilot",
  "foundations",
];

export default function PracticeTestPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  const cert = params.cert as string;
  const questionsParam = searchParams.get("questions");

  // Validate the cert parameter
  if (!VALID_CERTS.includes(cert as CertificationType)) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h1 className="font-heading text-2xl font-bold">Test not found</h1>
        <p className="mt-3 text-muted-foreground">
          No practice test exists for &ldquo;{cert}&rdquo;.
        </p>
        <Link
          href="/practice-tests"
          className="mt-6 inline-flex h-10 items-center rounded-lg border border-border px-5 text-sm font-medium transition-colors hover:bg-secondary"
        >
          ← Back to tests
        </Link>
      </div>
    );
  }

  const certType = cert as CertificationType;
  const questions = getQuestionsByCert(certType);
  const certInfo = getCertInfo(certType);
  const questionCount = questionsParam
    ? Math.min(Math.max(1, parseInt(questionsParam, 10)), questions.length)
    : questions.length;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <Link
          href="/practice-tests"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to tests
        </Link>
        <h1 className="mt-4 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
          {certInfo?.title ?? cert} Practice Test
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {questionCount} question{questionCount !== 1 && "s"} · Randomized
          order
        </p>
      </div>

      {/* Quiz */}
      <Quiz
        questions={questions}
        questionCount={questionCount}
        cert={certType}
      />
    </div>
  );
}
