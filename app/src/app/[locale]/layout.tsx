import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale, getMessages } from "next-intl/server";
import { SUPPORTED_LOCALES } from "@/lib/locales";
import { Navbar } from "@/components/Navbar";
import { AnnouncementBanner } from "@/components/AnnouncementBanner";
import { Footer } from "@/components/Footer";
import { AuthProvider } from "@/components/AuthProvider";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

interface Props {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}

export default async function LocaleLayout({ params, children }: Props) {
  const { locale } = await params;

  if (!hasLocale(SUPPORTED_LOCALES, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <AuthProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.lang="${locale}"`,
          }}
        />
        <AnnouncementBanner />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </AuthProvider>
    </NextIntlClientProvider>
  );
}
