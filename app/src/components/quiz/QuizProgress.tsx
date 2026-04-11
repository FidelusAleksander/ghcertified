/**
 * QuizProgress — shows "Question X of Y" with a progress bar.
 * Pure presentational component, no client state needed but parent is client.
 */

interface QuizProgressProps {
  current: number;
  total: number;
}

export function QuizProgress({ current, total }: QuizProgressProps) {
  const pct = ((current + 1) / total) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium tabular-nums">
          Question {current + 1} of {total}
        </span>
        <span className="text-muted-foreground tabular-nums">
          {Math.round(pct)}%
        </span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
