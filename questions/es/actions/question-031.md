---
question: "¿Qué condicional `jobs.job_id.if` asegurará que el trabajo `production-deploy` se desencadene solo en el repositorio `my-org/my-repo`?"
documentation: "https://docs.github.com/en/actions/learn-github-actions/contexts#github-context"
---

```yaml
jobs:
  production-deploy:  
    if: <CONDITION>
    runs-on: ubuntu-latest
    steps:
      ...
```
- [x] `if: github.repository == 'my-org/my-repo'`
- [x] `if: ${{ github.repository == 'my-org/my-repo' }}`
- [ ] `if: ${{ github.organization == 'my-org' && github.repository == 'my-repo' }}`
> https://docs.github.com/en/actions/learn-github-actions/contexts#github-context
- [ ] `if: ${{ github.org == 'my-org' && github.repository == 'my-repo' }}`
> https://docs.github.com/en/actions/learn-github-actions/contexts#github-context
