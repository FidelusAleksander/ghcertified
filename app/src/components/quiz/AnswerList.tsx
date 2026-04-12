"use client";

import type { Question } from "@/types/quiz";
import { Info } from "lucide-react";
import { AnswerOption } from "@/components/quiz/AnswerOption";

export interface AnswerListLabels {
  answerGroup: string;
  answerOption: (index: number, text: string) => string;
  selectExactly: string;
  yourAnswer: string;
}

export interface AnswerListProps {
  question: Question;
  selectedIds: Set<string>;
  showResults: boolean;
  isDisabled: boolean;
  showSelectionHint?: boolean;
  dimUnselected?: boolean;
  onToggle: (id: string) => void;
  labels: AnswerListLabels;
}

export function AnswerList({
  question,
  selectedIds,
  showResults,
  isDisabled,
  showSelectionHint = true,
  dimUnselected = false,
  onToggle,
  labels,
}: AnswerListProps) {
  return (
    <>
      {question.isMultiSelect && showSelectionHint && (
        <div className="flex items-center gap-2 text-[13.5px] font-semibold text-primary mb-4 bg-primary-soft border border-primary/20 rounded-lg px-3.5 py-2">
          <Info className="size-4 flex-shrink-0" />
          {labels.selectExactly}
        </div>
      )}

      <div
        role={question.isMultiSelect ? "group" : "radiogroup"}
        aria-label={labels.answerGroup}
        className="flex flex-col gap-2.5"
      >
        {question.answers.map((answer, idx) => (
          <AnswerOption
            key={answer.id}
            answer={answer}
            index={idx}
            isMultiSelect={question.isMultiSelect}
            isSelected={selectedIds.has(answer.id)}
            showResults={showResults}
            isDisabled={isDisabled}
            dimUnselected={dimUnselected}
            onSelect={onToggle}
            answerOptionLabel={labels.answerOption(idx + 1, answer.text)}
            yourAnswerLabel={labels.yourAnswer}
          />
        ))}
      </div>
    </>
  );
}
