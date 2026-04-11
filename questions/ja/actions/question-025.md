---
question: "コード変更時に品質チェック、Lint、テストを実行する再利用可能なWorkflow `CI` を作成したい。他のWorkflowから再利用できるようにするには、`CI` Workflowでどのイベントトリガーを定義すべきですか？"
title: "質問 025"
---

> https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows
1. [x] workflow_call
1. [ ] workflow_trigger
> そのようなイベントトリガーは存在しない
1. [ ] workflow_dispatch
> これは手動トリガー用
1. [ ] workflow_run
> https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#workflow_run