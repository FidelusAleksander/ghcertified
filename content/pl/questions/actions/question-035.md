---
question: "Aby zapobiec niepowodzeniu zadania w przypadku, gdy jeden z kroków zawiedzie, można uwzględnić:"
title: "Pytanie 035"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error
1. [x] Flaga `continue-on-error` w zawiedzionym kroku
```yaml
  steps:
      - uses: my-org/failing-action@v1
        continue-on-error: true
```
1. [ ] Flaga `ignore-error` w zawiedzionym kroku
```yaml
  steps:
      - uses: my-org/failing-action@v1
        ignore-error: true
```
1. [ ] Warunek `failure()` w zawiedzionym kroku
```yaml
  steps:
      - uses: my-org/failing-action@v
