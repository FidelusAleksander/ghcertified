---
question: "¿Qué sintaxis de comando de flujo de trabajo establece correctamente una variable de entorno llamada 'API_VERSION' con el valor '2.1' para los pasos posteriores en un trabajo de GitHub Actions?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable"
---

- [x] `echo "API_VERSION=2.1" >> "$GITHUB_ENV"`
- [ ] `echo "API_VERSION=2.1" >> "$GITHUB_OUTPUT"`
- [ ] `export API_VERSION=2.1 >> "$GITHUB_ENV"`
- [ ] `set-env name=API_VERSION value=2.1`
