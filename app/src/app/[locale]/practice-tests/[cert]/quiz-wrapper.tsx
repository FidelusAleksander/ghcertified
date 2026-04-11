"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Quiz } from "@/components/quiz/Quiz";
import type { Question, CertificationType } from "@/types/quiz";

interface Props {
  questions: Question[];
  questionCount?: number;
  cert: CertificationType;
  certName: string;
}

function QuizWithParams({ questions, questionCount, cert, certName }: Props) {
  const searchParams = useSearchParams();
  const questionsParam = searchParams.get("questions");

  const count = questionCount
    ?? (questionsParam
      ? Math.min(Math.max(1, parseInt(questionsParam, 10)), questions.length)
      : questions.length);

  return (
    <Quiz
      questions={questions}
      questionCount={count}
      cert={cert}
      certName={certName}
    />
  );
}

export function QuizWrapper(props: Props) {
  return (
    <Suspense>
      <QuizWithParams {...props} />
    </Suspense>
  );
}
