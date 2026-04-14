---
question: "Qual sintaxe de comando de fluxo de trabalho define corretamente uma variável de ambiente chamada 'API_VERSION' com o valor '2.1' para etapas subsequentes em um trabalho do GitHub Actions?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable"
---

- [x] `echo "API_VERSION=2.1" >> "$GITHUB_ENV"`
- [ ] `echo "API_VERSION=2.1" >> "$GITHUB_OUTPUT"`
- [ ] `export API_VERSION=2.1 >> "$GITHUB_ENV"`
- [ ] `set-env name=API_VERSION value=2.1`
