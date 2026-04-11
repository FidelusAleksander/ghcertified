import Link from "next/link";
import { CERT_CATALOG } from "@/lib/questions";
import { CERT_META } from "@/lib/cert-meta";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * Question Library page — browse questions grouped by certification type.
 * Covers F08 (question library browsing). Server Component.
 */
export default function QuestionsPage() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
      <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[1.2px] uppercase text-muted-foreground mb-4">
        Question Library
      </div>
      <h1 className="font-display text-[clamp(26px,3vw,36px)] font-extrabold tracking-tight leading-[1.1] text-foreground">
        Browse all questions
      </h1>
      <p className="text-[15px] text-muted-foreground mt-2 max-w-[480px] mb-10">
        Explore every question organized by certification track. Pick a category
        to study at your own pace.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERT_CATALOG.map((cert) => {
          const meta = CERT_META[cert.cert];
          return (
            <Link key={cert.cert} href={`/questions/${cert.cert}`} className="no-underline">
              <Card className="transition-all hover:border-primary hover:shadow-[0_0_0_3px_hsl(var(--primary-soft))] hover:-translate-y-0.5 cursor-pointer bg-card">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className={`size-12 rounded-xl flex items-center justify-center flex-shrink-0 ${meta.colorClass}`}>
                      {meta.icon}
                    </div>
                    <div>
                      <div className="font-display text-[17px] font-bold text-foreground tracking-tight">
                        {cert.title}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {cert.questionCount} questions available
                      </div>
                    </div>
                  </div>
                  <div className="text-[13.5px] text-muted-foreground leading-relaxed">
                    {meta.desc}
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-display text-[22px] font-bold text-foreground flex items-baseline gap-1">
                      {cert.questionCount} <span className="text-[13px] font-normal text-muted-foreground">questions</span>
                    </div>
                    <Badge className="px-4 py-2 rounded-[9px] text-[13.5px] font-semibold">
                      Browse →
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
