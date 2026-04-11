/**
 * Catalog page — choose a certification track and start practicing.
 *
 * Server component that loads dynamic question counts at build time,
 * passes them to the client CatalogCards for interactive inputs.
 */

import { getCertCatalog } from "@/lib/questions";
import type { SupportedLocale } from "@/lib/questions";
import { CatalogCards } from "./catalog-cards";

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function PracticeTestsPage({ params }: Props) {
  const { locale } = await params;
  const certs = getCertCatalog(locale as SupportedLocale).map((c) => ({
    id: c.cert,
    name: c.title,
    questions: c.questionCount,
  }));

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
      <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[1.2px] uppercase text-muted-foreground mb-4">
        Practice Tests
      </div>
      <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
        <div>
          <h2 className="font-display text-[clamp(26px,3vw,36px)] font-extrabold tracking-tight leading-[1.1] text-foreground">
            Choose a<br />certification track
          </h2>
          <p className="text-[15px] text-muted-foreground mt-2 max-w-[480px]">
            Set the number of questions you want, then jump in. Questions are
            randomized each session.
          </p>
        </div>
      </div>

      <CatalogCards certs={certs} locale={locale} />
    </div>
  );
}
