---
question: "If a workflow runs on a `feature-a` branch, can it restore `caches` created in the default `main` branch?"
documentation: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#restrictions-for-accessing-a-cache"
---

- [x] Yes, all branches can restore caches created on the default branch
- [ ] Yes, all caches can be accessed by workflows on any branch within the same repository
- [ ] No, caches can only be restored from the same branch
- [ ] Yes but only if no files were changed on `feature-a` branch
