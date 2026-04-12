---
question: "O que é verdadeiro sobre a seguinte configuração de workflow se acionada contra o repositório `octo/my-dev-repo`?"
documentation: "https://docs.github.com/pt/actions/using-jobs/using-conditions-to-control-job-execution"
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
- [x] o job `production-deploy` será marcado como ignorado
- [ ] o job `production-deploy` apresentará erro
- [ ] o job `production-deploy` executará três etapas
- [ ] o job `production-deploy` será executado se o `node-version` for `14`
