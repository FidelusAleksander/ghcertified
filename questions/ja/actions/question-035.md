---
question: "ジョブの失敗を防ぐために、あるステップが失敗した際には以下を含めることができます:"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error"
---

- [x] 失敗したステップに`continue-on-error`フラグを含める
```yaml
steps:
    - uses: my-org/failing-action@v1
      continue-on-error: true
```
- [ ] 失敗したステップに`ignore-error`フラグを含める
```yaml
steps:
    - uses: my-org/failing-action@v1
      ignore-error: true
```
- [ ] 失敗したステップに`failure()`条件を含める
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: failure()
```
- [ ] 失敗したステップに`always()`条件を含める
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: always()
```
