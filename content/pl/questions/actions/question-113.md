---
question: "Co jest prawdą na temat poniższej konfiguracji przepływu pracy, jeśli zostanie uruchomiona w repozytorium `octo/my-dev-repo`?"
title: "Pytanie 113"
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
1. [x] zadanie `production-deploy` zostanie oznaczone jako pominięte
1. [ ] zadanie `production-deploy` zakończy się błędem
1. [ ] zadanie `production-deploy` wykona trzy kroki
1. [ ] zadanie `production-deploy` zostanie uruchomione, jeśli `node-version` to `14`
