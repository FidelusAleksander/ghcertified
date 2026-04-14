---
question: "Która składnia polecenia workflow poprawnie ustawia zmienną środowiskową o nazwie 'API_VERSION' z wartością '2.1' do użycia w kolejnych krokach w pracy GitHub Actions?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable"
---

- [x] `echo "API_VERSION=2.1" >> "$GITHUB_ENV"`
- [ ] `echo "API_VERSION=2.1" >> "$GITHUB_OUTPUT"`
- [ ] `export API_VERSION=2.1 >> "$GITHUB_ENV"`
- [ ] `set-env name=API_VERSION value=2.1`
