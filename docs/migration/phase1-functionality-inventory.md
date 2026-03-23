# Phase 1 Functionality Inventory

Purpose: capture current website functionality and define what should be preserved in Phase 1 of the rewrite.

## Step 1: Core Website Idea

This website is a certification preparation platform focused on helping users practice for GitHub certification exams through community-created questions.

At a product level, the core idea is:
1. Let users choose a certification type.
2. Let users take realistic, repeatable practice sessions from a question bank.
3. Give immediate feedback so users can learn by doing.
4. Help users identify gaps by repeating practice across many question sets.

Primary audience:
1. People preparing for GitHub certification exams.
2. Community contributors who want to submit and improve practice questions.

Core user value proposition:
1. Fast, practical exam preparation.
2. Multiple certification tracks in one place.
3. Community-driven question quality and continuous growth.

## Current Functionality Inventory

| ID | Functionality | Current Behavior | Minimum Acceptance Criteria (Phase 1) | Notes |
|---|---|---|---|---|
| F00 | Project purpose on first page | The first page explains what the project is, who it is for, and how it helps users prepare for certifications. | A new visitor can understand the purpose/value of the project within a few seconds, with a clear path to start practicing. | |
| F01 | Practice test catalog | Users can view available certification practice tests (for example: Foundations, Actions, Admin, Advanced Security, Copilot). | Users can discover all active test types from one page and start one with a single action. | |
| F02 | Adjustable practice length | Before starting a test, users can choose how many questions to practice. | Users can pick a valid number of questions and start the test with that exact count. | |
| F03 | Correct question scoping by test type | When a user starts a specific test type, only questions for that test type are included. | No cross-mixing of questions between certification types. | |
| F04 | Randomized question order | Question order changes between attempts to avoid memorizing sequence. | Starting the same test multiple times can produce different question order. | |
| F05 | Randomized answer option order | Answer options are presented in varying order between attempts. | Repeating a question can show options in different order. | |
| F06 | Interactive quiz answering | Users can select answers directly in the page and get immediate feedback. | Users can complete a full session without leaving the test flow. | |
| F07 | Supports single-choice and multi-select questions | Question set includes both one-answer and multiple-answer formats. | Both formats are fully usable and clearly understandable in the UI. | |
| F08 | Question library browsing | Users can browse question collections grouped by certification type and open individual questions. | Users can find and open any available question from the library page. | |
| F09 | Contribution call-to-action | Users are encouraged to contribute questions/community improvements. | Contribution CTA appears in key parts of the user journey. | |
| F10 | Technical content display | Questions can include technical notation and code-like formatting when needed. | Technical content such as code examples and technical notation is readable and correctly formatted in questions and test flows. | |
| F11 | Test availability control | Certain test types can be marked unavailable without removing them entirely. | Users see clear unavailable state and cannot start disabled tests. | |
