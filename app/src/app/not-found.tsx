import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOCALE, localePath } from "@/lib/locales";

const HOME_HREF = localePath(DEFAULT_LOCALE, "/");

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[1.2px] uppercase text-muted-foreground mb-4">
          Page not found
        </div>
        <h1 className="font-display text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight text-foreground">
          404
        </h1>
        <p className="mt-3 text-[15px] text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-6 flex justify-center">
          <Button
            render={<Link href={HOME_HREF} />}
            nativeButton={false}
            className="h-auto rounded-[10px] px-5 py-3 text-[14px] font-semibold"
          >
            Go to homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
