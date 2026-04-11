"use client";

/**
 * Questions list for a specific certification type.
 */

import { useParams } from "next/navigation";
import Link from "next/link";
import { CertificationType } from "@/types/quiz";
import { getQuestionsByCert, getCertInfo } from "@/lib/questions";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CertQuestionsPage() {
  const params = useParams();
  const cert = params.cert as CertificationType;
  const questions = getQuestionsByCert(cert);
  const certInfo = getCertInfo(cert);

  if (!certInfo) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h1 className="font-display text-2xl font-bold">Not found</h1>
        <Link href="/questions" className="mt-4 inline-flex text-sm text-primary underline underline-offset-4">
          ← Back to library
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-20">
      <div className="flex items-center gap-2 text-[13px] text-muted-foreground mb-4">
        <Link href="/questions" className="text-primary no-underline hover:underline">Questions</Link>
        <span>›</span>
        <span>{certInfo.title}</span>
      </div>
      <h1 className="font-display text-[30px] font-extrabold text-foreground tracking-tight">
        {certInfo.title}
      </h1>
      <p className="mt-2 text-muted-foreground mb-8">
        {questions.length} questions available
      </p>

      <div className="space-y-2">
        {questions.map((q, i) => (
          <Link key={q.id} href={`/questions/${cert}/${q.id}`} className="no-underline block">
            <Card className="transition-all hover:border-primary hover:-translate-y-0.5 cursor-pointer">
              <CardContent className="px-5 py-4 flex items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-foreground flex-1">{q.question}</span>
                <Badge variant="secondary" className="text-xs shrink-0">
                  {q.isMultiSelect ? "Multi" : "Single"}
                </Badge>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
