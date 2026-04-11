---
title: "Pregunta 078"
question: "¿Cómo puedes usar un archivo de configuración personalizado de CodeQL en un flujo de trabajo de GitHub Actions?"
---


> https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-a-custom-configuration-file
1. [x] Proporcionando explícitamente la ruta del archivo de configuración en el parámetro de entrada `config-file` de la acción `github/codeql-action/init`
1. [ ] Almacenando la configuración en el archivo `.github/codeql/config-config.yml`. La acción `github/codeql-action/init` detectará automáticamente el archivo y lo usará
1. [ ] Subiendo ese archivo en la sección de Code Scanning de la pestaña Security en el repositorio
1. [ ] Almacenando la configuración en el archivo `.github/workflows/codeql-analysis.yml`. La acción `github/codeql-action/init` detectará automáticamente el archivo y lo usará
