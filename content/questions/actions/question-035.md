---
question: "To prevent a job from failure when one of the steps fails You can include:"
archetype: "questions"
title: "Question 035"
draft: false
subject: []
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error
1. [x] `continue-on-error` flag in the failing step
```yaml
  steps:
      - uses: my-org/failing-action@v1
        continue-on-error: true
```
1. [ ] `ignore-error` flag in the failing step
```yaml
  steps:
      - uses: my-org/failing-action@v1
        ignore-error: true
```
1. [ ] `failure()` conditional in the failing step
```yaml
  steps:
      - uses: my-org/failing-action@v1
        if: failure()
```
1. [ ] `always()` conditional in the failing step
```yaml
  steps:
      - uses: my-org/failing-action@v1
        if: always()
```
