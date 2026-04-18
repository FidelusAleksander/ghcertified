---
description: "Design philosophy and component guidelines for UI development"
applyTo: "app/src/components/**/*,app/src/app/**/*.tsx"
---

# UI & Component Guidelines

## Design Philosophy
We use the **impeccable** skill to craft distinctive, production-grade interfaces that avoid generic AI aesthetics. Every component should feel polished, intentional, and visually cohesive.

## Component Strategy
- Use **shadcn/ui** (style: `base-nova`) as the foundation for all UI components.
- Install new shadcn components via `npx shadcn@latest add <component>` before building custom ones.
- Only create custom components for app-specific logic (e.g., Quiz, Navbar) that shadcn doesn't cover.
- Custom components live in `app/src/components/`, shadcn primitives in `app/src/components/ui/`.

## Icons
- **Lucide** (`lucide-react`) — default icon library for general UI icons via shadcn/ui.
- **GitHub Octicons** (`@primer/octicons-react`) — used for certification badge icons (see `app/src/lib/cert-meta.tsx`).
- When adding new icons, prefer Lucide unless the icon represents a GitHub-specific concept.

## Tech Stack
- **Next.js App Router** with TypeScript strict mode
- **Tailwind CSS v4** for styling
- Avoid hydration mismatches: defer `Math.random()` and other non-deterministic ops to `useEffect`, never in `useState`/`useMemo` initializers.

## Principles
- Composition over complexity — assemble from shadcn primitives.
- Accessible by default — use proper ARIA attributes and semantic HTML.
- Keep components small and focused on a single responsibility.
