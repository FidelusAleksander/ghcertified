---
question: "Para evitar que un trabajo falle cuando uno de los pasos falla, puedes incluir:"
title: "Pregunta 035"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error
1. [x] La bandera `continue-on-error` en el paso que falla
```yaml
  steps:
      - uses: my-org/failing-action@v1
        continue-on-error: true
```
1. [ ] La bandera `ignore-error` en el paso que falla
```yaml
  steps:
      - uses: my-org/failing-action@v1
        ignore-error: true
```
1. [ ] La condicional `failure()` en el paso que falla
```yaml
  steps:
      - uses: my-org/failing-action@v1
        if: failure()
```
1. [ ] La condicional `always()` en el paso que falla
```yaml
  steps:
      - uses: my-org/failing-action@v1
        if: always()
```
