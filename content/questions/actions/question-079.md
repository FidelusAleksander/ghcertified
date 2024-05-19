---
archetype: "questions"
title: "Question 079"
question: "On which commit and branch do scheduled workflows run in GitHub Actions?"
draft: false
---

> https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule

1. [ ] Scheduled workflows run on the specific commit on last modified branch.
   > incorrect, both specific commit and on last modified branch
1. [ ] Scheduled workflows run on the specific commit on the main branch.
   > incorrect, both specific commit and main branch
1. [x] Scheduled workflows run on the latest commit on the default or base branch.
1. [ ] Scheduled workflows run on the latest commit on the main branch.
   > latest commit is correct but the main branch is not
