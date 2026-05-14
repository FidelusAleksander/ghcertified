---
question: "Dorotheaは、プッシュイベントによってトリガーされたワークフローをトラブルシューティングしており、Webhookに関する詳細を確認したいと考えています。ワークフローをトリガーしたWebhookのペイロード全体をどのように確認できますか？"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

- [x] ステップ内で`github.event`オブジェクトの内容を出力する
> `github.event`はWebhookイベントペイロード全体を表示します。このペイロードはイベントの種類によって異なります。詳細については[Webhook events and payloads](https://docs.github.com/en/webhooks/webhook-events-and-payloads)を参照してください。
- [ ] ワークフロー実行オプションで「イベントWebhookペイロードを表示」チェックボックスをオンにする。
- [ ] `SHOW_EVENT_PAYLOAD`という名前のシークレットまたは変数を`true`に設定する。
- [ ] リポジトリ設定の「Webhooks」セクションに移動する。
> リポジトリ設定の「Webhooks」セクションでは、`push`のような標準イベントWebhookではなく、カスタムWebhookの詳細のみが表示されます。
