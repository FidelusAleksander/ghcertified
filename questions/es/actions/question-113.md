---
question: "¿Qué es cierto sobre la siguiente configuración de workflow si se activa contra el repositorio `octo/my-dev-repo`?"
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
- [x] el trabajo `production-deploy` será marcado como omitido
- [ ] el trabajo `production-deploy` generará un error
- [ ] el trabajo `production-deploy` ejecutará tres pasos
- [ ] el trabajo `production-deploy` se ejecutará si la `node-version` es `14`
