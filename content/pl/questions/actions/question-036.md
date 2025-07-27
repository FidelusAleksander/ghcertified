---
question: "Zdefiniowałeś zadanie macierzowe `example_matrix`. Jak można ograniczyć macierz do uruchamiania maksymalnie 2 zadań jednocześnie?"
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
1. [ ] Użyj REST API GitHub w celu sprawdzenia, czy liczba zadań jest mniejsza niż 2
1. [ ] To niemożliwe, macierz zawsze uruchomi wszystkie zadania równolegle, jeśli dostępne są runnery
