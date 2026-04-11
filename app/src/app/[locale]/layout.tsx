import { notFound } from "next/navigation";
import {
  SUPPORTED_LOCALES,
  isValidLocale,
} from "@/lib/locales";
import type { SupportedLocale } from "@/lib/locales";
import { LocaleProvider } from "@/components/LocaleProvider";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

interface Props {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}

export default async function LocaleLayout({ params, children }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return (
    <LocaleProvider locale={locale as SupportedLocale}>
      {children}
    </LocaleProvider>
  );
}
