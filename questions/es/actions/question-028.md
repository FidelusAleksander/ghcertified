---
question: "¿Cómo puedes asegurarte de que un flujo de trabajo llamado `Deploy Prod` siempre se ejecute como máximo uno a la vez?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency"
---

- [x] Usar `concurrency` a nivel de flujo de trabajo
```yaml
concurrency: ${{ github.workflow }}
```
- [ ] Usar `queue` a nivel de flujo de trabajo
```yaml
queue: ${{ github.workflow }}
```
- [ ] Usar `order` a nivel de flujo de trabajo
```yaml
order: ${{ github.workflow }}
```
- [ ] Usar `parallel` a nivel de flujo de trabajo
```yaml
parallel: ${{ github.workflow }}
```
