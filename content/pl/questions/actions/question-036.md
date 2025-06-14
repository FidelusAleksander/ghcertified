---
question: "Zdefiniowałeś zadanie macierzowe `example_matrix`. Jak ograniczyć macierz, aby uruchamiała maksymalnie 2 zadania jednocześnie?"
title: "Pytanie 036"
---


```yaml
  jobs:
    example_matrix:
      strategy:
        matrix:
          version: [10, 12, 14]
          os: [ubuntu-latest, windows-latest]
```
> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel
1. [x] Ustaw `jobs.example_matrix.strategy.max-parallel` na 2
1. [ ] Ustaw `jobs.example_matrix.strategy.concurrency` na 2
1. [ ] Użyj REST API GitHub, aby sprawdzić, czy liczba zadań jest mniejsza niż 2
1. [ ] To niemożliwe, macierz zawsze uruchamia wszystkie zadania jednocześnie, jeśli są dostępne runnery
