---
question: "Para evitar que un trabajo falle cuando uno de los pasos falla, puedes incluir:"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error"
---

- [x] La bandera `continue-on-error` en el paso con error
```yaml
steps:
    - uses: my-org/failing-action@v1
      continue-on-error: true
```
- [ ] La bandera `ignore-error` en el paso con error
```yaml
steps:
    - uses: my-org/failing-action@v1
      ignore-error: true
```
- [ ] La condicional `failure()` en el paso con error
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: failure()
```
- [ ] La condicional `always()` en el paso con error
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: always()
```
