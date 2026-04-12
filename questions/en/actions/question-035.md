---
question: "To prevent a job from failure when one of the steps fails you can include:"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error"
---

- [x] `continue-on-error` flag in the failing step
```yaml
steps:
    - uses: my-org/failing-action@v1
      continue-on-error: true
```
- [ ] `ignore-error` flag in the failing step
```yaml
steps:
    - uses: my-org/failing-action@v1
      ignore-error: true
```
- [ ] `failure()` conditional in the failing step
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: failure()
```
- [ ] `always()` conditional in the failing step
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: always()
```
