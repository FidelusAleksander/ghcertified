import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

/**
 * Certification data for the homepage preview cards.
 * Each has a colored icon, name, description, and question count.
 */
const certifications = [
  {
    id: "actions",
    name: "GitHub Actions",
    desc: "Automate workflows, CI/CD pipelines, and event-driven processes on GitHub.",
    questions: 127,
    color: "#1a6cff",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    id: "foundations",
    name: "GitHub Foundations",
    desc: "Core GitHub concepts, repositories, collaboration, and essential Git workflows.",
    questions: 147,
    color: "#1cb87e",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 13h4" />
      </svg>
    ),
  },
  {
    id: "advanced_security",
    name: "Advanced Security",
    desc: "Code scanning, secret scanning, Dependabot, and security policy management.",
    questions: 116,
    color: "#7c3aed",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

/**
 * Homepage — hero section + certification tracks preview.
 * Two-column layout: left (copy + CTA) + right (mock quiz card).
 */
export default function HomePage() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 pt-24 pb-20">
      {/* Hero — two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pb-20">
        {/* Left column: copy */}
        <div>
          <Badge
            variant="secondary"
            className="bg-primary-soft border border-primary/20 text-primary mb-6 px-3.5 py-1.5 text-[12.5px] font-semibold rounded-full"
          >
            <span className="w-5 h-5 bg-primary rounded-full flex items-center justify-center mr-2">
              <svg viewBox="0 0 12 12" width="11" height="11" fill="none">
                <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            Community-Powered · 500+ Questions
          </Badge>
          <h1 className="font-display text-[clamp(36px,4vw,52px)] font-extrabold leading-[1.08] tracking-tight text-foreground mb-5">
            Ace your<br />
            <span className="text-primary">GitHub</span><br />
            Certifications.
          </h1>
          <p className="text-[17px] text-muted-foreground leading-relaxed max-w-[480px] mb-9">
            Practice with realistic, community-contributed questions across all
            GitHub certification tracks. Immediate feedback, randomized sessions,
            and zero fluff.
          </p>
          <div className="flex gap-3 items-center flex-wrap">
            <Link
              href="/practice-tests"
              className="inline-flex h-auto items-center gap-2 rounded-[10px] bg-foreground px-7 py-3.5 text-[15px] font-semibold text-card transition-colors hover:bg-foreground/90"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Start Practicing
            </Link>
            <a
              href="https://github.com/FidelusAleksander/ghcertified/blob/master/CONTRIBUTING.md"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-auto items-center rounded-[10px] border border-border px-7 py-3.5 text-[15px] font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Contribute Questions
            </a>
          </div>

          <Separator className="mt-12 mb-0" />

          {/* Stats row */}
          <div className="flex gap-8 pt-8">
            <div>
              <div className="font-display text-[28px] font-bold text-foreground tracking-tight">500+</div>
              <div className="text-[13px] text-muted-foreground mt-0.5">Practice questions</div>
            </div>
            <div>
              <div className="font-display text-[28px] font-bold text-foreground tracking-tight">5</div>
              <div className="text-[13px] text-muted-foreground mt-0.5">Certification tracks</div>
            </div>
            <div>
              <div className="font-display text-[28px] font-bold text-foreground tracking-tight">875</div>
              <div className="text-[13px] text-muted-foreground mt-0.5">GitHub stars</div>
            </div>
          </div>
        </div>

        {/* Right column: mock quiz card (hidden on mobile) */}
        <div className="relative hidden lg:block">
          {/* Floating score badge */}
          <Card className="absolute -top-5 -right-5 z-10 shadow-md">
            <CardContent className="px-4 py-3.5 flex items-center gap-2.5">
              <div className="w-9 h-9 bg-success-soft rounded-[9px] flex items-center justify-center text-lg">🏆</div>
              <div>
                <div className="font-display text-xl font-bold text-foreground">87%</div>
                <div className="text-xs text-muted-foreground">Latest score</div>
              </div>
            </CardContent>
          </Card>

          {/* Mock quiz card */}
          <Card className="shadow-lg rounded-[20px] relative z-[2]">
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
                    <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center flex-shrink-0 ${i === 0 || i === 2 ? "border-success bg-success" : "border-destructive bg-destructive"}`}>
                      <div className="w-2 h-2 rounded-full bg-card" />
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

      {/* Certification tracks section */}
      <div className="mt-6">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[1.2px] uppercase text-muted-foreground mb-4">
          Certification Tracks
        </div>
        <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
          <div>
            <h2 className="font-display text-[clamp(26px,3vw,36px)] font-extrabold tracking-tight leading-[1.1] text-foreground">
              Pick your<br />certification path
            </h2>
            <p className="text-[15px] text-muted-foreground mt-2 max-w-[480px]">
              Five tracks, all free. Community-maintained questions designed to
              mirror the real exams.
            </p>
          </div>
          <Link
            href="/practice-tests"
            className="inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            View all tests →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <Link key={cert.id} href={`/practice-tests/${cert.id}`} className="no-underline">
              <Card className="transition-all hover:border-primary hover:shadow-[0_0_0_3px_hsl(222,100%,95%)] hover:-translate-y-0.5 cursor-pointer bg-card">
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: cert.color }}>
                      {cert.icon}
                    </div>
                    <div className="font-display text-[17px] font-bold text-foreground tracking-tight">{cert.name}</div>
                  </div>
                  <div className="text-[13.5px] text-muted-foreground leading-relaxed">{cert.desc}</div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="font-display text-[22px] font-bold text-foreground flex items-baseline gap-1">
                      {cert.questions} <span className="text-[13px] font-normal text-muted-foreground">questions</span>
                    </div>
                    <Badge className="px-4 py-2 rounded-[9px] text-[13.5px] font-semibold">
                      Practice →
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
