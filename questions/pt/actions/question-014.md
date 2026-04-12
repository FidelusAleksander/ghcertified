---
question: "Este código executará 6 jobs diferentes em paralelo usando a estratégia de matriz. Você pode usar a estratégia de matriz para paralelizar fluxos de trabalho inteiros?"
documentation: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-a-matrix-strategy-with-a-reusable-workflow"
---

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

- [x] Sim
- [ ] Não
- [ ] Somente se os fluxos de trabalho estiverem no mesmo repositório
- [ ] Somente com runners hospedados por conta própria
