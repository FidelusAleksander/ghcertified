---
question: "Este flujo de trabajo se ejecutará en todos los pull requests donde:"
title: "Pregunta 018"
---

```yaml
on:
  pull_request:
    branches:
      - 'release/**'
      - '!release/**-alpha'
```
> https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#example-including-and-excluding-branches
1. [x] el nombre de la rama de destino comienza con `release` pero no termina con `-alpha`
1. [ ] el nombre de la rama de destino comienza con `release`
1. [ ] el nombre de la rama de origen comienza con `release` pero no termina con `-alpha`
1. [ ] el nombre de la rama de origen comienza con `release`
