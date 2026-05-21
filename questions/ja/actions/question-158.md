---
question: "Petra は、`post-merge` という名前のジョブのみを持つワークフローを作成しています。プルリクエストがマージされた際にジョブをトリガーするよう設定するにはどうすればよいですか？"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#running-your-pull_request-workflow-when-a-pull-request-merges"
---

- [x] `pull_request` のアクティビティタイプを `closed` と指定し、ジョブレベルの条件を使用して `github.event.pull_request.merged` が true であることを確認する
```yaml
on:
    pull_request:
        types: [closed]

jobs:
    post-merge:
        if: github.event.pull_request.merged == true
``` 
> プルリクエストがマージされたときにワークフロージョブをトリガーするには、`on:` でプルリクエストのアクティビティタイプを指定し、ジョブレベルの条件を設定する必要があります。
- [ ] `pull_request` のアクティビティタイプを `merged` と指定し、ジョブレベルの条件を使用して `github.event.pull_request.merged` が true であることを確認する
```yaml
on:
    pull_request:
        types: [merged]
jobs:
    post-merge:
        if: github.event.pull_request.merged == true
``` 
> `pull_request` イベントには `merged` アクティビティタイプは存在しません。`pull_request` の有効なアクティビティタイプについては、リンクされたドキュメントの「pull_request」セクションを参照してください。
- [ ] `pull_request` のアクティビティタイプを `merged` と指定する（ジョブレベルの条件は不要）
```yaml
on:
    pull_request:
        types: [merged]
jobs:
    post-merge:
``` 
> `pull_request` イベントには `merged` アクティビティタイプは存在しません。
- [ ] `pull_request` のアクティビティタイプを `closed` と指定する（ジョブレベルの条件は不要）
```yaml
on:
    pull_request:
        types: [closed]
jobs:
    post-merge:
``` 
> プルリクエストはマージされずにクローズされる場合もあります。プルリクエストがマージされた場合のみジョブをトリガーするには、対応するジョブレベルの条件を使用する必要があります。
- [ ] `pull_request` のアクティビティタイプを `closed` と指定し、ジョブレベルの条件を使用して `github.ref` がプルリクエストのマージブランチと等しいかを確認する
```yaml
on:
    pull_request:
        types: [closed]
jobs:
    post-merge: 
        if: ${{ github.ref == github.event.pull_request.base.ref }}
``` 
> プルリクエストがマージされた後、`github.ref` はマージブランチの *完全な参照*（例: `refs/heads/main`）であって、マージブランチそのもの（例: `main`）ではありません。
