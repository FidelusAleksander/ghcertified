# Phase 2 Functionality Inventory

Purpose: define additional capabilities planned after Phase 1.

## Scope

Phase 2 adds the following user-facing improvements:
1. End test early
2. Flag questions and review before final submission
3. Multilingual experience

## Functionality Inventory

| ID | Functionality | Expected Behavior | Minimum Acceptance Criteria |
|---|---|---|---|
| P2-01 | End practice test early | User can end an in-progress test at any time and immediately proceed to results. Any not-yet-answered question is treated as unanswered. | User can click an "End Test" action from anywhere in the test flow. Final results are generated without requiring all questions to be visited. Unanswered questions are counted as unanswered in scoring and reporting. |
| P2-02 | Flag and review questions before submit | User can mark questions for later review and open a review step before final submission. | User can toggle a flag on any question. Review step shows flagged questions and navigation to them. User can still submit without resolving all flags. Final submission works from review step. |
| P2-03 | Multilingual experience | User can switch between supported languages and continue using core site and practice test flows in the selected language. | Language switch is available in the UI. Core pages and practice test flows are accessible in each supported language without broken navigation. |

## User Flow Expectations

1. User starts a practice test.
2. During the test, user can answer questions, move between questions, and flag/unflag any question.
3. User can choose one of two completion paths:
- Submit after review flow.
- End test early and go directly to results.
4. Results screen reflects answered, unanswered, and final score.

## Rules

1. Flagging a question does not change whether it is answered/unanswered.
2. Unanswered questions contribute to final results as unanswered.
3. Ending early is irreversible for the current attempt (test is finalized once ended).
4. Flags are attempt-scoped (do not carry into a new attempt).

## Out of Scope for Phase 2

1. Partial credit logic changes.
2. Question-level notes or comments by users.
3. Saving and resuming attempts across sessions/devices.
