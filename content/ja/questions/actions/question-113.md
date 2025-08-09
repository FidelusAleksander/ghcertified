---
question: "`octo/my-dev-repo` Repository に対してトリガーされた場合、このワークフロー設定について正しいのはどれですか？"
title: "Question 113"
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
> https://docs.github.com/en/actions/using-jobs/using-conditions-to-control-job-execution
1. [x] `production-deploy` ジョブは「スキップ」としてマークされる
1. [ ] `production-deploy` ジョブはエラーになる
1. [ ] `production-deploy` ジョブは3つのステップを実行する
1. [ ] `node-version` が `14` の場合、`production-deploy` ジョブが実行される