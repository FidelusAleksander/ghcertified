---
question: "¿Cómo puedes acceder a los valores actuales de las variables en una matriz dentro de un trabajo en el siguiente ejemplo:"
documentation: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy"
---

```yaml
jobs:
    example_matrix:
        strategy:
            matrix:
                version: [10, 12, 14]
                os: [ubuntu-latest, windows-latest]
```
- [x] referenciar variables a través del contexto `matrix` con la sintaxis como `matrix.version` y `matrix.os`
- [ ] usando la sintaxis `matrix.property`
- [ ] usando la palabra clave `context` dentro de la configuración del trabajo
- [ ] accediendo a las variables directamente con la sintaxis `version` y `os`
