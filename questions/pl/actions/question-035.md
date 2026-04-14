---
question: "Aby zapobiec awarii zadania, gdy jeden z kroków zawodzi, możesz użyć:"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error"
---

- [x] flagi `continue-on-error` w zawodzącym kroku
```yaml
steps:
    - uses: my-org/failing-action@v1
      continue-on-error: true
```
- [ ] flagi `ignore-error` w zawodzącym kroku
```yaml
steps:
    - uses: my-org/failing-action@v1
      ignore-error: true
```
- [ ] warunku `failure()` w zawodzącym kroku
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: failure()
```
- [ ] warunku `always()` w zawodzącym kroku
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: always()
```
