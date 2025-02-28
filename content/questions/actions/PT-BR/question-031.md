---
question: "Qual condicional `jobs.job_id.if` garantirá que o job `production-deploy` seja acionado apenas no repositório `my-org/my-repo`? (Selecione duas.)"
archetype: "questions"
title: "Questão 031"
---

```yaml
  jobs:
    production-deploy:  
      if: <CONDITION>
      runs-on: ubuntu-latest
      steps:
        ...
```
> https://docs.github.com/en/actions/learn-github-actions/contexts#github-context
- [x] `if: github.repository == 'my-org/my-repo'`
- [x] `if: ${{ github.repository == 'my-org/my-repo' }}`
- [ ] `if: ${{ github.organization == 'my-org' && github.repository == 'my-repo' }}`
> https://docs.github.com/en/actions/learn-github-actions/contexts#github-context
- [ ] `if: ${{ github.org == 'my-org' && github.repository == 'my-repo' }}`
> https://docs.github.com/en/actions/learn-github-actions/contexts#github-context
