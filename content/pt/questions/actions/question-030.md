---
question: "Quando o job3 será executado?"
title: "Questão 030"
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
1. [x] o job3 será executado após o job1 e o job2 terem sido concluídos, independentemente de terem sido bem-sucedidos
1. [ ] Você não pode usar `if: ${{ always() }}` e `needs` juntos. O workflow falhará na inicialização.
1. [ ] o job3 será executado após o job1 e o job2 terem sido concluídos com sucesso
1. [ ] o job3 será executado após o job1 e o job2 terem falhado
