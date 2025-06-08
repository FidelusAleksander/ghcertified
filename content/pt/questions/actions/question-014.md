---
question: "Este código lançará 6 trabalhos diferentes em paralelo usando a estratégia de matriz. Você pode usar a estratégia de matriz para paralelizar fluxos de trabalho inteiros?"
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
> https://docs.github.com/pt/actions/using-workflows/reusing-workflows#using-a-matrix-strategy-with-a-reusable-workflow

1. [ ] Não  
1. [x] Sim
