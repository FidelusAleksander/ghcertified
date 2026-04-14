---
question: "Kiedy uruchomi się job3?"
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
- [x] job3 uruchomi się po zakończeniu job1 i job2, niezależnie od tego, czy zakończyły się sukcesem
- [ ] Nie możesz używać `if: ${{ always() }}` razem z `needs`. Workflow zakończy się błędem podczas uruchamiania.
- [ ] job3 uruchomi się po pomyślnym zakończeniu job1 i job2
- [ ] job3 uruchomi się po tym, jak zarówno job1, jak i job2 zakończą się błędem
