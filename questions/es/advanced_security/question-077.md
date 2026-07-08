---
question: "¿Cuál es el método más sencillo para ejecutar un análisis de CodeQL concurrentemente para cada lenguaje en un repositorio multilenguaje utilizando GitHub Actions?"
documentation: https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options#changing-the-languages-that-are-analyzed
---

- [x] Creando una matriz de `languages` para el trabajo y luego referenciándola en el parámetro de entrada `languages` de la acción `github/codeql-action/init`
- [ ] Llamando a la acción `github/codeql-action/analyze` en pasos separados para cada lenguaje
- [ ] Creando un flujo de trabajo separado para cada lenguaje
- [ ] Definiendo el paralelismo en la acción `github/codeql-action/analyze`
