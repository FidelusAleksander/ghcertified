import Link from "next/link";

/**
 * Homepage — explains what the project is and points users to practice tests.
 * Covers F00 (project purpose) and F09 (contribution CTA).
 */
export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero */}
      <section className="py-24 sm:py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          Community-driven exam prep
        </p>
        <h1 className="mt-4 font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Prepare for GitHub
          <br />
          Certifications
        </h1>
        <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted-foreground">
          Realistic practice tests built by the community. Not question
          dumps&nbsp;— genuine questions for Actions, Admin, Advanced Security,
          Foundations, and Copilot exams.
        </p>
        <div className="mt-10 flex items-center gap-4">
          <Link
            href="/practice-tests"
            className="inline-flex h-11 items-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start Practicing
          </Link>
          <Link
            href="/questions"
            className="inline-flex h-11 items-center rounded-lg border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            Browse Questions
          </Link>
        </div>
      </section>

      {/* Community section (F09) */}
      <section className="border-t border-border/50 py-16">
        <h2 className="font-heading text-2xl font-bold tracking-tight">
          Built by the Community
        </h2>
        <p className="mt-4 max-w-[60ch] leading-relaxed text-muted-foreground">
          Every question is created by community contributors to help you
          prepare for{" "}
          <a
            href="https://learn.github.com/certifications"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:text-primary/80"
          >
            official GitHub Certifications
          </a>
          . This is <strong className="text-foreground">not</strong> a question
          dump from real exams.
        </p>
        <a
          href="https://github.com/FidelusAleksander/ghcertified/blob/master/CONTRIBUTING.md"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex h-10 items-center rounded-lg border border-border px-5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
        >
          Contribute a Question →
        </a>
      </section>
    </div>
  );
}
