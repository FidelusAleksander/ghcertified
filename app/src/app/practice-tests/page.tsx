import { CERT_CATALOG } from "@/lib/questions";
import { TestCatalogCard } from "@/components/TestCatalogCard";

/**
 * Practice Tests catalog page.
 * Lists all certification tracks as interactive cards.
 * Covers F01 (catalog), F02 (adjustable length), F11 (availability).
 *
 * This is a Server Component — no "use client" needed because
 * the interactive parts live in TestCatalogCard (a client component).
 */
export default function PracticeTestsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        Practice Tests
      </h1>
      <p className="mt-3 max-w-[55ch] text-muted-foreground">
        Choose a certification track and set how many questions you want to
        practice. Questions are randomized each attempt.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {CERT_CATALOG.map((cert) => (
          <TestCatalogCard key={cert.cert} cert={cert} />
        ))}
      </div>
    </div>
  );
}
