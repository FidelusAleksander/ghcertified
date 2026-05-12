---
question: "ワークフローが `pull_request` イベントによってトリガーされた場合、`github.ref` に関する記述のうち正しいものはどれですか？"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

- [x] マージされていないプルリクエストでは、`github.ref` はプルリクエストマージブランチ/タグの完全修飾リファレンスを指します。  
> リファレンスに関する詳細は、公式の [Git ドキュメント](https://git-scm.com/book/en/Git-Internals-Git-References) を参照してください。
- [x] マージされたプルリクエストでは、`github.ref` はマージ先のブランチの完全修飾リファレンスを指します。  
- [ ] プルリクエスト (マージ済みかどうかに関わらず) では、`github.ref` はプルリクエスト番号を指します。  
> `pull_request` イベントの場合、`github.ref` の値はプルリクエストがマージされたかどうかに基づいて変わります。この値は常にリファレンスであり、プルリクエスト番号ではありません。
- [ ] プルリクエスト (マージ済みかどうかに関わらず) では、`github.ref` は `GITHUB_REF` ブランチ上の最後のマージコミットの SHA です。  
> `github.sha` はマージブランチ上の最新の SHA を指します (例: `refs/pull/PULL_REQUEST_NUMBER/merge`)。詳細については [イベントドキュメント](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request) を参照してください (`GITHUB_SHA` を検索)。
- [ ] マージされていないプルリクエストでは、`github.ref` はプルリクエストのタイトルから作成された完全修飾リファレンスです。  
> リファレンスはプルリクエストのタイトルから作成されません。`github.event.pull_request.title` にプルリクエストのタイトルが含まれています。詳細は [ドキュメント](https://docs.github.com/en/webhooks/webhook-events-and-payloads#pull_request) を参照してください。
- [ ] マージされたプルリクエストでは、`github.ref` はワークフローの実行をトリガーした完全修飾リファレンスのタイプです。その値は `branch`、`tag`、または (リファレンスが完全修飾されていない場合は) `null` のいずれかです。  
> `github.ref_type` は、ワークフローの実行をトリガーしたリファレンスタイプの値です。この値には `branch` または `tag` のみが含まれます；`null` は有効な値ではありません。この質問のドキュメントリンクを参照してください。
