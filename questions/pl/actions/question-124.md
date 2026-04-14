---
question: "Biorąc pod uwagę poniższą konfigurację, ile zadań uruchomi GitHub Actions, gdy ta macierz zostanie oceniona?"
documentation: "https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/running-variations-of-jobs-in-a-workflow#expanding-or-adding-matrix-configurations"
---

```yaml
strategy:
  matrix:
    os: [ubuntu-latest, windows-latest]
    node: [14, 16]
    include:
      - os: macos-latest
        node: 18
      - os: ubuntu-latest
        node: 14
```

- [ ] 4 zadania
- [x] 5 zadań
- [ ] 6 zadań
- [ ] 7 zadań
- [ ] Żadne zadanie nie zostanie uruchomione, ponieważ składnia jest nieprawidłowa.
