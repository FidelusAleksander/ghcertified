"use client";

/**
 * Questions list for a specific certification type.
 * Shows all questions with links to individual question pages.
 */

import { useParams } from "next/navigation";
import Link from "next/link";
import { CertificationType } from "@/types/quiz";
import { getQuestionsByCert, getCertInfo } from "@/lib/questions";

export default function CertQuestionsPage() {
  const params = useParams();
  const cert = params.cert as CertificationType;
  const questions = getQuestionsByCert(cert);
  const certInfo = getCertInfo(cert);

  if (!certInfo) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h1 className="font-heading text-2xl font-bold">Not found</h1>
        <Link
          href="/questions"
          className="mt-4 inline-flex text-sm text-primary underline underline-offset-4"
        >
          ← Back to library
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <Link
        href="/questions"
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Back to library
      </Link>
      <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight">
        {certInfo.title}
      </h1>
      <p className="mt-2 text-muted-foreground">
        {questions.length} questions available
      </p>

      <div className="mt-8 space-y-2">
        {questions.map((q, i) => (
          <Link
            key={q.id}
            href={`/questions/${cert}/${q.id}`}
            className="flex items-center gap-4 rounded-lg border border-border bg-card px-5 py-4 transition-colors hover:border-primary/40 hover:bg-secondary/30"
          >
            <span className="text-sm font-medium text-muted-foreground tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium">{q.question}</span>
            <span className="ml-auto shrink-0 rounded-md bg-secondary px-2 py-0.5 text-xs text-muted-foreground">
              {q.isMultiSelect ? "Multi" : "Single"}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
