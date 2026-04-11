"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Clock, Shield, Users, Bot } from "lucide-react";

interface CertData {
  id: string;
  name: string;
  questions: number;
}

const CERT_META: Record<string, { colorClass: string; desc: string; icon: React.ReactNode }> = {
  actions: { colorClass: "bg-cert-actions", desc: "Master CI/CD, workflow triggers, jobs, steps, secrets, and GitHub-hosted runners.", icon: <Play className="text-primary-foreground" /> },
  foundations: { colorClass: "bg-cert-foundations", desc: "Core concepts, repositories, issues, pull requests, GitHub Flow, and Codespaces.", icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary-foreground"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 13h4"/></svg> },
  advanced_security: { colorClass: "bg-cert-advanced-security", desc: "Secret scanning, code scanning with CodeQL, security policies, and Dependabot alerts.", icon: <Shield className="text-primary-foreground" /> },
  admin: { colorClass: "bg-cert-admin", desc: "Managing organizations, teams, permissions, billing, and enterprise-level GitHub.", icon: <Users className="text-primary-foreground" /> },
  copilot: { colorClass: "bg-cert-copilot", desc: "AI pair programming, prompt engineering, Copilot features, and responsible use.", icon: <Bot className="text-primary-foreground" /> },
};

interface Props {
  certs: CertData[];
}

export function CatalogCards({ certs }: Props) {
  const [counts, setCounts] = useState<Record<string, number>>({});

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {certs.map((cert) => {
        const meta = CERT_META[cert.id];
        if (!meta) return null;

        return (
          <Card key={cert.id} className="bg-card transition-all hover:border-primary hover:shadow-[0_0_0_3px_hsl(var(--primary-soft))] hover:-translate-y-0.5">
            <CardContent className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3.5">
                <div className={`size-12 rounded-xl flex items-center justify-center flex-shrink-0 ${meta.colorClass}`}>
                  {meta.icon}
                </div>
                <div>
                  <div className="font-display text-[17px] font-bold text-foreground tracking-tight">{cert.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{cert.questions} questions available</div>
                </div>
              </div>
              <div className="text-[13.5px] text-muted-foreground leading-relaxed">{meta.desc}</div>
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
                <Button
                  render={<Link href={`/practice-tests/${cert.id}?questions=${counts[cert.id] ?? 20}`} />}
                  nativeButton={false}
                  className="rounded-[9px] text-[13.5px] font-semibold whitespace-nowrap"
                >
                  Start →
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}

      {/* Coming soon card */}
      <Card className="bg-card opacity-55 pointer-events-none">
        <CardContent className="p-6 flex flex-col gap-4">
          <div className="flex items-center gap-3.5">
            <div className="size-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-muted-foreground/30">
              <Clock className="text-primary-foreground" />
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
  );
}
