---
title: "Pregunta 077"
question: "¿Cuál es el método más simple para ejecutar un análisis de CodeQL de forma concurrente para cada lenguaje en un repositorio multi-lenguaje utilizando GitHub Actions?"
---

> https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed
1. [x] Creando una matriz de `languages` para el trabajo y luego referenciarla en el parámetro de entrada `languages` de la acción `github/codeql-action/init`
1. [ ] Llamando a la acción `github/codeql-action/analyze` en pasos separados para cada lenguaje
1. [ ] Creando un workflow separado para cada lenguaje
1. [ ] Definiendo el paralelismo en la acción `github/codeql-action/analyze`
