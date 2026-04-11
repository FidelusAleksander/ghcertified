---
question: "¿Qué es verdadero acerca de la siguiente configuración del workflow si se activa en el repositorio `octo/my-dev-repo`?"
title: "Pregunta 113"
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
1. [x] el trabajo `production-deploy` será marcado como omitido
1. [ ] el trabajo `production-deploy` generará un error
1. [ ] el trabajo `production-deploy` ejecutará tres pasos
1. [ ] el trabajo `production-deploy` se ejecutará si la `node-version` es `14`
