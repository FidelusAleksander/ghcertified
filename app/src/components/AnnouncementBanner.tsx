"use client";

/**
 * Temporary announcement banner — remove this file and its import in
 * app/[locale]/layout.tsx when the promotion is over.
 */

import { useState, useSyncExternalStore } from "react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { X, Swords } from "lucide-react";

const STORAGE_KEY = "banner-challenge-modes-dismissed";

const subscribe = () => () => {};
function getSnapshot() {
  return !sessionStorage.getItem(STORAGE_KEY);
}
function getServerSnapshot() {
  return true;
}

export function AnnouncementBanner() {
  const locale = useLocale();
  const t = useTranslations("AnnouncementBanner");
  const shouldShow = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [dismissed, setDismissed] = useState(false);

  if (!shouldShow || dismissed) return null;

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setDismissed(true);
  }

  return (
    <div className="relative bg-foreground text-card">
      <Link
        href={`/${locale}/challenges`}
        className="block px-10 py-2.5 text-center text-[13px] sm:text-sm font-medium no-underline hover:underline"
      >
        <Swords className="inline size-3.5 mr-1.5 -mt-0.5" />
        <span className="font-semibold">{t("badge")}</span>
        {" "}
        {t("message")}
        {" "}
        <span className="font-semibold">{t("ctaLabel")}</span>
      </Link>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          dismiss();
        }}
        className="touch-target absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md text-card/70 hover:text-card transition-colors"
        aria-label={t("dismiss")}
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
