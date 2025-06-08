---
question: "When will job3 run?"
title: "Question 030"
---

```yaml
  jobs:
    job1:
    job2:
      needs: job1
    job3:
      if: ${{ always() }}
      needs: [job1, job2]
```
> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-not-requiring-successful-dependent-jobs
1. [x] job3 will run after job1 and job2 have completed, regardless of whether they were successful
1. [ ] You cannot use `if: ${{ always() }}` and `needs` together. The workflow will fail on startup.
1. [ ] job3 will run after job1 and job2 have been successfully completed
1. [ ] job3 will run after both job1 and job2 have failed
