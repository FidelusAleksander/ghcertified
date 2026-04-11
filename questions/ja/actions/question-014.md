---
question: "このコードはマトリックスストラテジーを使用して、6つの異なるジョブを並列で起動します。マトリックスストラテジーを使用してワークフロー全体を並列化することはできますか？"
title: "Question 014"
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

1. [x] はい
1. [ ] いいえ
1. [ ] ワークフローが同じリポジトリ内にある場合のみ
1. [ ] セルフホストランナーの場合のみ
