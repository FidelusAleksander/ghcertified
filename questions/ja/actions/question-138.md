---
question: "デプロイ後の関連アクティビティを実行するワークフロー `Post-Deploy` を作成したいとします。この `Post-Deploy` ワークフローが、指定されたワークフローの完了後に自動的に実行されるようにするには、どのイベントトリガーを使用すべきですか？"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_run"
---

- [x] `workflow_run`
> `workflow_run` を使用すると、他の指定されたワークフローが完了した後（成功に関係なく）にワークフローをトリガーすることができます。この質問では特に完了したワークフローについて尋ねていますが、`workflow_run` は、他の指定されたワークフローがトリガーされたり、ランナー上で処理を開始した際にワークフローをトリガーするようにも設定できます。
- [ ] `workflow_trigger`
> このようなイベントトリガーは存在しません。
- [ ] `workflow_dispatch`
> `workflow_dispatch` はワークフローを手動でトリガーするために使用されます。詳細については [ドキュメント](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_dispatch) を参照してください。
- [ ] `workflow_call`
> `workflow_call` は、他のワークフローやアクションからワークフローを呼び出すために使用されます。詳細については [ドキュメント](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_call) を参照してください。
