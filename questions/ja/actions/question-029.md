---
question: "あなたのPull Request分析ワークフローでは、複数のコード分析ツールを使用しており、完全に完了するまで約20分かかります。このワークフローは、`branches`フィルターを`master`に設定した`pull_request`イベントでトリガーされます。そのため、開発者が数分以内に複数のコミットをプッシュすると、複数のワークフローが並行して実行されます。すべての以前のワークフローを停止し、最新の変更のみを実行するにはどうすればよいですか？"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run"
---

- [x] cancel-in-progressを使用して並行処理を設定
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
- [ ] 並行処理を使用
```yaml
concurrency:
  group: ${{ github.ref }}
```
> これにより、そのgithub ref上の実行がキューに入ります。ただし、以前の実行を停止することはありません。

- [ ] アクティビティタイプフィルターを使用
```yaml
on:
  pull_request:
    branches:
      - master
    types: [latest]
```
> pull_requestイベントには`latest`というアクティビティタイプはありません。

- [ ] `pull_request`イベントのcancel-in-progressフラグを使用
```yaml
on:
  pull_request:
    branches:
      - master
    cancel-in-progress: true
```
> `cancel-in-progress`は`concurrency`ブロック内でのみ使用可能です。これは`pull_request`の有効なキーではありません。
