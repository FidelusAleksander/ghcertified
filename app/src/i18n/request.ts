import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from "@/lib/locales";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(SUPPORTED_LOCALES, requested)
    ? requested
    : DEFAULT_LOCALE;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
