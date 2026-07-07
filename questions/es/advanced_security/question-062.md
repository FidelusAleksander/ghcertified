---
question: "¿Cuál es el efecto de agregar la palabra clave `paths-ignore` a tu flujo de trabajo de GitHub Actions de escaneo de código?"
documentation: "https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options#avoiding-unnecessary-scans-of-pull-requests"
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
- [x] Evitar escaneos innecesarios cuando se cambian archivos que no son relevantes para el análisis.
- [ ] Indicar a CodeQL que omita todos los archivos `*.txt` y `*.md` del análisis.
- [ ] Impedir que el análisis de CodeQL se ejecute en solicitudes de extracción que cambien archivos con las extensiones especificadas.
- [ ] Los controles de solicitudes de extracción ignorarán cualquier vulnerabilidad de CodeQL que se encuentre en archivos `*.txt` y `*.md`.
