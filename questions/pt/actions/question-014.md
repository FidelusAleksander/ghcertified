---
question: "Este código lançará 6 diferentes jobs em paralelo usando a estratégia de matriz. É possível usar a estratégia de matriz para paralelizar fluxos de trabalho inteiros?"
title: "Pergunta 014"
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

1. [x] Sim
1. [ ] Não
1. [ ] Apenas se os fluxos de trabalho estiverem no mesmo repositório
1. [ ] Apenas com runners autohospedados
