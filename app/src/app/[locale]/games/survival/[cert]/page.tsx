/**
 * Survival Mode page — placeholder until gameplay is implemented.
 *
 * Validates the cert param, loads cert info (not full questions),
 * and renders a coming-soon message. Full gameplay in Issue #529.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale, getTranslations } from "next-intl/server";
import {
  SUPPORTED_LOCALES,
  CERT_TITLES,
  VALID_CERTS,
  getCertInfo,
  parseSupportedLocale,
} from "@/lib/questions";
import type { CertificationType } from "@/lib/questions";
import { buildAlternates, OG_IMAGE } from "@/lib/seo";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.flatMap((locale) =>
    VALID_CERTS.map((cert) => ({ locale, cert })),
  );
}

interface Props {
  params: Promise<{ locale: string; cert: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, cert } = await params;
  const certName = CERT_TITLES[cert as CertificationType] ?? cert;
  const info = getCertInfo(cert as CertificationType, parseSupportedLocale(locale));
  const title = `Survival Mode — ${certName}`;
  const description = `Survival Mode: ${info?.questionCount ?? 0} questions, 1 life. How far can you go on the ${certName} certification?`;

  return {
    title,
    description,
    alternates: buildAlternates(locale, `/games/survival/${cert}`),
    openGraph: { title, description, locale, images: [OG_IMAGE] },
  };
}

export default async function SurvivalModePage({ params }: Props) {
  const { locale, cert } = await params;
  setRequestLocale(locale);

  if (!VALID_CERTS.includes(cert as CertificationType)) {
    notFound();
  }

  const certType = cert as CertificationType;
  const certName = CERT_TITLES[certType] ?? certType;
  const info = getCertInfo(certType, parseSupportedLocale(locale));
  const t = await getTranslations("Games");

  return (
    <div className="max-w-[720px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
      <div className="flex items-center gap-2 text-[13px] text-muted-foreground mb-6">
        <Link href={`/${locale}/games`} className="text-primary no-underline hover:underline">
          {t("label")}
        </Link>
        <span>›</span>
        <span>{t("survivalMode")}</span>
        <span>›</span>
        <span>{certName}</span>
      </div>

      <Card className="border-[1.5px]">
        <CardContent className="p-8 sm:p-12 text-center">
          <div className="size-16 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="size-8 text-destructive" />
          </div>
          <h1 className="font-display text-[24px] sm:text-[30px] font-extrabold tracking-tight text-foreground mb-2">
            {t("survivalMode")}
          </h1>
          <p className="text-[15px] text-muted-foreground mb-1">{certName}</p>
          <p className="text-[13px] text-muted-foreground mb-8">
            {info?.questionCount ?? 0} questions · 1 life
          </p>

          <div className="bg-muted/50 rounded-xl p-6 mb-8">
            <p className="font-display text-[15px] font-semibold text-foreground mb-1">
              {t("comingSoon")}
            </p>
            <p className="text-[13px] text-muted-foreground">
              {t("comingSoonDescription")}
            </p>
          </div>

          <Button
            render={<Link href={`/${locale}/games`} />}
            nativeButton={false}
            variant="outline"
            className="rounded-[9px] text-[13.5px] font-semibold"
          >
            {t("backToGames")}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
