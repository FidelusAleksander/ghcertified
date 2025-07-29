---
question: "O que é verdadeiro sobre a seguinte configuração de workflow quando disparada contra o repositório `octo/my-dev-repo`?"
title: "Questão 113"
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
1. [x] o job `production-deploy` será marcado como ignorado
1. [ ] o job `production-deploy` apresentará erro
1. [ ] o job `production-deploy` executará três etapas
1. [ ] o job `production-deploy` será executado se o `node-version` for `14`
