---
question: "¿Cómo puedes asegurarte de que un flujo de trabajo llamado `Deploy Prod` siempre se ejecute como máximo una vez a la vez?"
title: "Pregunta 028"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency

1. [x] Usar `concurrency` a nivel del flujo de trabajo
```yaml
concurrency: ${{ github.workflow }}
```
1. [ ] Usar `queue` a nivel del flujo de trabajo
```yaml
queue: ${{ github.workflow }}
```
1. [ ] Usar `order` a nivel del flujo de trabajo
```yaml
order: ${{ github.workflow }}
```
1. [ ] Usar `parallel` a nivel del flujo de trabajo
```yaml
parallel: ${{ github.workflow }}
```
