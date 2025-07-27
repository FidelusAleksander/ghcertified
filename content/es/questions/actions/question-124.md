---
question: "Dada la siguiente configuración, ¿cuántos trabajos ejecutará GitHub Actions cuando se evalúe esta matriz?"
title: "Pregunta 124"
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

1. [ ] 4 trabajos  
1. [x] 5 trabajos  
1. [ ] 6 trabajos  
1. [ ] 7 trabajos  
1. [ ] No se ejecutará ningún trabajo porque la sintaxis es inválida.
