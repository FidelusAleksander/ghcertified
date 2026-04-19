import type { ReactNode } from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbSegment {
  label: string;
  /** If provided, renders as a link. Last item should omit href. */
  href?: string;
}

interface PageBreadcrumbProps {
  items: BreadcrumbSegment[];
  className?: string;
}

/**
 * Shared breadcrumb nav used across practice-test, question, and challenge pages.
 * Wraps shadcn Breadcrumb with consistent styling and Next.js Link integration.
 */
export function PageBreadcrumb({ items, className }: PageBreadcrumbProps) {
  const nodes: ReactNode[] = [];

  items.forEach((item, i) => {
    const isLast = i === items.length - 1;

    if (i > 0) {
      nodes.push(<BreadcrumbSeparator key={`sep-${i}`}>›</BreadcrumbSeparator>);
    }

    nodes.push(
      <BreadcrumbItem key={item.label}>
        {item.href && !isLast ? (
          <BreadcrumbLink
            render={<Link href={item.href} />}
            className="text-primary no-underline hover:underline hover:text-primary"
          >
            {item.label}
          </BreadcrumbLink>
        ) : (
          <BreadcrumbPage className="font-normal text-muted-foreground">
            {item.label}
          </BreadcrumbPage>
        )}
      </BreadcrumbItem>,
    );
  });

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList className="text-[13px] gap-2">
        {nodes}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
