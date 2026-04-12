---
question: "Ten kod uruchomi 6 różnych zadań równolegle, wykorzystując strategię macierzy. Czy można użyć strategii macierzy do równoległego uruchamiania całych workflowów?"
documentation: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-a-matrix-strategy-with-a-reusable-workflow"
---

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

- [x] Tak
- [ ] Nie
- [ ] Tylko jeśli workflowy znajdują się w tym samym repozytorium
- [ ] Tylko z self-hosted runners
