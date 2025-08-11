---
question: "matrix ジョブ `example_matrix` を定義しました。最大2つのジョブのみを同時に実行するよう制限するにはどうしますか？"
title: "質問 036"
---

```yaml
  jobs:
    example_matrix:
      strategy:
        matrix:
          version: [10, 12, 14]
          os: [ubuntu-latest, windows-latest]
```
> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel
1. [x] `jobs.example_matrix.strategy.max-parallel` を 2 に設定する
1. [ ] `jobs.example_matrix.strategy.concurrency` を 2 に設定する
1. [ ] GitHub REST API を使用してジョブ数が2未満か確認する
1. [ ] 実行可能なランナーがあれば、matrix は常に全ジョブを並列実行するため制限できない