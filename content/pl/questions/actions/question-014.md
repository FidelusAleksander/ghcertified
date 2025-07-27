---
question: "Ten kod uruchomi 6 różnych zadań równolegle przy użyciu strategii macierzy. Czy można użyć strategii macierzy do równoległego wykonywania całych workflowów?"
title: "Pytanie 014"
---


```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
> https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-a-matrix-strategy-with-a-reusable-workflow

1. [ ] Nie  
1. [x] Tak  
