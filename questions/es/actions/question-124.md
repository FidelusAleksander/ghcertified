---
question: "Dada la siguiente configuración, ¿cuántos trabajos ejecutará GitHub Actions cuando se evalúe esta matriz?"
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

- [ ] 4 trabajos
- [x] 5 trabajos
- [ ] 6 trabajos
- [ ] 7 trabajos
- [ ] No se ejecutarán trabajos porque la sintaxis es inválida.
