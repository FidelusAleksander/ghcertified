---
question: "When will job3 run?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-not-requiring-successful-dependent-jobs"
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
- [x] job3 will run after job1 and job2 have completed, regardless of whether they were successful
- [ ] You cannot use `if: ${{ always() }}` and `needs` together. The workflow will fail on startup.
- [ ] job3 will run after job1 and job2 have been successfully completed
- [ ] job3 will run after both job1 and job2 have failed
