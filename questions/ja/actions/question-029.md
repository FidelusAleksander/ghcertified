---
question: "あなたのPull Request解析ワークフローでは、複数のコード解析ツールを使用しており、完全な完了までに約20分かかります。このワークフローは`pull_request`イベントでトリガーされ、`branches`フィルターが`master`に設定されています。そのため、開発者が数分内に複数のコミットをプッシュすると、複数のワークフローが並行して実行されます。すべての以前のワークフロー実行を停止し、最新の変更のみを使用するものを実行するにはどうすればよいですか？"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run"
---

- [x] cancel-in-progressを使用したconcurrencyを利用する
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
- [ ] concurrencyを使用する
```yaml
concurrency:
  group: ${{ github.ref }}
```
> これはそのgithub refでの実行をキューに入れるだけで、以前の実行を停止することはできません

- [ ] アクティビティタイプフィルターを使用する
```yaml
on:
  pull_request:
    branches:
      - master
    types: [latest]
```
> `pull_request`イベントには`latest`というアクティビティタイプは存在しません
- [ ] `pull_request`イベントに対するcancel-in-progressフラグを使用する
```yaml
on:
  pull_request:
    branches:
      - master
    cancel-in-progress: true
```
> `cancel-in-progress`は`concurrency`ブロック内でのみ使用できます。`pull_request`の有効なキーではありません。
