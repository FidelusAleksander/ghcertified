---
question: "Aby zapobiec niepowodzeniu zadania, gdy jeden z kroków zawiedzie, możesz użyć:"
title: "Pytanie 035"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error
1. [x] flagi `continue-on-error` w zawodzącym kroku
```yaml
  steps:
      - uses: my-org/failing-action@v1
        continue-on-error: true
```
1. [ ] flagi `ignore-error` w zawodzącym kroku
```yaml
  steps:
      - uses: my-org/failing-action@v1
        ignore-error: true
```
1. [ ] warunku `failure()` w zawodzącym kroku
```yaml
  steps:
      - uses: my-org/failing-action@v1
        if: failure()
```
1. [ ] warunku `always()` w zawodzącym kroku
```yaml
  steps:
      - uses: my-org/failing-action@v1
        if: always()
```
