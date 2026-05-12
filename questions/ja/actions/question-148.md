---
question: "ワークフローがプッシュイベントでトリガーされたときの `github.ref` に関する記述として正しいのはどれですか？"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

- [x] プッシュイベントでは、`github.ref` はプッシュされたブランチまたはタグの参照の、完全修飾されたリファレンスです。
> リファレンスに関する詳細は、公式の [Git ドキュメント](https://git-scm.com/book/en/Git-Internals-Git-References) を参照してください。
- [ ] プッシュイベントでは、`github.ref` はワークフローをトリガーしたコミットのメッセージです。
> 最新のコミットメッセージは `github.event.head_commit.message` に含まれます。詳細については [ドキュメント](https://docs.github.com/en/webhooks/webhook-events-and-payloads#push) を参照してください。
- [ ] プッシュイベントでは、`github.ref` はワークフローをトリガーしたコミットの SHA です。
> `github.sha` はコミット SHA を示します。この質問のドキュメントリンクや [イベントドキュメント](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows) を参照してください。
- [ ] プッシュイベントでは、`github.ref` はワークフローをトリガーしたコミットの説明です。
- [ ] プッシュイベントでは、`github.ref` はワークフローランをトリガーした完全修飾されたリファレンスの種類です。その値は `branch`、`tag`、または（リファレンスが完全修飾されていない場合は）`null` です。
> `github.ref_type` は、ワークフローランをトリガーしたリファレンスの種類を示す値です。これは `branch` または `tag` のみを含むことができ、`null` は有効な値ではありません。この質問のドキュメントリンクを参照してください。
