/**
 * Core types for the quiz application.
 *
 * These types define the shape of questions, answers, and quiz state.
 * They're used throughout the app — start here to understand the data model.
 */

/** The five GitHub certification tracks */
export type CertificationType =
  | "actions"
  | "admin"
  | "advanced_security"
  | "copilot"
  | "foundations";

/** A single answer option for a question */
export interface AnswerOption {
  id: string;
  text: string;
  isCorrect: boolean;
}

/** A single quiz question */
export interface Question {
  /** Unique identifier, e.g. "actions-001" */
  id: string;
  /** Which certification this question belongs to */
  cert: CertificationType;
  /** The question text */
  question: string;
  /** Available answer options */
  answers: AnswerOption[];
  /** Whether multiple answers can be correct */
  isMultiSelect: boolean;
  /** Optional URL to relevant documentation */
  hint?: string;
}

/** Metadata for a certification track (used on catalog cards) */
export interface CertInfo {
  cert: CertificationType;
  title: string;
  description: string;
  badge: string;
  questionCount: number;
  /** If true, users cannot start this test */
  disabled: boolean;
}

/** Configuration for starting a quiz session */
export interface QuizConfig {
  cert: CertificationType;
  /** How many questions the user wants to practice */
  questionCount: number;
}

/**
 * Runtime state of an active quiz.
 *
 * "use client" components use this to track progress through a quiz session.
 * The Quiz component manages this state — other components receive slices of it as props.
 */
export interface QuizState {
  /** The questions for this session (already shuffled) */
  questions: Question[];
  /** Index of the currently displayed question */
  currentIndex: number;
  /** Map of question ID → set of selected answer IDs */
  selectedAnswers: Record<string, Set<string>>;
  /** Whether the user has submitted (locked in) the current question */
  isSubmitted: boolean;
  /** Whether the entire quiz is finished */
  isComplete: boolean;
}
