---
question: "あなたはマトリックスジョブ `example_matrix` を定義しました。マトリックスが同時に最大2つのジョブを実行するように制限する方法は？"
title: "Question 036"
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
1. [ ] GitHub の REST API を使用してジョブ数が 2 未満であることを確認する
1. [ ] 実現不可能。マトリックスは、ランナーが利用可能であればジョブを常にすべて並列で実行する
