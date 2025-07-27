---
question: "¿Cuándo se ejecutará job3?"
title: "Pregunta 030"
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
1. [x] job3 se ejecutará después de que job1 y job2 hayan finalizado, independientemente de si tuvieron éxito o no
1. [ ] No se puede usar `if: ${{ always() }}` y `needs` juntos. El flujo de trabajo fallará al iniciarse.
1. [ ] job3 se ejecutará después de que job1 y job2 se hayan completado con éxito
1. [ ] job3 se ejecutará después de que tanto job1 como job2 hayan fallado
