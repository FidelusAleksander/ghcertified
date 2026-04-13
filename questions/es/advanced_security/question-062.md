---
question: "¿Cuál es el efecto de añadir la palabra clave `paths-ignore` a tu flujo de trabajo de acciones de GitHub para el análisis de código?"
documentation: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#avoiding-unnecessary-scans-of-pull-requests"
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
- [x] Evitar análisis innecesarios cuando se cambian archivos que no son relevantes para el análisis.
- [ ] Indica a CodeQL que omita todos los archivos `*.txt` y `*.md` del análisis. 
- [ ] Evitar que el análisis de CodeQL se ejecute en solicitudes de extracción que modifiquen archivos con las extensiones especificadas.
- [ ] Las comprobaciones de solicitudes de extracción ignorarán cualquier vulnerabilidad de CodeQL que se encuentre en los archivos `*.txt` y `*.md`.
