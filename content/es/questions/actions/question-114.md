---
question: "¿Cómo puedes acceder a los valores actuales de las variables en una matriz dentro de un trabajo en el ejemplo a continuación:"
title: "Pregunta 114"
---

```yaml
jobs:
    example_matrix:
        strategy:
            matrix:
                version: [10, 12, 14]
                os: [ubuntu-latest, windows-latest]
```
> https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy
1. [x] referencia variables a través del contexto `matrix` con una sintaxis como `matrix.version` y `matrix.os`
1. [ ] usando la sintaxis `matrix.property`
1. [ ] usando la palabra clave `context` dentro de la configuración del trabajo
1. [ ] accediendo a las variables directamente con la sintaxis `version` y `os`
