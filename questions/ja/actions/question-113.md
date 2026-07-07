---
question: "次のワークフロー構成について、`octo/my-dev-repo` リポジトリでトリガーされた場合に当てはまることは何ですか？"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-jobs-with-conditions"
---

```yaml
name: deploy-workflow
on: [push]
jobs:
    production-deploy:
        if: github.repository == 'octo/my-prod-repo'
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4
            - uses: actions/setup-node@v4
              with:
                  node-version: '14'
            - run: npm install -g bats
```
- [x] `production-deploy` ジョブはスキップとしてマークされる
- [ ] `production-deploy` ジョブはエラーになる
- [ ] `production-deploy` ジョブは3つのステップを実行する
- [ ] `production-deploy` ジョブは `node-version` が`14`の場合に実行される
