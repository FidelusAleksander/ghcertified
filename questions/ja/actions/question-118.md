---
question: "コミットまたはプルリクエストを作成した際に、次のワークフローの実行をスキップするにはどうすればよいですか？"
documentation: "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/skip-workflow-runs"
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

- [x] コミットメッセージまたはプルリクエストのタイトルに次のいずれかのキーワードを含める
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

- [ ] コミットメッセージに `SKIP_WORKFLOW` を記載する  
- [ ] 上記のワークフローは、どのプッシュまたはプルリクエストのイベントでも常に実行される  
