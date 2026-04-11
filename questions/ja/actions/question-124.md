---
question: "次の設定の場合、このmatrixが評価されるとGitHub Actionsは何個のジョブを実行しますか？"
title: "質問 124"
---

```yaml
strategy:
  matrix:
    os: [ubuntu-latest, windows-latest]
    node: [14, 16]
    include:
      - os: macos-latest
        node: 18
      - os: ubuntu-latest
        node: 14
```

> https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/running-variations-of-jobs-in-a-workflow#expanding-or-adding-matrix-configurations

1. [ ] 4 ジョブ
1. [x] 5 ジョブ
1. [ ] 6 ジョブ
1. [ ] 7 ジョブ
1. [ ] 構文が無効なためジョブは実行されない