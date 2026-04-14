---
question: "Como você pode garantir que um fluxo de trabalho chamado `Deploy Prod` esteja sempre sendo executado no máximo uma vez por vez?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency"
---

- [x] Use `concurrency` no nível do fluxo de trabalho
```yaml
concurrency: ${{ github.workflow }}
```
- [ ] Use `queue` no nível do fluxo de trabalho
```yaml
queue: ${{ github.workflow }}
```
- [ ] Use `order` no nível do fluxo de trabalho
```yaml
order: ${{ github.workflow }}
```
- [ ] Use `parallel` no nível do fluxo de trabalho
```yaml
parallel: ${{ github.workflow }}
```
