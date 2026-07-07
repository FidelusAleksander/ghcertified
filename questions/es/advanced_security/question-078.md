---
question: "¿Cómo puedes usar un archivo de configuración personalizado de CodeQL en un flujo de trabajo de GitHub Actions?"
documentation: "https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options#using-a-custom-configuration-file"
---

- [x] Proporcionando explícitamente la ruta del archivo de configuración en el parámetro de entrada `config-file` de la acción `github/codeql-action/init`
- [ ] Almacenar la configuración en el archivo `.github/codeql/config-config.yml`. La acción `github/codeql-action/init` detectará automáticamente el archivo y lo usará
- [ ] Subiendo ese archivo en la sección de Code Scanning de la pestaña Security en el repositorio
- [ ] Almacenar la configuración en el archivo `.github/workflows/codeql-analysis.yml`. La acción `github/codeql-action/init` detectará automáticamente el archivo y lo usará
