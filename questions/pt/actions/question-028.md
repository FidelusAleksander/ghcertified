---
question: "Como você pode garantir que um workflow chamado `Deploy Prod` esteja sempre sendo executado no máximo um de cada vez?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency"
---

- [x] Use `concurrency` no nível do workflow
```yaml
concurrency: ${{ github.workflow }}
```
- [ ] Use `queue` no nível do workflow
```yaml
queue: ${{ github.workflow }}
```
- [ ] Use `order` no nível do workflow
```yaml
order: ${{ github.workflow }}
```
- [ ] Use `parallel` no nível do workflow
```yaml
parallel: ${{ github.workflow }}
```
