---
question: "Kiedy uruchomi się job3?"
title: "Pytanie 030"
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
1. [x] job3 uruchomi się po zakończeniu job1 i job2, niezależnie od tego, czy zakończyły się sukcesem
1. [ ] Nie można używać `if: ${{ always() }}` i `needs` razem. Workflow zakończy się błędem na starcie.
1. [ ] job3 uruchomi się po pomyślnym zakończeniu job1 i job2
1. [ ] job3 uruch
