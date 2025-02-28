---
question: "Para evitar que um job falhe quando um dos passos falha, você pode incluir:"
archetype: "questions"
title: "Questão 035"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error
1. [x] Flag `continue-on-error` no passo que está falhando
```yaml
  steps:
      - uses: my-org/failing-action@v1
        continue-on-error: true
```
1. [ ] Flag `ignore-error` no passo que está falhando
```yaml
  steps:
      - uses: my-org/failing-action@v1
        ignore-error: true
```
1. [ ] Condicional `failure()` no passo que está falhando
```yaml
  steps:
      - uses: my-org/failing-action@v1
        if: failure()
```
1. [ ] Condicional `always()` no passo que está falhando
```yaml
  steps:
      - uses: my-org/failing-action@v1
        if: always()
```
