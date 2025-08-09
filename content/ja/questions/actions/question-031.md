---
question: "`jobs.job_id.if` 条件式で、job `production-deploy` を `my-org/my-repo` Repositoryでのみ実行するようにするにはどれですか？（2つ選択）"
title: "質問 031"
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