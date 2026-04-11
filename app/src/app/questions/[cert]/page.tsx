/**
 * Questions list for a specific certification type. Server component.
 */

import { notFound } from "next/navigation";
import Link from "next/link";
import type { CertificationType } from "@/lib/questions";
import { getQuestionsByCert, getCertInfo } from "@/lib/questions";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const VALID_CERTS: CertificationType[] = [
  "actions", "admin", "advanced_security", "copilot", "foundations",
];

export function generateStaticParams() {
  return VALID_CERTS.map((cert) => ({ cert }));
}

interface Props {
  params: Promise<{ cert: string }>;
}

export default async function CertQuestionsPage({ params }: Props) {
  const { cert } = await params;
  const certInfo = getCertInfo(cert as CertificationType);

  if (!certInfo) {
    notFound();
  }

  const questions = getQuestionsByCert(cert as CertificationType);

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

      <div className="flex flex-col gap-2">
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
