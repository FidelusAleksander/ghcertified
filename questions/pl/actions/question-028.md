---
question: "Jak można upewnić się, że przepływ pracy o nazwie `Deploy Prod` zawsze działa najwyżej jeden na raz?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency"
---

- [x] Użyj `concurrency` na poziomie przepływu pracy
```yaml
concurrency: ${{ github.workflow }}
```
- [ ] Użyj `queue` na poziomie przepływu pracy
```yaml
queue: ${{ github.workflow }}
```
- [ ] Użyj `order` na poziomie przepływu pracy
```yaml
order: ${{ github.workflow }}
```
- [ ] Użyj `parallel` na poziomie przepływu pracy
```yaml
parallel: ${{ github.workflow }}
```
