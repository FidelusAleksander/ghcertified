import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from "@/lib/locales";
import deepmerge from "deepmerge";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(SUPPORTED_LOCALES, requested)
    ? requested
    : DEFAULT_LOCALE;

  const defaultMessages = (await import(`../../messages/${DEFAULT_LOCALE}.json`)).default;

  if (locale === DEFAULT_LOCALE) {
    return { locale, messages: defaultMessages };
  }

  const localeMessages = (await import(`../../messages/${locale}.json`)).default;

  return {
    locale,
    messages: deepmerge(defaultMessages, localeMessages),
  };
});
