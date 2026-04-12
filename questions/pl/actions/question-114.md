---
question: "Jak można uzyskać dostęp do bieżących wartości zmiennych w macierzy w ramach zadania w poniższym przykładzie:"
documentation: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy"
---

```yaml
jobs:
    example_matrix:
        strategy:
            matrix:
                version: [10, 12, 14]
                os: [ubuntu-latest, windows-latest]
```
- [x] odwołując się do zmiennych poprzez kontekst `matrix` za pomocą składni takiej jak `matrix.version` i `matrix.os`
- [ ] używając składni `matrix.property`
- [ ] używając słowa kluczowego `context` w konfiguracji zadania
- [ ] uzyskując dostęp bezpośrednio do zmiennych za pomocą składni `version` i `os`
