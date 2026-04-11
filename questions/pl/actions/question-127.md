---
question: "Która składnia polecenia workflow poprawnie ustawia zmienną środowiskową o nazwie 'API_VERSION' z wartością '2.1' dla kolejnych kroków w zadaniu GitHub Actions?"
title: "Pytanie 127"
---

> https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable

1. [x] `echo "API_VERSION=2.1" >> "$GITHUB_ENV"`
1. [ ] `echo "API_VERSION=2.1" >> "$GITHUB_OUTPUT"`
1. [ ] `export API_VERSION=2.1 >> "$GITHUB_ENV"`
1. [ ] `set-env name=API_VERSION value=2.1`
