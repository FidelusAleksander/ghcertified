"use client";

/**
 * GitHub Stars Button — animated button with rolling counter, star particles,
 * and hover shimmer. Adapted from JolyUI's creative/github-star component.
 */

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

const OWNER = "FidelusAleksander";
const REPO = "ghcertified";

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
}

const StarIcon = ({
  className,
  filled,
}: {
  className?: string;
  filled?: boolean;
}) => (
  <svg
    viewBox="0 0 16 16"
    className={className}
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={filled ? 0 : 1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 1.5l1.85 4.1 4.65.55-3.5 3.15.95 4.6L8 11.7l-4 2.2.95-4.6-3.5-3.15 4.65-.55L8 1.5z" />
  </svg>
);

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={className} fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return num.toLocaleString();
}

function useGitHubStars() {
  const [stars, setStars] = React.useState<number>(0);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch(`https://api.github.com/repos/${OWNER}/${REPO}`)
      .then((r) => r.json())
      .then((data: { stargazers_count?: number }) => {
        if (data && typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return { stars, loading };
}

const AnimatedDigit = ({ digit }: { digit: string }) => {
  if (!/\d/.test(digit)) {
    return <span className="inline-block px-0.5">{digit}</span>;
  }

  const num = parseInt(digit, 10);

  return (
    <span className="relative inline-block h-[1em] w-[0.6em] overflow-hidden">
      <motion.span
        className="absolute top-0 left-0 flex w-full flex-col items-center"
        initial={{ y: 0 }}
        animate={{ y: `${-num * 10}%` }}
        transition={{ type: "spring", stiffness: 100, damping: 15, mass: 1 }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span key={n} className="flex h-[1em] items-center justify-center leading-none">
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
};

function RollingNumber({ value }: { value: number }) {
  const digits = formatNumber(value).split("");
  return (
    <div className="flex items-center">
      {digits.map((digit, i) => (
        <AnimatedDigit key={`${i}-${digit}`} digit={digit} />
      ))}
    </div>
  );
}

function StarParticles({ particles }: { particles: Particle[] }) {
  return (
    <AnimatePresence>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="pointer-events-none absolute"
          initial={{ opacity: 1, scale: particle.scale, x: 0, y: 0 }}
          animate={{
            opacity: 0,
            scale: 0,
            x: Math.cos(particle.angle) * 60,
            y: Math.sin(particle.angle) * 60,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          style={{ left: particle.x, top: particle.y }}
        >
          <StarIcon className="h-3 w-3 text-star" filled />
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

export function GitHubStarButton({ className = "" }: { className?: string }) {
  const { stars, loading } = useGitHubStars();
  const [localStars, setLocalStars] = React.useState(0);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isStarred, setIsStarred] = React.useState(false);
  const [particles, setParticles] = React.useState<Particle[]>([]);

  React.useEffect(() => {
    if (stars > 0) setLocalStars(stars);
  }, [stars]);

  const handleClick = (e: React.MouseEvent) => {
    if (!isStarred) {
      e.preventDefault();
      setIsStarred(true);
      setLocalStars((prev) => prev + 1);

      const newParticles: Particle[] = Array.from({ length: 12 }, (_, i) => ({
        id: Date.now() + i,
        x: 20,
        y: 20,
        angle: (Math.PI * 2 * i) / 12 + Math.random() * 0.3,
        scale: 0.4 + Math.random() * 0.6,
      }));
      setParticles(newParticles);
      setTimeout(() => setParticles([]), 800);
      setTimeout(() => {
        window.open(`https://github.com/${OWNER}/${REPO}`, "_blank");
      }, 600);
    }
  };

  if (loading && localStars === 0) {
    return (
      <div
        className={cn(
          "relative inline-flex animate-pulse items-center gap-3 rounded-xl border border-border bg-card px-4 py-2.5",
          className,
        )}
      >
        <div className="h-5 w-5 rounded-full bg-muted" />
        <div className="h-5 w-px bg-border" />
        <div className="h-5 w-20 rounded bg-muted" />
      </div>
    );
  }

  return (
    <motion.a
      href={`https://github.com/${OWNER}/${REPO}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative inline-flex items-center gap-3 rounded-xl px-4 py-2.5",
        "border border-border bg-card",
        "shadow-sm transition-all duration-300 hover:shadow-lg",
        "group cursor-pointer no-underline",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <GitHubIcon className="h-5 w-5 text-foreground transition-colors" />

      <div className="h-5 w-px bg-border" />

      <div className="relative flex items-center gap-2">
        <StarParticles particles={particles} />

        <motion.div
          className="relative"
          animate={{
            rotate: isHovered || isStarred ? [0, -15, 15, -10, 10, 0] : 0,
            scale: isHovered || isStarred ? 1.2 : 1,
          }}
          transition={{
            rotate: { duration: 0.5, ease: "easeInOut" },
            scale: { type: "spring", stiffness: 300, damping: 15 },
          }}
        >
          <StarIcon
            className={cn(
              "h-5 w-5 transition-colors duration-300",
              isHovered || isStarred ? "text-star" : "text-muted-foreground",
            )}
            filled={isHovered || isStarred}
          />
          <motion.div
            className="absolute inset-0 blur-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered || isStarred ? 0.8 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <StarIcon className="h-5 w-5 text-star-glow" filled />
          </motion.div>
        </motion.div>

        <div className="min-w-[3rem] font-mono font-semibold text-foreground text-sm tabular-nums">
          <RollingNumber value={localStars} />
        </div>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-star/10 to-transparent"
          animate={{ x: isHovered ? ["100%", "-100%"] : "100%" }}
          transition={{
            duration: 1.2,
            repeat: isHovered ? Infinity : 0,
            repeatDelay: 0.8,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.a>
  );
}
