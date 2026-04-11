"use client";

/**
 * Catalog page — choose a certification track and start practicing.
 *
 * "use client" because each card has a question count input (useState).
 * Cards show colored icon SVGs, description, inline controls.
 */

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const certifications = [
  { id: "actions", name: "GitHub Actions", questions: 127, color: "#1a6cff", desc: "Master CI/CD, workflow triggers, jobs, steps, secrets, and GitHub-hosted runners.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><polygon points="5 3 19 12 5 21 5 3"/></svg> },
  { id: "foundations", name: "GitHub Foundations", questions: 147, color: "#1cb87e", desc: "Core concepts, repositories, issues, pull requests, GitHub Flow, and Codespaces.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 13h4"/></svg> },
  { id: "advanced_security", name: "GitHub Advanced Security", questions: 116, color: "#7c3aed", desc: "Secret scanning, code scanning with CodeQL, security policies, and Dependabot alerts.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { id: "admin", name: "GitHub Administration", questions: 96, color: "#e8750a", desc: "Managing organizations, teams, permissions, billing, and enterprise-level GitHub.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg> },
  { id: "copilot", name: "GitHub Copilot", questions: 38, color: "#0f0f0f", desc: "AI pair programming, prompt engineering, Copilot features, and responsible use.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z"/><path d="M9 10h.01M15 10h.01M9.5 15a5 5 0 005 0"/></svg> },
];

export default function PracticeTestsPage() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-20">
      <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[1.2px] uppercase text-muted-foreground mb-4">
        Practice Tests
      </div>
      <div className="flex items-end justify-between mb-10 gap-4 flex-wrap">
        <div>
          <h2 className="font-display text-[clamp(26px,3vw,36px)] font-extrabold tracking-tight leading-[1.1] text-foreground">
            Choose a<br />certification track
          </h2>
          <p className="text-[15px] text-muted-foreground mt-2 max-w-[480px]">
            Set the number of questions you want, then jump in. Questions are
            randomized each session.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert) => (
          <Card key={cert.id} className="bg-card transition-all hover:border-primary hover:shadow-[0_0_0_3px_hsl(222,100%,95%)] hover:-translate-y-0.5">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: cert.color }}>
                  {cert.icon}
                </div>
                <div>
                  <div className="font-display text-[17px] font-bold text-foreground tracking-tight">{cert.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{cert.questions} questions available</div>
                </div>
              </div>
              <div className="text-[13.5px] text-muted-foreground leading-relaxed">{cert.desc}</div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-[12.5px] text-muted-foreground whitespace-nowrap">Practice with</span>
                  <Input
                    type="number"
                    className="w-16 px-2.5 py-1.5 h-auto text-sm font-semibold font-display text-center"
                    value={counts[cert.id] ?? 20}
                    min={1}
                    max={cert.questions}
                    onChange={(e) => setCounts({ ...counts, [cert.id]: Number(e.target.value) })}
                  />
                  <span className="text-[12.5px] text-muted-foreground whitespace-nowrap">questions</span>
                </div>
                <Link
                  href={`/practice-tests/${cert.id}?questions=${counts[cert.id] ?? 20}`}
                  className="inline-flex items-center rounded-[9px] bg-primary px-4 py-2 text-[13.5px] font-semibold text-primary-foreground whitespace-nowrap transition-colors hover:bg-primary/90"
                >
                  Start →
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Coming soon card */}
        <Card className="bg-card opacity-55 pointer-events-none">
          <CardContent className="p-6 flex flex-col gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-muted-foreground/30">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <div className="font-display text-[17px] font-bold text-foreground tracking-tight">More tracks coming</div>
            </div>
            <div className="text-[13.5px] text-muted-foreground leading-relaxed">
              New certification tracks are added as the community contributes questions.
            </div>
            <div className="flex items-center justify-between gap-3">
              <Badge variant="secondary" className="rounded-full text-xs font-semibold">⏳ Unavailable</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
