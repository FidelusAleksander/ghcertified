---
question: "Ten kod uruchomi 6 różnych zadań równolegle, używając strategii macierzy. Czy możesz użyć strategii macierzy do równoległego przetwarzania całych workflow?"
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

1. [x] Tak
1. [ ] Nie
1. [ ] Tylko jeśli workflow znajdują się w tym samym repozytorium
1. [ ] Tylko z użyciem runnerów hostowanych samodzielnie
