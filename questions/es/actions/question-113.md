---
question: "¿Qué es verdadero acerca de la siguiente configuración de flujo de trabajo si se activa en el repositorio `octo/my-dev-repo`?"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-jobs-with-conditions"
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
- [ ] el trabajo `production-deploy` tendrá un error
- [ ] el trabajo `production-deploy` ejecutará tres pasos
- [ ] el trabajo `production-deploy` se ejecutará si el `node-version` es `14`
