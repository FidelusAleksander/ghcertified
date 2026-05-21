---
question: "ワークフローが`pull_request`イベントによってトリガーされた場合、`github.ref`に関して正しい記述はどれですか？"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

- [x] マージされていないプルリクエストでは、`github.ref`はプルリクエストのマージブランチ/タグの完全なリファレンスを指します。  
> 例えば、（未マージの）プルリクエスト番号が#123の場合、`github.ref`は`refs/pull/123/merge`になります。リファレンスに関する詳細は公式の[Gitドキュメント](https://git-scm.com/book/en/Git-Internals-Git-References)を参照してください。
- [x] マージされたプルリクエストでは、`github.ref`はマージ先ブランチの完全なリファレンスを指します。  
> 例えば、`main`ブランチにマージした場合、プルリクエストがマージされた後は`github.ref`が`ref/heads/main`になります。
- [ ] プルリクエストでは（マージ状態に関係なく）、`github.ref`はプルリクエスト番号を指します。  
> `pull_request`イベントでは、`github.ref`の値はプルリクエストがマージされているかどうかに応じて異なります。この値は常にリファレンスであり、プルリクエスト番号ではありません。
- [ ] プルリクエストでは（マージ状態に関係なく）、`github.ref`は`GITHUB_REF`ブランチの最新マージコミットのSHAを指します。  
> `github.sha`がマージブランチの最新SHA（例：`refs/pull/PULL_REQUEST_NUMBER/merge`）を指します。詳細は[イベントドキュメント](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request)（`GITHUB_SHA`で検索）を参照してください。
- [ ] マージされていないプルリクエストでは、`github.ref`はプルリクエストタイトルの完全なリファレンスです。  
> リファレンスはプルリクエストタイトルから形成されません。プルリクエストタイトルは`github.event.pull_request.title`に含まれています。詳細は[ドキュメント](https://docs.github.com/en/webhooks/webhook-events-and-payloads#pull_request)を参照してください。
- [ ] マージされたプルリクエストでは、`github.ref`はワークフローがトリガーされたリファレンスの種類を指します。この値は`branch`、`tag`、または（リファレンスが完全でない場合）`null`になります。  
> `github.ref_type`はワークフローがトリガーされたリファレンスの種類の値です。この値には`branch`または`tag`のみが含まれます；`null`は有効な値ではありません。この質問内のリンク先のドキュメントを参照してください。
