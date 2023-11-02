---
archetype: "questions"
title: "Question 043"
draft: false
subject: []
---

# If a workflow runs on a `feature-a` branch, can it restore `caches` created in the default `main` branch?

> https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#restrictions-for-accessing-a-cache
1. [x] Yes, all branches can restore caches created on the default branch
1. [ ] Yes, all caches can be accessed by workflows on any branch within the same repository
1. [ ] No, caches can only be restored from the same branch
1. [ ] Yes but only if no files were changed on `feature-a` branch
