---
question: "Para evitar a falha de um job quando uma das etapas falhar, você pode incluir:"
title: "Pergunta 035"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error
1. [x] flag `continue-on-error` na etapa que falhar
```yaml
  steps:
      - uses: my-org/failing-action@v1
        continue-on-error: true
```
1. [ ] flag `ignore-error` na etapa que falhar
```yaml
  steps:
      - uses: my-org/failing-action@v1
        ignore-error: true
```
1. [ ] condicional `failure()` na etapa que falhar
```yaml
  steps:
      - uses: my-org/failing-action@v1
        if: failure()
```
1. [ ] condicional `always()` na etapa
