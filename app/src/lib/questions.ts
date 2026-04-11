/**
 * Placeholder question data for development.
 *
 * This file provides a small set of hardcoded questions so we can build
 * and test the UI without needing the real markdown content pipeline yet.
 * It will be replaced with actual content loading in a later step.
 */

import { Question, CertInfo, CertificationType } from "@/types/quiz";

/** Sample questions — 3 per certification type */
export const PLACEHOLDER_QUESTIONS: Question[] = [
  // --- Actions ---
  {
    id: "actions-001",
    cert: "actions",
    question:
      "Which GitHub Actions syntax correctly defines a job that runs on Ubuntu?",
    answers: [
      { id: "a1", text: "runs-on: ubuntu-latest", isCorrect: true },
      { id: "a2", text: "os: ubuntu-latest", isCorrect: false },
      { id: "a3", text: "platform: ubuntu-latest", isCorrect: false },
      { id: "a4", text: "environment: ubuntu-latest", isCorrect: false },
    ],
    isMultiSelect: false,
    hint: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idruns-on",
  },
  {
    id: "actions-002",
    cert: "actions",
    question: "What is the default shell used in GitHub Actions on Ubuntu?",
    answers: [
      { id: "a1", text: "bash", isCorrect: true },
      { id: "a2", text: "sh", isCorrect: false },
      { id: "a3", text: "zsh", isCorrect: false },
      { id: "a4", text: "powershell", isCorrect: false },
    ],
    isMultiSelect: false,
    hint: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepsshell",
  },
  {
    id: "actions-003",
    cert: "actions",
    question:
      "Which statements about GitHub Actions reusable workflows are true?",
    answers: [
      {
        id: "a1",
        text: "They are defined with `workflow_call` trigger",
        isCorrect: true,
      },
      {
        id: "a2",
        text: "They can accept input parameters",
        isCorrect: true,
      },
      {
        id: "a3",
        text: "They can only be used within the same repository",
        isCorrect: false,
      },
      {
        id: "a4",
        text: "They replace all composite actions",
        isCorrect: false,
      },
    ],
    isMultiSelect: true,
    hint: "https://docs.github.com/en/actions/using-workflows/reusing-workflows",
  },

  // --- Admin ---
  {
    id: "admin-001",
    cert: "admin",
    question:
      "Which repository permission level allows a user to push commits?",
    answers: [
      { id: "a1", text: "Write", isCorrect: true },
      { id: "a2", text: "Read", isCorrect: false },
      { id: "a3", text: "Triage", isCorrect: false },
      { id: "a4", text: "Guest", isCorrect: false },
    ],
    isMultiSelect: false,
    hint: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository",
  },
  {
    id: "admin-002",
    cert: "admin",
    question: "What does enabling branch protection rules allow you to do?",
    answers: [
      {
        id: "a1",
        text: "Require pull request reviews before merging",
        isCorrect: true,
      },
      {
        id: "a2",
        text: "Require status checks to pass before merging",
        isCorrect: true,
      },
      {
        id: "a3",
        text: "Automatically delete the repository after merging",
        isCorrect: false,
      },
      {
        id: "a4",
        text: "Prevent any user from viewing the branch",
        isCorrect: false,
      },
    ],
    isMultiSelect: true,
    hint: "https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-a-branch-protection-rule/about-protected-branches",
  },
  {
    id: "admin-003",
    cert: "admin",
    question:
      "Which GitHub feature allows you to define who must review changes to specific files?",
    answers: [
      { id: "a1", text: "CODEOWNERS file", isCorrect: true },
      { id: "a2", text: ".gitignore file", isCorrect: false },
      { id: "a3", text: "Branch protection rules", isCorrect: false },
      { id: "a4", text: "Repository topics", isCorrect: false },
    ],
    isMultiSelect: false,
    hint: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners",
  },

  // --- Advanced Security ---
  {
    id: "advsec-001",
    cert: "advanced_security",
    question:
      "Which GitHub Advanced Security feature scans for exposed secrets in your repository?",
    answers: [
      { id: "a1", text: "Secret scanning", isCorrect: true },
      { id: "a2", text: "Code scanning", isCorrect: false },
      { id: "a3", text: "Dependabot", isCorrect: false },
      { id: "a4", text: "Branch protection", isCorrect: false },
    ],
    isMultiSelect: false,
    hint: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",
  },
  {
    id: "advsec-002",
    cert: "advanced_security",
    question: "What analysis engine powers GitHub code scanning by default?",
    answers: [
      { id: "a1", text: "CodeQL", isCorrect: true },
      { id: "a2", text: "SonarQube", isCorrect: false },
      { id: "a3", text: "ESLint", isCorrect: false },
      { id: "a4", text: "Semgrep", isCorrect: false },
    ],
    isMultiSelect: false,
    hint: "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql",
  },
  {
    id: "advsec-003",
    cert: "advanced_security",
    question:
      "Which features are part of GitHub Advanced Security?",
    answers: [
      { id: "a1", text: "Secret scanning", isCorrect: true },
      { id: "a2", text: "Code scanning with CodeQL", isCorrect: true },
      { id: "a3", text: "GitHub Pages hosting", isCorrect: false },
      { id: "a4", text: "GitHub Actions minutes", isCorrect: false },
    ],
    isMultiSelect: true,
    hint: "https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security",
  },

  // --- Copilot ---
  {
    id: "copilot-001",
    cert: "copilot",
    question:
      "Which editor has first-class support for GitHub Copilot?",
    answers: [
      { id: "a1", text: "Visual Studio Code", isCorrect: true },
      { id: "a2", text: "Notepad++", isCorrect: false },
      { id: "a3", text: "Sublime Text", isCorrect: false },
      { id: "a4", text: "Emacs", isCorrect: false },
    ],
    isMultiSelect: false,
    hint: "https://docs.github.com/en/copilot/getting-started-with-github-copilot",
  },
  {
    id: "copilot-002",
    cert: "copilot",
    question:
      "What is the primary way GitHub Copilot generates suggestions?",
    answers: [
      {
        id: "a1",
        text: "By analyzing the current file context and comments",
        isCorrect: true,
      },
      {
        id: "a2",
        text: "By copying code from Stack Overflow",
        isCorrect: false,
      },
      {
        id: "a3",
        text: "By running the code and observing output",
        isCorrect: false,
      },
      {
        id: "a4",
        text: "By reading your Git commit history",
        isCorrect: false,
      },
    ],
    isMultiSelect: false,
  },
  {
    id: "copilot-003",
    cert: "copilot",
    question:
      "Which statements about GitHub Copilot are true?",
    answers: [
      {
        id: "a1",
        text: "It can suggest entire functions based on a comment",
        isCorrect: true,
      },
      {
        id: "a2",
        text: "It supports multiple programming languages",
        isCorrect: true,
      },
      {
        id: "a3",
        text: "It guarantees bug-free code",
        isCorrect: false,
      },
      {
        id: "a4",
        text: "It requires an internet connection to work",
        isCorrect: true,
      },
    ],
    isMultiSelect: true,
  },

  // --- Foundations ---
  {
    id: "foundations-001",
    cert: "foundations",
    question: "What is a GitHub pull request?",
    answers: [
      {
        id: "a1",
        text: "A way to propose changes and request review before merging",
        isCorrect: true,
      },
      {
        id: "a2",
        text: "A method to download a repository",
        isCorrect: false,
      },
      {
        id: "a3",
        text: "A tool for running CI/CD pipelines",
        isCorrect: false,
      },
      {
        id: "a4",
        text: "A way to delete branches",
        isCorrect: false,
      },
    ],
    isMultiSelect: false,
    hint: "https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",
  },
  {
    id: "foundations-002",
    cert: "foundations",
    question: "Which Git command creates a new branch?",
    answers: [
      { id: "a1", text: "git branch <name>", isCorrect: true },
      { id: "a2", text: "git new <name>", isCorrect: false },
      { id: "a3", text: "git create <name>", isCorrect: false },
      { id: "a4", text: "git fork <name>", isCorrect: false },
    ],
    isMultiSelect: false,
    hint: "https://docs.github.com/en/get-started/using-git/about-git#branches",
  },
  {
    id: "foundations-003",
    cert: "foundations",
    question: "Which of these are features of GitHub Issues?",
    answers: [
      { id: "a1", text: "Labels for categorization", isCorrect: true },
      { id: "a2", text: "Assignees for responsibility", isCorrect: true },
      {
        id: "a3",
        text: "Automatic code deployment",
        isCorrect: false,
      },
      {
        id: "a4",
        text: "Built-in code editor",
        isCorrect: false,
      },
    ],
    isMultiSelect: true,
    hint: "https://docs.github.com/en/issues/tracking-your-work-with-issues/about-issues",
  },
];

