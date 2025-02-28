---
question: "Como você pode garantir que um workflow chamado `Deploy Prod` esteja sempre executando no máximo um de cada vez?"
archetype: "questions"
title: "Questão 028"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency

1. [x] Use `concurrency` no nível do workflow
```yaml
concurrency: ${{ github.workflow }}
```
1. [ ] Use `queue` no nível do workflow
```yaml
queue: ${{ github.workflow }}
```
1. [ ] Use `order` no nível do workflow
```yaml
order: ${{ github.workflow }}
```
1. [ ] Use `parallel` no nível do workflow
```yaml
parallel: ${{ github.workflow }}
```
