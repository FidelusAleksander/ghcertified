import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Play, ArrowRight, Swords, BookOpen, Trophy, Timer, Flame, Check } from "lucide-react";
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

        {/* Right column: mock quiz card (hidden on mobile, stays English — decorative) */}
        <div className="relative hidden lg:block">
          {/* Floating mini results map */}
          <Card className="absolute -top-4 -right-3 z-10 shadow-md rotate-3">
            <CardContent className="px-3.5 py-3 flex flex-col gap-2">
              <div className="flex items-center justify-between gap-4">
                <div className="text-[10px] font-bold tracking-wide uppercase text-muted-foreground">Results</div>
                <div className="font-display text-lg font-bold text-foreground">90%</div>
              </div>
              <div className="grid grid-cols-5 gap-1.5">
                {[1,2,3,4,5,6,7,8,9,10].map((n) => {
                  const correct = n !== 3;
                  return (
                    <div key={n} className={`size-6 rounded-md text-[9px] font-bold border flex items-center justify-center ${correct ? "bg-success/15 border-success/50 text-success" : "bg-destructive/15 border-destructive/50 text-destructive"}`}>{n}</div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-xl rounded-[20px] relative -rotate-1 transition-transform hover:rotate-0 hover:shadow-2xl">
            <CardContent className="p-7">
              <div className="flex items-center gap-3 mb-6">
                <Badge className="bg-foreground text-card hover:bg-foreground font-display text-[11px] font-bold tracking-wide">ACTIONS</Badge>
                <Progress value={42} className="flex-1 h-1.5" />
                <span className="text-xs font-semibold text-muted-foreground whitespace-nowrap">Q3 of 15</span>
              </div>
              <p className="text-[14.5px] font-medium text-foreground leading-relaxed mb-4">
                Q3: You can use <code className="font-mono text-[12.5px] bg-muted px-1.5 py-0.5 rounded">permissions</code> to modify the <code className="font-mono text-[12.5px] bg-muted px-1.5 py-0.5 rounded">GITHUB_TOKEN</code> permissions on: <em className="not-italic text-muted-foreground">(Select two.)</em>
              </p>
              <div className="flex flex-col gap-2">
                {["Workflow level", "Step level", "Job level"].map((opt, i) => (
                  <div key={i} className={`flex items-center gap-3 px-3.5 py-2.5 border-[1.5px] rounded-[10px] text-sm ${i === 0 || i === 2 ? "border-success bg-success-soft" : "border-destructive bg-destructive-soft"}`}>
                    <div className={`size-[18px] rounded-full border-2 flex items-center justify-center flex-shrink-0 ${i === 0 || i === 2 ? "border-success bg-success" : "border-destructive bg-destructive"}`}>
                      <div className="size-2 rounded-full bg-card" />
                    </div>
                    {opt}
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-destructive-soft border border-destructive/30 rounded-[10px] text-[13px] leading-relaxed text-destructive">
                <strong>❌ Incorrect.</strong> The <code className="font-mono text-[12.5px] bg-destructive/10 px-1 rounded">permissions</code> key can be set at the workflow or job level — not the step level.
              </div>
              <Separator className="mt-5 mb-0" />
              <div className="flex items-center justify-between pt-4">
                <span className="text-[13px] font-semibold text-muted-foreground">← Back</span>
                <span className="inline-flex items-center rounded-lg bg-foreground px-4 py-2 text-[13px] font-semibold text-card">Next question →</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Two Paths section — Practice Tests & Challenge Modes */}
      <div className="mt-12 sm:mt-16">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[1.2px] uppercase text-muted-foreground mb-4">
          {t("twoPathsLabel")}
        </div>
        <h2 className="font-display text-[clamp(26px,3vw,36px)] font-extrabold tracking-tight leading-[1.1] text-foreground mb-8 sm:mb-10">
          {t("twoPathsTitle1")}<br />{t("twoPathsTitle2")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Practice Tests card */}
          <Card className="bg-primary-soft/40 border-primary/15">
            <CardContent className="p-6 sm:p-7 flex flex-col gap-5 h-full">
              <div className="flex items-center gap-3.5">
                <div className="size-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary">
                  <BookOpen className="text-primary-foreground size-5" />
                </div>
                <div className="font-display text-[19px] font-bold text-foreground tracking-tight">{t("practiceTestsTitle")}</div>
              </div>
              <p className="text-[14px] text-muted-foreground leading-relaxed">{t("practiceTestsDescription")}</p>
              <ul className="flex flex-col gap-2 flex-1">
                {(["practiceTestsHighlight1", "practiceTestsHighlight2", "practiceTestsHighlight3"] as const).map((key) => (
                  <li key={key} className="flex items-center gap-2.5 text-[13.5px] text-foreground">
                    <Check className="size-4 text-primary flex-shrink-0" />
                    {t(key)}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                render={<Link href={`/${locale}/practice-tests`} />}
                nativeButton={false}
                className="h-auto rounded-[10px] px-5 py-2.5 text-[13px] font-semibold w-fit"
              >
                {t("browseTests")}
                <ArrowRight className="size-3.5" />
              </Button>
            </CardContent>
          </Card>

          {/* Challenge Modes card */}
          <Card className="bg-destructive-soft/40 border-destructive/15">
            <CardContent className="p-6 sm:p-7 flex flex-col gap-5 h-full">
              <div className="flex items-center gap-3.5">
                <div className="size-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-foreground">
                  <Swords className="text-card size-5" />
                </div>
                <div className="font-display text-[19px] font-bold text-foreground tracking-tight">{t("challengesTitle")}</div>
              </div>
              <p className="text-[14px] text-muted-foreground leading-relaxed">{t("challengesDescription")}</p>
              <ul className="flex flex-col gap-2 flex-1">
                {([
                  { key: "challengesHighlight1" as const, icon: <Flame className="size-4 text-destructive flex-shrink-0" /> },
                  { key: "challengesHighlight2" as const, icon: <Timer className="size-4 text-warning flex-shrink-0" /> },
                  { key: "challengesHighlight3" as const, icon: <Trophy className="size-4 text-primary flex-shrink-0" /> },
                ]).map(({ key, icon }) => (
                  <li key={key} className="flex items-center gap-2.5 text-[13.5px] text-foreground">
                    {icon}
                    {t(key)}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                render={<Link href={`/${locale}/challenges`} />}
                nativeButton={false}
                className="h-auto rounded-[10px] px-5 py-2.5 text-[13px] font-semibold w-fit"
              >
                {t("playChallenges")}
                <ArrowRight className="size-3.5" />
              </Button>
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
