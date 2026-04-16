"use client";

/**
 * GamesCatalog — displays available game modes.
 *
 * Game modes are not split by certification — questions from all certs
 * are combined into a single pool. Each card represents a game mode.
 */

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface Props {
  totalQuestions: number;
  locale: string;
}

export function GamesCatalog({ totalQuestions, locale }: Props) {
  const t = useTranslations("Games");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Survival Mode */}
      <Card className="bg-card transition-all hover:border-primary hover:shadow-[0_0_0_3px_hsl(var(--primary-soft))] hover:-translate-y-0.5">
        <CardContent className="p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3.5">
            <div className="size-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <Heart className="size-6 text-destructive" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-display text-[17px] font-bold text-foreground tracking-tight">
                {t("survivalMode")}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {t("questionsAvailable", { count: totalQuestions })}
              </div>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="text-[10px] font-bold tracking-wide uppercase">
              <Heart className="size-3 mr-1 text-destructive" />
              1 Life
            </Badge>
            <Badge variant="outline" className="text-[10px] font-bold tracking-wide uppercase">
              All Certs
            </Badge>
          </div>
          <p className="text-[13.5px] text-muted-foreground leading-relaxed">
            {t("survivalDescription")}
          </p>
          <Button
            render={<Link href={`/${locale}/games/survival`} />}
            nativeButton={false}
            className="w-full rounded-[9px] text-[13.5px] font-semibold"
          >
            {t("play")}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
