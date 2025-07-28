---
question: "Este código ejecutará 6 trabajos diferentes en paralelo utilizando la estrategia de matriz. ¿Puedes usar la estrategia de matriz para paralelizar flujos de trabajo completos?"
title: "Pregunta 014"
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

1. [ ] No  
1. [x] Sí  
