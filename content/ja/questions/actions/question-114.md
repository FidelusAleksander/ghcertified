---
question: "以下の例で、ジョブ内のマトリックス変数の現在の値にアクセスするにはどうすればよいですか:"
title: "質問 114"
---

```yaml
jobs:
    example_matrix:
        strategy:
            matrix:
                version: [10, 12, 14]
                os: [ubuntu-latest, windows-latest]
```
> https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy
1. [x] `matrix.version` や `matrix.os` のように `matrix` コンテキストを通して変数を参照する
1. [ ] `matrix.property` 構文を使用する
1. [ ] ジョブ設定内で `context` キーワードを使用する
1. [ ] `version` や `os` の構文で直接変数にアクセスする