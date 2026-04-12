---
question: "Para evitar que um job falhe quando um dos steps falhar, você pode incluir:"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error"
---

- [x] Flag `continue-on-error` no step que falhou
```yaml
steps:
    - uses: my-org/failing-action@v1
      continue-on-error: true
```
- [ ] Flag `ignore-error` no step que falhou
```yaml
steps:
    - uses: my-org/failing-action@v1
      ignore-error: true
```
- [ ] Condicional `failure()` no step que falhou
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: failure()
```
- [ ] Condicional `always()` no step que falhou
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: always()
```
