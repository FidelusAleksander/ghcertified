---
question: "Como você pode garantir que um fluxo de trabalho chamado `Deploy Prod` esteja sempre executando no máximo um de cada vez?"
title: "Pergunta 028"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency

1. [x] Use `concurrency` no nível do fluxo de trabalho
```yaml
concurrency: ${{ github.workflow }}
```
1. [ ] Use `queue` no nível do fluxo de trabalho
```yaml
queue: ${{ github.workflow }}
```
1. [ ] Use `order` no nível do fluxo de trabalho
```yaml
order: ${{ github.workflow }}
```
1. [ ] Use `parallel` no nível do fluxo de trabalho
```yaml
parallel: ${{ github.workflow }}
```
