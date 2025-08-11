---
question: "いつjob3は実行されますか？"
title: "質問 030"
---

```yaml
  jobs:
    job1:
    job2:
      needs: job1
    job3:
      if: ${{ always() }}
      needs: [job1, job2]
```
> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-not-requiring-successful-dependent-jobs
1. [x] job1とjob2が完了した後、成功したかどうかに関係なくjob3が実行される
1. [ ] `if: ${{ always() }}` と `needs` を同時に使用することはできない。Workflowは起動時に失敗する
1. [ ] job1とjob2が両方とも正常に完了した後にjob3が実行される
1. [ ] job1とjob2が両方とも失敗した後にjob3が実行される