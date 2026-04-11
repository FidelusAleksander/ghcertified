import Link from "next/link";
import { CERT_CATALOG } from "@/lib/questions";

/**
 * Question Library page — browse questions grouped by certification type.
 * Covers F08 (question library browsing).
 *
 * Server Component — no interactivity needed here.
 */
export default function QuestionsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        Question Library
      </h1>
      <p className="mt-3 max-w-[55ch] text-muted-foreground">
        Browse all available questions organized by certification type.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CERT_CATALOG.map((cert) => (
          <Link
            key={cert.cert}
            href={`/questions/${cert.cert}`}
            className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-secondary/30"
          >
            <h2 className="font-heading text-lg font-bold tracking-tight group-hover:text-primary">
              {cert.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {cert.questionCount} questions
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
