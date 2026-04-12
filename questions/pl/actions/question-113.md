---
question: "Co jest prawdą o poniższej konfiguracji workflow, jeśli zostanie uruchomiona dla repozytorium `octo/my-dev-repo`?"
documentation: "https://docs.github.com/en/actions/using-jobs/using-conditions-to-control-job-execution"
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
- [x] zadanie `production-deploy` zostanie oznaczone jako pominięte
- [ ] zadanie `production-deploy` zakończy się błędem
- [ ] zadanie `production-deploy` wykona trzy kroki
- [ ] zadanie `production-deploy` uruchomi się, jeśli `node-version` wynosi `14`
