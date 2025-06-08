---
question: "Para evitar que um job falhe quando um dos steps falha, você pode incluir:"
title: "Pergunta 035"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error
1. [x] Flag `continue-on-error` no step que falha
```yaml
  steps:
      - uses: my-org/failing-action@v1
        continue-on-error: true
```
1. [ ] Flag `ignore-error` no step que falha
```yaml
  steps:
      - uses: my-org/failing-action@v1
        ignore-error: true
```
1. [ ] Condicional `failure()` no step que falha
```yaml
  steps:
      - uses: my-org/failing-action@v1
        if: failure()
```
1. [ ] Condicional `always()` no step que falha
```yaml
  steps:
      - uses: my-org/failing-action@v1
        if: always()
```
