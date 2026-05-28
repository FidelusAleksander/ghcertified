---
question: "GitHub 外部のシステムが `repository_dispatch` を使用してワークフローをトリガーする仕組みは？"
documentation: "https://docs.github.com/en/rest/repos/repos?apiVersion=2026-03-10#create-a-repository-dispatch-event"
---

- [x] 外部のシステムが GitHub API に POST リクエストを送信して、リポジトリディスパッチイベントを作成する
- [x] リポジトリディスパッチイベントの作成によってワークフローがトリガーされる
> "Create a repository dispatch event" の結果として、新しい `repository_dispatch` イベント（Webhook）が作成され、それを `on.repository_dispatch` が監視する
- [x] `on.repository_dispatch.types` ワークフローキーはリクエストペイロード内の `event_type` パラメータに対応しており、関連する外部イベントの場合にのみワークフローがトリガーされるように制限する
> `on.repository_dispatch.types` を使用すると、カスタムアクティビティタイプを定義できます。`on.repository_dispatch.types` と `event_type` がどのように関連しているかについては、[ドキュメント](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#repository_dispatch) を参照してください。
- [ ] 外部のシステムが GitHub API に PUT リクエストを送信して、リポジトリディスパッチイベントを作成する
> "Create a repository dispatch event" に適切な HTTP メソッドは POST です。
- [ ] ワークフローは次のエンドポイント `/repos/OWNER/REPO/actions/workflows/<WORKFLOW_ID>/dispatches` に POST リクエストを送信することでトリガーされる
> このエンドポイントはリポジトリディスパッチイベントではなく、ワークフローディスパッチイベントを作成するためのものです。さらに、アクション関連のリクエストは GitHub API に送信されるべきであり、API コールをワークフロー自体に送信することはできません。
- [ ] `on.repository_dispatch.event_types` ワークフローキーはリクエストペイロード内の `event_type` パラメータに対応しており、関連する外部イベントの場合にのみワークフローがトリガーされるように制限する
> `on.repository_dispatch.event_types` キーは存在しません。他のイベントが `on.<event_name>.types` を使用してアクティビティを基にフィルタリングするのと同様に、`on.repository_dispatch.types` が使用されます。
