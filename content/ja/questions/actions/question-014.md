---
question: "このコードはmatrix戦略を使用して6つの異なるJobを並列に起動します。matrix戦略を使用してWorkflow全体を並列化できますか？"
title: "質問 014"
---


```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
> https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-a-matrix-strategy-with-a-reusable-workflow

1. [ ] いいえ
1. [x] はい