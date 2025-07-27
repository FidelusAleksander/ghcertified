---
question: "Has definido un trabajo matricial `example_matrix`. ¿Cómo puedes limitar la matriz para que ejecute un máximo de 2 trabajos a la vez?"
title: "Pregunta 036"
---


```yaml
  jobs:
    example_matrix:
      strategy:
        matrix:
          version: [10, 12, 14]
          os: [ubuntu-latest, windows-latest]
```
> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel
1. [x] Establecer `jobs.example_matrix.strategy.max-parallel` en 2
1. [ ] Establecer `jobs.example_matrix.strategy.concurrency` en 2
1. [ ] Usar la REST API de GitHub para verificar si la cantidad de trabajos es menor que 2
1. [ ] No es posible, una matriz siempre ejecutará todos los trabajos en paralelo si hay runners disponibles
