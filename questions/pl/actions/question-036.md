---
question: "Zdefiniowałeś zadanie macierzy `example_matrix`. Jak możesz ograniczyć macierz do uruchamiania maksymalnie 2 zadań jednocześnie?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel"
---

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
- [x] Ustaw `jobs.example_matrix.strategy.max-parallel` na 2
- [ ] Ustaw `jobs.example_matrix.strategy.concurrency` na 2
- [ ] Użyj REST API GitHub, aby sprawdzić, czy liczba zadań jest mniejsza niż 2
- [ ] To niemożliwe, macierz zawsze uruchomi wszystkie zadania równolegle, jeśli dostępne są runnery
