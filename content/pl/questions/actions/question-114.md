---
question: "Jak uzyskać dostęp do aktualnych wartości zmiennych w macierzy w ramach zadania w poniższym przykładzie:"
title: "Pytanie 114"
---

```yaml
jobs:
    example_matrix:
        strategy:
            matrix:
                version: [10, 12, 14]
                os: [ubuntu-latest, windows-latest]
```
> https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy
1. [x] odwołując się do zmiennych za pomocą kontekstu `matrix` z użyciem składni, takiej jak `matrix.version` i `matrix.os`
1. [ ] używając składni `matrix.property`
1. [ ] używając słowa kluczowego `context` w konfiguracji zadania
1. [ ] uzyskując dostęp do zmiennych bezpośrednio za pomocą składni `version` i `os`
