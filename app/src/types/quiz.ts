/**
 * Core types for the quiz application.
 *
 * Domain types (Question, CertificationType, CertInfo) live in lib/questions.ts.
 * App-only runtime types are defined here.
 */

export type {
  Question,
  CertificationType,
  CertInfo,
} from "@/lib/questions";

export type AnswerOption = {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
};

export interface QuizState {
  questions: import("@/lib/questions").Question[];
  currentIndex: number;
  selectedAnswers: Record<string, Set<string>>;
  isSubmitted: boolean;
  isComplete: boolean;
}
