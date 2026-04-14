---
question: "job3はいつ実行されますか？"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-not-requiring-successful-dependent-jobs"
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
- [x] job3は、job1とjob2が完了した後に、それらが成功したかどうかにかかわらず実行されます
- [ ] `if: ${{ always() }}`と`needs`を併用することはできません。ワークフローは開始時に失敗します。
- [ ] job3は、job1とjob2が正常に完了した後に実行されます
- [ ] job3は、job1とjob2の両方が失敗した後に実行されます
