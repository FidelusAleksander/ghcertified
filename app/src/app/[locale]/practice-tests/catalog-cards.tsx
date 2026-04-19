"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Slider } from "@/components/ui/slider";
import { ArrowRight, ChevronDown } from "lucide-react";
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
  const [expandedCert, setExpandedCert] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-start">
      {certs.map((cert) => {
        const meta = CERT_META[cert.id as keyof typeof CERT_META];
        if (!meta) return null;

        const count = counts[cert.id] ?? defaultCount(cert.questions);
        const isExpanded = expandedCert === cert.id;

        return (
          <div
            key={cert.id}
            className={`
              group relative text-left w-full rounded-xl bg-card
              transition-[box-shadow,background-color] duration-200 ease-out
              ${isExpanded
                ? "shadow-md"
                : "hover:shadow-sm"
              }
            `}
          >
            {/* Card shell with right border + top/bottom border */}
            <div className={`
              rounded-xl border transition-colors duration-200
              ${isExpanded ? "border-border/60" : "border-border/40 group-hover:border-border/60"}
            `}>
              {/* Clickable header — toggles expand */}
              <button
                type="button"
                onClick={() => setExpandedCert(isExpanded ? null : cert.id)}
                className="w-full text-left p-5 sm:p-6 cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`size-11 rounded-lg flex items-center justify-center flex-shrink-0 ${meta.colorClass}`}>
                    {meta.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-lg font-bold text-foreground tracking-tight leading-tight">
                        {cert.name}
                      </h3>
                      <ChevronDown className={`
                        size-4 text-muted-foreground/60 flex-shrink-0 transition-transform duration-200
                        ${isExpanded ? "rotate-180" : "group-hover:text-muted-foreground"}
                      `} />
                    </div>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[13px] text-muted-foreground">
                        {t("questionsAvailable", { count: cert.questions })}
                      </span>
                    </div>
                    <p className="text-[13.5px] text-muted-foreground/80 leading-relaxed mt-2.5 line-clamp-2">
                      {tCert(cert.id)}
                    </p>
                  </div>
                </div>
              </button>

              {/* Expanded content — slider, start, browse */}
              {isExpanded && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-1 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="border-t border-border/40 pt-4">
                    {/* Slider group */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[12.5px] text-muted-foreground">{t("questionCountLabel")}</span>
                        <span className="font-display text-sm font-bold text-foreground tabular-nums">
                          {count} <span className="font-normal text-muted-foreground">/ {cert.questions}</span>
                        </span>
                      </div>
                      <Slider
                        aria-label={t("questionCountLabel")}
                        value={[count]}
                        min={1}
                        max={cert.questions}
                        onValueChange={(val) => {
                          const v = Array.isArray(val) ? val[0] : val;
                          setCounts({ ...counts, [cert.id]: v });
                        }}
                      />
                    </div>

                    {/* Actions — stacked: primary start, secondary browse */}
                    <div className="flex flex-col gap-2 mt-4">
                      <Link
                        href={`/${locale}/practice-tests/${cert.id}?questions=${count}`}
                        className="w-full inline-flex items-center justify-center rounded-lg text-[13.5px] font-semibold h-10 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                      >
                        {t("start")}
                      </Link>
                      <Link
                        href={`/${locale}/questions/${cert.id}`}
                        className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg text-[13px] font-medium h-9 text-muted-foreground hover:text-foreground hover:bg-muted/50 no-underline transition-colors"
                      >
                        {t("browseQuestions")}
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
