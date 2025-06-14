---
question: "Aby zapobiec awarii zadania, gdy jeden z kroków zawodzi, można użyć:"
title: "Pytanie 035"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error
1. [x] Flagi `continue-on-error` w kroku, który zawodzi
```yaml
  steps:
      - uses: my-org/failing-action@v1
        continue-on-error: true
```
1. [ ] Flagi `ignore-error` w kroku, który zawodzi
```yaml
  steps:
      - uses: my-org/failing-action@v1
        ignore-error: true
```
1. [ ] Warunku `failure()` w kroku, który zawodzi
```yaml
  steps:
      - uses: my-org/failing-action@v1
        if: failure()
```
1. [ ] Warunku `always()` w kroku, który zawodzi
```yaml
  steps:
      - uses: my-org/failing-action@v1
        if: always()
```
