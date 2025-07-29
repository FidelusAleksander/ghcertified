---
question: "Para evitar que um job falhe quando uma das etapas falhar, você pode incluir:"
title: "Questão 035"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error
1. [x] Flag `continue-on-error` na etapa com falha
```yaml
  steps:
      - uses: my-org/failing-action@v1
        continue-on-error: true
```
1. [ ] Flag `ignore-error` na etapa com falha
```yaml
  steps:
      - uses: my-org/failing-action@v1
        ignore-error: true
```
1. [ ] Condicional `failure()` na etapa com falha
```yaml
  steps:
      - uses: my-org/failing-action@v1
        if: failure()
```
1. [ ] Condicional `always()` na etapa com falha
```yaml
  steps:
      - uses: my-org/failing-action@v1
        if: always()
```
