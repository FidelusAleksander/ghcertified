---
title: "Question 031"
date: 2023-08-28T16:41:29+02:00
draft: false
subject: []
---

# What jobs.<job_id>.if conditional will make sure that job `production-deploy` is triggered only on `my-org/my-repo` repository?
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
> You may omit the ${{ }} expression syntax in `if` conditionals
- [x] `if: ${{ github.repository == 'my-org/my-repo' }}`
- [ ] `if: ${{ github.organization == 'my-org' && github.repository == 'my-repo' }}`
> https://docs.github.com/en/actions/learn-github-actions/contexts#github-context
- [ ] `if: ${{ github.org == 'my-org' && github.repository == 'my-repo' }}`
> https://docs.github.com/en/actions/learn-github-actions/contexts#github-context
