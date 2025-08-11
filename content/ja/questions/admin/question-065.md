---
question: "Organization管理者がWebhookの変更に関連するイベントを監査ログで検索するにはどうすればよいですか？"
title: "質問 065"
---

> https://docs.github.com/en/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/reviewing-the-audit-log-for-your-organization
1. [x] 検索クエリで`operation`修飾子を使用し、`operation:modify`のように指定してWebhookなど既存リソースが変更されたイベントを検索する
1. [ ] 監査ログの検索バーに「webhook modifications」と直接入力する
1. [ ] 日付範囲のみで監査ログをフィルタリングし、イベント種別は指定できない
1. [ ] 音声コマンドでWebhook変更イベントの検索を依頼する