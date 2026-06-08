---
question: "ジュディスは、リポジトリにコミットがあるたびにトリガーされるワークフローを持っています。リポジトリは常にアクティブというわけではないため、ジュディスはワークフローをプログラムで週に1回実行するように設定したいと考えています。この動作を確実にするために、どのイベントの組み合わせを使用すべきですか？"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows"
---

- [x] `push` と `schedule`
- [ ] `pull_request` (with `types:[closed]`) と `schedule`
> プルリクエストはマージされずにクローズされる場合があり、リポジトリにコミットがプルリクエストなしで行われることもあります。
- [ ] `push` と `workflow_dispatch`
> 質問にある「プログラムで」という言葉は、ワークフローが手動ではなく自動的にトリガーされるべきことを意味します。ユーザーが毎週ワークフローを手動でトリガーするのは信頼性が低いため、`schedule` を使用して自動化するべきです。
- [ ] `push` と `weekly`
> `weekly` は有効なイベントではありません。`schedule` を使用し、`cron` 構文を使ってワークフローを週ごとに実行するように設定してください。
- [ ] これは不可能です: `schedule` は他のイベントと組み合わせることはできません。
