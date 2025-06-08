---
question: "Jak zapewnić, aby przepływ pracy o nazwie `Deploy Prod` zawsze działał najwyżej raz na raz?"
title: "Pytanie 028"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency

1. [x] Użyj `concurrency` na poziomie przepływu pracy
```yaml
concurrency: ${{ github.workflow }}
```
1. [ ] Użyj `queue` na poziomie przepływu pracy
```yaml
queue: ${{ github.workflow }}
```
1. [ ] Użyj `order` na poziomie przepływu pracy
```yaml
order: ${{ github.workflow }}
```
1. [ ] Użyj `parallel` na poziomie przepływu pracy
```yaml
parallel: ${{ github.workflow }}
```
