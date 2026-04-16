import type { Metadata } from "next";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { getAllQuestions, SUPPORTED_LOCALES, parseSupportedLocale } from "@/lib/questions";
import { buildAlternates, OG_IMAGE } from "@/lib/seo";
import { SurvivalMode } from "@/components/games/SurvivalMode";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "SurvivalMode" });
  const title = t("metaTitle");
  const description = t("metaDescription");

  return {
    title,
    description,
    alternates: buildAlternates(locale, "/games/survival"),
    openGraph: { title, description, locale, images: [OG_IMAGE] },
  };
}

export default async function SurvivalModePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const questions = getAllQuestions(parseSupportedLocale(locale));

  return <SurvivalMode questions={questions} />;
}
