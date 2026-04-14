---
question: "Quando o job3 será executado?"
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
- [x] job3 será executado após job1 e job2 terem sido concluídos, independentemente de terem sido bem-sucedidos
- [ ] Você não pode usar `if: ${{ always() }}` e `needs` juntos. O workflow falhará na inicialização.
- [ ] job3 será executado após job1 e job2 terem sido concluídos com sucesso
- [ ] job3 será executado após job1 e job2 terem falhado
