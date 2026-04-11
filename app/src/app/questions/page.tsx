import Link from "next/link";
import { CERT_CATALOG } from "@/lib/questions";
import { Card, CardContent } from "@/components/ui/card";

/**
 * Question Library page — browse questions grouped by certification type.
 * Covers F08 (question library browsing). Server Component.
 */
export default function QuestionsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 py-20">
      <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[1.2px] uppercase text-muted-foreground mb-4">
        Question Library
      </div>
      <h1 className="font-display text-[clamp(26px,3vw,36px)] font-extrabold tracking-tight leading-[1.1] text-foreground">
        Browse all questions
      </h1>
      <p className="text-[15px] text-muted-foreground mt-2 max-w-[480px] mb-10">
        All available questions organized by certification type.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERT_CATALOG.map((cert) => (
          <Link key={cert.cert} href={`/questions/${cert.cert}`} className="no-underline">
            <Card className="transition-all hover:border-primary hover:shadow-[0_0_0_3px_hsl(var(--primary-soft))] hover:-translate-y-0.5 cursor-pointer bg-card">
              <CardContent className="p-6">
                <h2 className="font-display text-[17px] font-bold tracking-tight text-foreground">
                  {cert.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cert.questionCount} questions
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
