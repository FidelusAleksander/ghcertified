import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Play, Swords, Trophy, Timer, Flame, Heart } from "lucide-react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { getCertCatalog } from "@/lib/questions";
import { parseSupportedLocale } from "@/lib/questions";
import { getContributors } from "@/lib/contributors";
import { buildAlternates, OG_IMAGE } from "@/lib/seo";

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Home" });
  const title = "GitHub Certified — Practice Tests";
  const description = t("heroDescription");

  return {
    title,
    description,
    alternates: buildAlternates(locale, "/"),
    openGraph: {
      title,
      description,
      locale,
      images: [OG_IMAGE],
    },
  };
}

/**
 * Homepage — hero, two paths (practice tests + challenge modes), and contributors.
 */
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");
  const catalog = getCertCatalog(parseSupportedLocale(locale));
  const totalQuestions = catalog.reduce((sum, c) => sum + c.questionCount, 0);
  const contributors = await getContributors();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GitHub Certified",
    url: `https://ghcertified.com/${locale}`,
    description: t("heroDescription"),
    inLanguage: locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 pt-10 sm:pt-24 pb-8 sm:pb-20">
      {/* Hero — two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center pb-14 sm:pb-20">
        {/* Left column: copy */}
        <div>
          <h1 className="font-display text-[clamp(36px,4vw,52px)] font-extrabold leading-[1.08] tracking-tight text-foreground mb-5">
            {t("heroTitle1")}<br />
            <span className="text-primary">{t("heroTitle2")}</span><br />
            {t("heroTitle3")}
          </h1>
          <p className="text-[17px] text-muted-foreground leading-relaxed max-w-[480px] mb-9">
            {t("heroDescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <Button
              render={<Link href={`/${locale}/practice-tests`} />}
              nativeButton={false}
              className="h-auto rounded-[10px] px-7 py-3.5 text-[15px] font-semibold bg-foreground text-card hover:bg-foreground/90 justify-center"
            >
              <Play data-icon="inline-start" />
              {t("startPracticing")}
            </Button>
            <Button
              variant="outline"
              render={<Link href={`/${locale}/challenges`} />}
              nativeButton={false}
              className="h-auto rounded-[10px] px-7 py-3.5 text-[15px] font-medium justify-center"
            >
              <Swords data-icon="inline-start" />
              {t("tryChallenges")}
            </Button>
          </div>

          <Separator className="mt-10 sm:mt-12 mb-0" />

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 pt-6 sm:pt-8">
            <div className="text-center sm:text-left">
              <div className="font-display text-[24px] sm:text-[28px] font-bold text-foreground tracking-tight">{totalQuestions}</div>
              <div className="text-[12px] sm:text-[13px] text-muted-foreground mt-0.5">{t("statQuestions")}</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="font-display text-[24px] sm:text-[28px] font-bold text-foreground tracking-tight">2</div>
              <div className="text-[12px] sm:text-[13px] text-muted-foreground mt-0.5">{t("statChallenges")}</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="font-display text-[24px] sm:text-[28px] font-bold text-primary tracking-tight">{t("statFree")}</div>
              <div className="text-[12px] sm:text-[13px] text-muted-foreground mt-0.5">{t("statOpenSource")}</div>
            </div>
          </div>
        </div>

        {/* Right column: three layered cards — question, leaderboard, challenges (hidden on mobile, decorative) */}
        <div className="relative hidden lg:block h-[440px]">
          {/* Layer 1 (back, bottom-left): Challenge Modes compact */}
          <Card className="absolute bottom-0 left-0 right-12 z-0 shadow-lg rounded-[20px] rotate-1 border-[1.5px]">
            <CardContent className="px-5 py-4">
              <div className="flex items-center gap-2 mb-3">
                <Swords className="size-4 text-foreground" />
                <span className="font-display text-[12px] font-extrabold tracking-tight text-foreground">{t("heroChallengeModes")}</span>
              </div>

              <div className="flex flex-col gap-2">
                {/* Gauntlet row */}
                <div className="flex items-center gap-3 rounded-lg border border-destructive/20 bg-destructive/5 px-3 py-2">
                  <Flame className="size-3.5 text-destructive shrink-0" />
                  <span className="text-[11px] font-bold text-foreground">{t("heroGauntlet")}</span>
                  <div className="flex items-center gap-0.5 ml-auto">
                    {[1,2,3].map((i) => (
                      <Heart key={i} className="size-2.5 text-destructive fill-destructive" />
                    ))}
                    {[4,5].map((i) => (
                      <Heart key={i} className="size-2.5 text-muted-foreground/25" />
                    ))}
                  </div>
                  <Separator orientation="vertical" className="h-3.5 mx-0.5" />
                  <span className="text-[10px] text-muted-foreground">{t("heroStreak")}</span>
                  <span className="font-display text-[13px] font-extrabold tabular-nums text-foreground">12</span>
                </div>

                {/* Time Trial row */}
                <div className="flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2">
                  <Timer className="size-3.5 text-primary shrink-0" />
                  <span className="text-[11px] font-bold text-foreground">{t("heroTimeTrial")}</span>
                  <div className="flex items-center gap-1.5 ml-auto flex-1 max-w-[80px]">
                    <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                      <div className="h-full w-[65%] rounded-full bg-primary" />
                    </div>
                    <span className="text-[10px] font-bold tabular-nums text-foreground">0:42</span>
                  </div>
                  <Separator orientation="vertical" className="h-3.5 mx-0.5" />
                  <span className="text-[10px] text-muted-foreground">{t("heroScore")}</span>
                  <span className="font-display text-[13px] font-extrabold tabular-nums text-foreground">8</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Layer 2 (middle): Main question card */}
          <Card className="absolute top-4 left-2 right-2 z-[5] shadow-xl rounded-[20px] -rotate-1 transition-transform hover:rotate-0 hover:shadow-2xl border-[1.5px]">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-foreground text-card hover:bg-foreground font-display text-[10px] font-bold tracking-wide">ACTIONS</Badge>
                <span className="text-[11px] font-semibold text-muted-foreground ml-auto">Q3 / 15</span>
              </div>
              <p className="text-[13px] font-medium text-foreground leading-relaxed mb-4">
                {t("heroMockQuestion")}
              </p>
              <div className="flex flex-col gap-1.5 mb-4">
                {[
                  { label: t("heroMockAnswer1"), correct: true },
                  { label: t("heroMockAnswer2"), correct: false },
                  { label: t("heroMockAnswer3"), correct: true },
                ].map((opt) => (
                  <div key={opt.label} className={`flex items-center gap-2.5 px-3 py-2 border-[1.5px] rounded-[10px] text-[12px] font-medium ${opt.correct ? "border-success bg-success/10 text-success" : "border-destructive bg-destructive/10 text-destructive"}`}>
                    <div className={`size-4 rounded-full border-[1.5px] flex items-center justify-center shrink-0 ${opt.correct ? "border-success bg-success" : "border-destructive bg-destructive"}`}>
                      <div className="size-1.5 rounded-full bg-white" />
                    </div>
                    {opt.label}
                  </div>
                ))}
              </div>

              {/* Result map strip */}
              <div className="flex items-center gap-1">
                {[true,true,false,true,true,true,true,true,true,false,true,true,true,true,true].map((correct, i) => (
                  <div
                    key={i}
                    className={`size-4 rounded text-[7px] font-bold border flex items-center justify-center ${
                      correct
                        ? "bg-success/15 border-success/40 text-success"
                        : "bg-destructive/15 border-destructive/40 text-destructive"
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Layer 3 (front, top-right): Leaderboard — always on top */}
          <Card className="absolute -top-2 -right-1 z-10 shadow-2xl rounded-[16px] rotate-3 transition-transform hover:rotate-2 hover:shadow-2xl border-[1.5px]">
            <CardContent className="px-4 py-3.5">
              <div className="flex items-center gap-1.5 mb-2.5">
                <Trophy className="size-3.5 text-amber-500" />
                <span className="font-display text-[11px] font-extrabold tracking-tight text-foreground">{t("heroLeaderboard")}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {[
                  { rank: "🥇", name: "Mona", score: 47, color: "bg-amber-500" },
                  { rank: "🥈", name: "Copilot", score: 38, color: "bg-violet-500" },
                  { rank: "🥉", name: "Ducky", score: 31, color: "bg-amber-400" },
                ].map((entry) => (
                  <div key={entry.name} className="flex items-center gap-2 rounded-md border px-2 py-1">
                    <span className="text-[11px]">{entry.rank}</span>
                    <div className={`size-5 rounded-full ${entry.color} flex items-center justify-center text-[9px] font-bold text-white`}>
                      {entry.name[0]}
                    </div>
                    <span className="text-[11px] font-semibold text-foreground flex-1">{entry.name}</span>
                    <span className="font-display text-[12px] font-extrabold tabular-nums text-foreground">{entry.score}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contributors section */}
      {contributors.length > 0 && (
        <div className="mt-16 sm:mt-24">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[1.2px] uppercase text-muted-foreground mb-4">
            {t("communityLabel")}
          </div>
          <div className="mb-8 sm:mb-10">
            <h2 className="font-display text-[clamp(26px,3vw,36px)] font-extrabold tracking-tight leading-[1.1] text-foreground">
              {t("communityTitle", { count: contributors.length })}
            </h2>
            <p className="text-[15px] text-muted-foreground mt-2 max-w-[480px]">
              {t("communityDescription")}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {contributors.map((c) => (
              <a
                key={c.login}
                href={c.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={t("contributorTooltip", { login: c.login, count: c.contributions })}
                className="group relative"
              >
                <Image
                  src={`${c.avatarUrl}&s=72`}
                  alt={c.login}
                  width={36}
                  height={36}
                  unoptimized
                  className="size-9 rounded-full border-2 border-border bg-muted transition-all group-hover:scale-110 group-hover:border-primary group-hover:shadow-md"
                  loading="lazy"
                />
              </a>
            ))}
          </div>
          <div className="mt-6">
            <Button
              variant="outline"
              render={<a href="https://github.com/FidelusAleksander/ghcertified/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer" />}
              nativeButton={false}
              className="h-auto rounded-[10px] px-5 py-2.5 text-[13px] font-medium"
            >
              {t("joinContributors")}
            </Button>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
