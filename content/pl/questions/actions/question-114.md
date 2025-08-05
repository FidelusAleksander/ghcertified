---
question: "Jak uzyskać dostęp do bieżących wartości zmiennych w macierzy w zadaniu w poniższym przykładzie:"
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
1. [x] odwołując się do zmiennych poprzez kontekst `matrix` za pomocą składni takiej jak `matrix.version` i `matrix.os`
1. [ ] używając składni `matrix.property`
1. [ ] używając słowa kluczowego `context` w konfiguracji zadania
1. [ ] uzyskując bezpośredni dostęp do zmiennych za pomocą
