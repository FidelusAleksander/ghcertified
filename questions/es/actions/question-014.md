---
question: "Este código lanzará 6 trabajos diferentes en paralelo utilizando la estrategia de matriz. ¿Puedes usar la estrategia de matriz para paralelizar flujos de trabajo completos?"
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

- [x] Sí
- [ ] No
- [ ] Solo si los flujos de trabajo están en el mismo repository
- [ ] Solo con runners autoalojados
