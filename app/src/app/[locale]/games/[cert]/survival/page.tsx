/**
 * Survival Mode page — loads questions for a given cert.
 *
 * Server component that validates the cert param, loads questions
 * via getQuestionsByCert, and renders a placeholder until the
 * Survival game component is implemented.
 */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { setRequestLocale, getTranslations } from "next-intl/server";
import {
  getQuestionsByCert,
  SUPPORTED_LOCALES,
  CERT_TITLES,
  VALID_CERTS,
  parseSupportedLocale,
} from "@/lib/questions";
import type { CertificationType } from "@/lib/questions";
import { buildAlternates, OG_IMAGE } from "@/lib/seo";
import { Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.flatMap((locale) =>
    VALID_CERTS.map((cert) => ({ locale, cert })),
  );
}

interface Props {
  params: Promise<{ locale: string; cert: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale, cert } = await params;
  const certName = CERT_TITLES[cert as CertificationType] ?? cert;
  const title = `Survival Mode — ${certName}`;
  const description = `Survival Mode: answer ${certName} questions until you get one wrong.`;

  return {
    title,
    description,
    alternates: buildAlternates(locale, `/games/${cert}/survival`),
    openGraph: { title, description, locale, images: [OG_IMAGE] },
  };
}

export default async function SurvivalPage({ params }: Props) {
  const { locale, cert } = await params;
  setRequestLocale(locale);

  if (!VALID_CERTS.includes(cert as CertificationType)) {
    notFound();
  }

  const certType = cert as CertificationType;
  const questions = getQuestionsByCert(certType, parseSupportedLocale(locale));
  const certName = CERT_TITLES[certType] ?? certType;
  const t = await getTranslations("Games");

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
      <div className="mb-6 sm:mb-9">
        <div className="flex items-center gap-2 text-[13px] text-muted-foreground mb-1">
          <Link
            href={`/${locale}/games`}
            className="text-primary no-underline hover:underline"
          >
            {t("label")}
          </Link>
          <span>›</span>
          <span>{certName}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <Flame className="size-5 text-destructive" />
          <h1 className="font-display text-[24px] sm:text-[30px] font-extrabold text-foreground tracking-tight">
            {t("survivalTitle")}
          </h1>
        </div>
      </div>

      {/* Placeholder — will be replaced by the Survival game client component */}
      <Card className="bg-card">
        <CardContent className="p-8 text-center">
          <Flame className="size-10 text-destructive mx-auto mb-4" />
          <h2 className="font-display text-[20px] font-bold text-foreground mb-2">
            {certName}
          </h2>
          <p className="text-muted-foreground text-[15px] mb-1">
            {t("questionsAvailable", { count: questions.length })}
          </p>
          <p className="text-muted-foreground text-sm">
            {t("comingSoon")}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
