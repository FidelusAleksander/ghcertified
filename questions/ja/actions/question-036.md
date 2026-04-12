---
question: "マトリックスジョブ `example_matrix` を定義しました。マトリックスが一度に最大2つのジョブを実行するように制限するにはどうすればよいですか？"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel"
---

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
- [x] `jobs.example_matrix.strategy.max-parallel` を2に設定する
- [ ] `jobs.example_matrix.strategy.concurrency` を2に設定する
- [ ] GitHubのREST APIを使用してジョブ数が2未満であるか確認する
- [ ] 実行可能なランナーがある場合、マトリックスは常にすべてのジョブを並列で実行するため、不可能である
