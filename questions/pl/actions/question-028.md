---
question: "Jak możesz zapewnić, że workflow o nazwie `Deploy Prod` zawsze działa najwyżej jeden na raz?"
title: "Pytanie 028"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency

1. [x] Użyj `concurrency` na poziomie workflow
```yaml
concurrency: ${{ github.workflow }}
```
1. [ ] Użyj `queue` na poziomie workflow
```yaml
queue: ${{ github.workflow }}
```
1. [ ] Użyj `order` na poziomie workflow
```yaml
order: ${{ github.workflow }}
```
1. [ ] Użyj `parallel` na poziomie workflow
```yaml
parallel: ${{ github.workflow }}
```
