"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { CERT_META } from "@/lib/cert-meta";

interface CertData {
  id: string;
  name: string;
  questions: number;
}

interface Props {
  certs: CertData[];
  locale: string;
}

export function CatalogCards({ certs, locale }: Props) {
  const t = useTranslations("CatalogCard");
  const tCert = useTranslations("CertDescriptions");
  const defaultCount = (total: number) => Math.min(60, total);
  const [counts, setCounts] = useState<Record<string, number>>({});

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {certs.map((cert) => {
        const meta = CERT_META[cert.id as keyof typeof CERT_META];
        if (!meta) return null;

        const count = counts[cert.id] ?? defaultCount(cert.questions);

        return (
          <Card key={cert.id} className="bg-card transition-all hover:border-primary hover:shadow-[0_0_0_3px_hsl(var(--primary-soft))] hover:-translate-y-0.5">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3.5">
                <div className={`size-12 rounded-xl flex items-center justify-center flex-shrink-0 ${meta.colorClass}`}>
                  {meta.icon}
                </div>
                <div>
                  <div className="font-display text-[17px] font-bold text-foreground tracking-tight">{cert.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t("questionsAvailable", { count: cert.questions })}</div>
                </div>
              </div>
              <div className="text-[13.5px] text-muted-foreground leading-relaxed">{tCert(cert.id)}</div>

              {/* Question count slider */}
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[12.5px] text-muted-foreground">{t("practiceWith")}</span>
                  <span className="font-display text-sm font-bold text-foreground tabular-nums">
                    {count} <span className="font-normal text-muted-foreground">/ {cert.questions}</span>
                  </span>
                </div>
                <Slider
                  aria-label={t("practiceWith")}
                  value={[count]}
                  min={1}
                  max={cert.questions}
                  onValueChange={(val) => {
                    const v = Array.isArray(val) ? val[0] : val;
                    setCounts({ ...counts, [cert.id]: v });
                  }}
                />
              </div>

              <Button
                render={<Link href={`/${locale}/practice-tests/${cert.id}?questions=${count}`} />}
                nativeButton={false}
                className="w-full rounded-[9px] text-[13.5px] font-semibold"
              >
                {t("start")}
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
