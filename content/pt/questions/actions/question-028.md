---
question: "Como garantir que um workflow chamado `Deploy Prod` esteja sempre executando no máximo uma instância por vez?"
title: "Pergunta 028"
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
