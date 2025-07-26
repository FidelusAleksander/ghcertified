---
question: "Jakie wyrażenie warunkowe `jobs.job_id.if` zapewni, że zadanie `production-deploy` zostanie uruchomione tylko w repozytorium `my-org/my-repo`? (Wybierz dwie odpowiedzi.)"
title: "Pytanie 031"
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
