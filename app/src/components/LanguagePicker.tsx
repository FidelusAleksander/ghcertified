"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  SUPPORTED_LOCALES,
  LOCALE_LABELS,
  LOCALE_FLAGS,
  type SupportedLocale,
} from "@/lib/locales";

/** Strip locale prefix from a path. */
function stripLocale(pathname: string): string {
  const seg = pathname.split("/")[1] ?? "";
  if ((SUPPORTED_LOCALES as readonly string[]).includes(seg)) {
    return pathname.slice(seg.length + 1) || "/";
  }
  return pathname;
}

export function LanguagePicker({ className }: { className?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale() as SupportedLocale;
  const [open, setOpen] = useState(false);

  const pathWithoutLocale = stripLocale(pathname);

  function handleSelect(newLocale: SupportedLocale) {
    setOpen(false);
    if (newLocale === locale) return;
    router.push(
      `/${newLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`
    );
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        render={
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "gap-1 px-2 text-muted-foreground hover:text-foreground",
              className
            )}
            aria-label={`Language: ${LOCALE_LABELS[locale]}`}
          />
        }
      >
        <span className="text-base leading-none">{LOCALE_FLAGS[locale]}</span>
        <ChevronDown
          className={cn(
            "size-3 opacity-60 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </PopoverTrigger>

      <PopoverContent
        align="end"
        sideOffset={8}
        className="w-44 gap-0 p-1"
      >
        <div role="listbox" aria-label="Select language">
          {SUPPORTED_LOCALES.map((loc) => {
            const isActive = loc === locale;
            return (
              <button
                key={loc}
                role="option"
                aria-selected={isActive}
                onClick={() => handleSelect(loc)}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <span className="text-base leading-none">
                  {LOCALE_FLAGS[loc]}
                </span>
                <span className="flex-1 text-left font-medium">
                  {LOCALE_LABELS[loc]}
                </span>
                {isActive && (
                  <Check className="size-3.5 text-primary" />
                )}
              </button>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
