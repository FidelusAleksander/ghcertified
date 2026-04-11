"use client";

import { Quiz } from "@/components/quiz/Quiz";
import type { Question, CertificationType } from "@/types/quiz";

interface Props {
  questions: Question[];
  questionCount: number;
  cert: CertificationType;
  certName: string;
}

export function QuizWrapper({ questions, questionCount, cert, certName }: Props) {
  return (
    <Quiz
      questions={questions}
      questionCount={questionCount}
      cert={cert}
      certName={certName}
    />
  );
}
