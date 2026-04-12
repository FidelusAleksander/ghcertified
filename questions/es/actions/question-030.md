---
question: "¿Cuándo se ejecutará job3?"
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
- [x] job3 se ejecutará después de que job1 y job2 hayan completado, independientemente de si fueron exitosos
- [ ] No puedes usar `if: ${{ always() }}` y `needs` juntos. El workflow fallará al inicio.
- [ ] job3 se ejecutará después de que job1 y job2 se hayan completado exitosamente
- [ ] job3 se ejecutará después de que job1 y job2 hayan fallado
