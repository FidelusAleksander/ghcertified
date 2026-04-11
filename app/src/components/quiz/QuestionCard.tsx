"use client";

/**
 * QuestionCard — renders one question with its answer options.
 *
 * Responsible for displaying the question text, optional hint link,
 * and delegating answer rendering to AnswerOption.
 */

import { Question } from "@/types/quiz";
import { AnswerOption } from "./AnswerOption";

interface QuestionCardProps {
  question: Question;
  selectedAnswerIds: Set<string>;
  isSubmitted: boolean;
  onToggleAnswer: (answerId: string) => void;
}

export function QuestionCard({
  question,
  selectedAnswerIds,
  isSubmitted,
  onToggleAnswer,
}: QuestionCardProps) {
  return (
    <div className="space-y-6">
      {/* Question text */}
      <div>
        <h2 className="font-heading text-xl font-bold leading-snug tracking-tight">
          {question.question}
        </h2>
        {question.isMultiSelect && (
          <p className="mt-2 text-sm text-muted-foreground">
            Select all that apply
          </p>
        )}
      </div>

      {/* Answer options */}
      <div className="space-y-3">
        {question.answers.map((answer) => (
          <AnswerOption
            key={answer.id}
            id={answer.id}
            text={answer.text}
            isCorrect={answer.isCorrect}
            isSelected={selectedAnswerIds.has(answer.id)}
            isSubmitted={isSubmitted}
            isMultiSelect={question.isMultiSelect}
            onToggle={() => onToggleAnswer(answer.id)}
          />
        ))}
      </div>

      {/* Hint link — shown after submission */}
      {isSubmitted && question.hint && (
        <a
          href={question.hint}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm text-primary underline underline-offset-4 hover:text-primary/80"
        >
          📖 Learn more in the docs
        </a>
      )}
    </div>
  );
}