/** Get questions filtered by certification type */
export function getQuestionsByCert(cert: CertificationType): Question[] {
  return PLACEHOLDER_QUESTIONS.filter((q) => q.cert === cert);
}

/** Catalog metadata for each certification track */
export const CERT_CATALOG: CertInfo[] = [
  {
    cert: "foundations",
    title: "GitHub Foundations",
    description:
      "Free practice test for the GitHub Foundations Certification Exam.",
    badge: "/images/foundations_badge.png",
    questionCount: 147,
    disabled: false,
  },
  {
    cert: "actions",
    title: "GitHub Actions",
    description:
      "Free practice test for the GitHub Actions Certification Exam.",
    badge: "/images/actions_badge.png",
    questionCount: 127,
    disabled: false,
  },
  {
    cert: "admin",
    title: "GitHub Administration",
    description:
      "Free practice test for the GitHub Administration Certification Exam.",
    badge: "/images/admin_badge.png",
    questionCount: 96,
    disabled: false,
  },
  {
    cert: "advanced_security",
    title: "GitHub Advanced Security",
    description:
      "Free practice test for the GitHub Advanced Security Certification Exam.",
    badge: "/images/advanced_security_badge.png",
    questionCount: 116,
    disabled: false,
  },
  {
    cert: "copilot",
    title: "GitHub Copilot",
    description:
      "Free practice test for the GitHub Copilot Certification Exam.",
    badge: "/images/copilot_badge.png",
    questionCount: 38,
    disabled: false,
  },
];

/** Look up catalog info by cert type */
export function getCertInfo(cert: CertificationType): CertInfo | undefined {
  return CERT_CATALOG.find((c) => c.cert === cert);
}
