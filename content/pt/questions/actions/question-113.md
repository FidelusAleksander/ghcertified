---
question: "O que é verdadeiro sobre a seguinte configuração de fluxo de trabalho se acionada no repositório `octo/my-dev-repo`?"
title: "Pergunta 113"
---

```yaml
name: deploy-workflow
on: [push]
jobs:
    production-deploy:
        if: github.repository == 'octo/my-prod-repo'
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4
            - uses: actions/setup-node@v4
              with:
                  node-version: '14'
            - run: npm install -g bats
```
> https://docs.github.com/en/actions/using-jobs/using-conditions-to-control-job-execution
1. [x] o trabalho `production-deploy` será marcado como pulado
1. [ ] o trabalho `production-deploy` apresentará erro
1. [ ] o trabalho `production-deploy` executará três etapas
1. [ ] o trabalho `production-deploy` será executado se a `node-version` for `14`
