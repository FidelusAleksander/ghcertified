"use client";

/**
 * GamesCatalog — displays available game modes with cert pickers.
 *
 * Currently only Survival Mode. Each cert card links to its survival route.
 */

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CERT_META } from "@/lib/cert-meta";
import { Heart } from "lucide-react";

interface CertData {
  id: string;
  name: string;
  questions: number;
}

interface Props {
  certs: CertData[];
  locale: string;
}

export function GamesCatalog({ certs, locale }: Props) {
  const t = useTranslations("Games");
  const tCert = useTranslations("CertDescriptions");

  return (
    <div>
      {/* Survival Mode section */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="size-10 rounded-xl bg-destructive/10 flex items-center justify-center">
            <Heart className="size-5 text-destructive" />
          </div>
          <div>
            <h3 className="font-display text-[20px] font-bold text-foreground tracking-tight">
              {t("survivalMode")}
            </h3>
            <p className="text-[13px] text-muted-foreground">{t("survivalDescription")}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((cert) => {
          const meta = CERT_META[cert.id as keyof typeof CERT_META];
          if (!meta) return null;

          return (
            <Card
              key={cert.id}
              className="bg-card transition-all hover:border-primary hover:shadow-[0_0_0_3px_hsl(var(--primary-soft))] hover:-translate-y-0.5"
            >
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3.5">
                  <div className={`size-12 rounded-xl flex items-center justify-center flex-shrink-0 ${meta.colorClass}`}>
                    {meta.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display text-[17px] font-bold text-foreground tracking-tight">{cert.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{t("questionsAvailable", { count: cert.questions })}</div>
                  </div>
                  <Badge variant="outline" className="text-[10px] font-bold tracking-wide uppercase flex-shrink-0">
                    <Heart className="size-3 mr-1 text-destructive" />
                    1 Life
                  </Badge>
                </div>
                <div className="text-[13.5px] text-muted-foreground leading-relaxed">{tCert(cert.id)}</div>
                <Button
                  render={<Link href={`/${locale}/games/survival/${cert.id}`} />}
                  nativeButton={false}
                  className="w-full rounded-[9px] text-[13.5px] font-semibold"
                >
                  {t("play")}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
