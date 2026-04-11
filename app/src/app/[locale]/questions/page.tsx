import Link from "next/link";
import { getCertCatalog } from "@/lib/questions";
import type { SupportedLocale } from "@/lib/questions";
import { CERT_META } from "@/lib/cert-meta";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ locale: string }>;
}

/**
 * Question Library page — browse questions grouped by certification type.
 * Covers F08 (question library browsing). Server Component.
 */
export default async function QuestionsPage({ params }: Props) {
  const { locale } = await params;
  const catalog = getCertCatalog(locale as SupportedLocale);
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
        {catalog.map((cert) => {
          const meta = CERT_META[cert.cert];
          return (
            <Link key={cert.cert} href={`/${locale}/questions/${cert.cert}`} className="group no-underline">
              <Card className="transition-all hover:border-primary hover:shadow-[0_0_0_3px_hsl(var(--primary-soft))] hover:-translate-y-0.5 cursor-pointer bg-card h-full">
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  <div className="flex items-center gap-3.5">
                    <div className={`size-12 rounded-xl flex items-center justify-center flex-shrink-0 ${meta.colorClass}`}>
                      {meta.icon}
                    </div>
                    <div>
                      <div className="font-display text-[17px] font-bold text-foreground tracking-tight">
                        {cert.title}
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {cert.questionCount} questions
                      </div>
                    </div>
                  </div>
                  <div className="text-[13.5px] text-muted-foreground leading-relaxed flex-1">
                    {meta.desc}
                  </div>
                  <div className="flex items-center gap-1.5 text-[13px] font-semibold text-primary">
                    Browse questions
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
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
