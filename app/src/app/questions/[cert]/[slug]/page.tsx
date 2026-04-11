"use client";

/**
 * Individual question view page.
 * Renders a single question as a mini quiz (1 question).
 */

import { useParams } from "next/navigation";
import Link from "next/link";
import { getQuestionsByCert, getCertInfo } from "@/lib/questions";
import { CertificationType } from "@/types/quiz";
import { Quiz } from "@/components/quiz/Quiz";

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
        <h1 className="font-heading text-2xl font-bold">Question not found</h1>
        <Link
          href={`/questions/${cert}`}
          className="mt-4 inline-flex text-sm text-primary underline underline-offset-4"
        >
          ← Back to {certInfo?.title ?? "questions"}
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href={`/questions/${cert}`}
        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← {certInfo.title}
      </Link>
      <h1 className="mt-4 font-heading text-xl font-bold tracking-tight">
        {question.id}
      </h1>

      <div className="mt-8">
        <Quiz questions={[question]} questionCount={1} cert={cert} />
      </div>
    </div>
  );
}
