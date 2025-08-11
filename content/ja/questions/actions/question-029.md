---
question: "Pull Request解析Workflowでは複数のコード解析ツールを使用しており、完了までに約20分かかります。このWorkflowは `pull_request` イベントで `branches` フィルターを `master` に設定してトリガーされています。そのため、開発者が数分以内に複数のCommitをプッシュすると複数のWorkflowが並列で実行されます。すべての以前のWorkflow実行を停止し、最新の変更のみを実行するにはどうしますか？"
title: "質問 029"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run

1. [x] cancel-in-progressを使用したconcurrencyを使う
```yaml
  concurrency:
    group: ${{ github.workflow }}-${{ github.ref }}
    cancel-in-progress: true
```
1. [ ] concurrencyを使用する
```yaml
  concurrency:
    group: ${{ github.ref }}
```
> これはそのgithub refで実行をキューに入れるだけで、以前の実行は停止しない

1. [ ] activity typesフィルターを使用する
```yaml
  on:
    pull_request:
      branches:
        - master
      types: [latest]
```
> pull_requestイベントに `latest` というactivity typeは存在しない
1. [ ] `pull_request` イベント用のcancel-in-progressフラグを使用する
```yaml
  on:
    pull_request:
      branches:
        - master
      cancel-in-progress: true
```