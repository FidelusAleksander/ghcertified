---
title: "Question 035"
date: 2023-08-29T12:31:51+02:00
draft: false
subject: []
---

# To prevent a job from failure when one of the steps fails You can include:
> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error
1. [x] Add `continue-on-error` flag in the failing step
```yaml
  steps:
      - uses: my-org/failing-action@v1
        continue-on-error: true
```
1. [ ] Add `ignore-error` flag in the failing step
```yaml
  steps:
      - uses: my-org/failing-action@v1
        ignore-error: true
```
1. [ ] Add `failure()` conditional in the failing step
```yaml
  steps:
      - uses: my-org/failing-action@v1
        if: failure()
```
1. [ ] Add `always()` conditional in the failing step
```yaml
  steps:
      - uses: my-org/failing-action@v1
        if: always()
```
