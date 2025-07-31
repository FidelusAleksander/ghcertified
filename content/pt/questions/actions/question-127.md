---
question: "Qual sintaxe de comando de workflow define corretamente uma variável de ambiente chamada 'API_VERSION' com o valor '2.1' para etapas subsequentes em um trabalho do GitHub Actions?"
title: "Pergunta 127"
---

> https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable

1. [x] `echo "API_VERSION=2.1" >> "$GITHUB_ENV"`
1. [ ] `echo "API_VERSION=2.1" >> "$GITHUB_OUTPUT"`
1. [ ] `export API_VERSION=2.1 >> "$GITHUB_ENV"`
1. [ ] `set-env name=API_VERSION value=2.1`
