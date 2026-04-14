---
question: "Pull Request の分析ワークフローでは複数のコード分析ツールを使用しており、完了するまでに約20分かかります。このワークフローは `pull_request` イベントでトリガーされ、`branches` フィルターが `master` に設定されています。このため、開発者が数分以内に複数のコミットをプッシュすると、複数のワークフローが並行して実行されます。すべての以前のワークフロー実行を停止し、最新の変更でのみワークフローを実行するにはどうすればよいですか？"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run"
---

- [x] concurrency を使用して進行中の実行をキャンセルする
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
- [ ] concurrency を使用する
```yaml
concurrency:
  group: ${{ github.ref }}
```
> これにより、その GitHub リファレンス上の実行がキューに入りますが、以前の実行を停止することはありません。

- [ ] アクティビティタイプフィルターを使用する
```yaml
on:
  pull_request:
    branches:
      - master
    types: [latest]
```
> `latest` というアクティビティタイプは pull_request イベントには存在しません。

- [ ] `pull_request` イベント用の cancel-in-progress フラグを使用する
```yaml
on:
  pull_request:
    branches:
      - master
    cancel-in-progress: true
```
