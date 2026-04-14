---
question: "Para evitar que um trabalho falhe quando uma das etapas falhar, você pode incluir:"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error"
---

- [x] Flag `continue-on-error` na etapa que está falhando
```yaml
steps:
    - uses: my-org/failing-action@v1
      continue-on-error: true
```
- [ ] Flag `ignore-error` na etapa que está falhando
```yaml
steps:
    - uses: my-org/failing-action@v1
      ignore-error: true
```
- [ ] Condicional `failure()` na etapa que está falhando
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: failure()
```
- [ ] Condicional `always()` na etapa que está falhando
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: always()
```
