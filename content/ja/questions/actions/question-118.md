---
question: "コミットまたはPRを作成する際に、以下のWorkflowの実行をスキップするにはどうすればよいですか？"
title: "質問 118"
---

```yaml
name: Build
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    name: Extract artifact version
...
```

>https://docs.github.com/en/actions/managing-workflow-runs/skipping-workflow-runs

1. [x] コミットメッセージまたはPull Requestのタイトルに以下のいずれかのキーワードを含める
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

1. [ ] コミットメッセージに `SKIP_WORKFLOW` を記載する
1. [ ] 上記のWorkflowは、pushまたはpull requestイベントが発生するたびに必ず実行される