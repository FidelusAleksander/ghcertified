---
title: "Pregunta 062"
question: "¿Cuál es el efecto de agregar la palabra clave `paths-ignore` a tu flujo de trabajo de escaneo de código con GitHub Actions?"
---


```yaml
.github/workflows/codeql-analysis.yml

on:
  pull_request:
    branches: [main]
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'

```
> https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#avoiding-unnecessary-scans-of-pull-requests
1. [x] Evitar escaneos innecesarios cuando se cambian archivos que no son relevantes para el análisis.
1. [ ] Indica a CodeQL que omita todos los archivos `*.txt` y `*.md` del análisis.
1. [ ] Prevenir que el análisis de CodeQL se ejecute en solicitudes de extracción que cambien archivos con las extensiones especificadas.
1. [ ] Las verificaciones de solicitudes de extracción ignorarán cualquier vulnerabilidad de CodeQL encontrada en archivos `*.txt` y `*.md`.
