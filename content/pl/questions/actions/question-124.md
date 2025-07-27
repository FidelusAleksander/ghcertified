---
question: "Biorąc pod uwagę następującą konfigurację, ile zadań uruchomi GitHub Actions, gdy ten matryca zostanie oceniona?"
title: "Pytanie 124"
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

> https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/running-variations-of-jobs-in-a-workflow#expanding-or-adding-matrix-configurations

1. [ ] 4 zadania
1. [x] 5 zadań
1. [ ] 6 zadań
1. [ ] 7 zadań
1. [ ] Żadne zadanie nie zostanie uruchomione, ponieważ składnia jest nieprawidłowa.
