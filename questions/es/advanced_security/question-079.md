---
question: "¿Dónde puedes especificar las consultas de CodeQL para ejecutar en un flujo de trabajo de GitHub Actions?"
documentation: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#running-additional-queries"
---

- [x] En el parámetro de entrada `queries` de la acción `github/codeql-action/init`
- [x] En un archivo YAML de configuración de CodeQL
- [ ] En el parámetro de entrada `paths` de la acción `github/codeql-action/queries`
- [ ] En la sección de Code Scanning de la pestaña Seguridad en el repository
- [ ] En el campo `codeql` del archivo `.github/settings.yml`
