---
question: "プルリクエストが再オープンされたときにワークフローがトリガーされます。これはなぜでしょうか？"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request"
---

- [x] `types: [reopened]` が `pull_request` イベントの下で定義されているため。
- [ ] ブランチ保護ルールが適切に設定されていなかったため。
> ブランチ保護ルールはワークフローが実行されるタイミングを決定しません。
- [x] `pull_request` イベントに特定のアクティビティタイプが定義されていないため。
> アクティビティタイプが明示的に定義されていない場合、`pull_request` イベントは、PRがオープンされたとき（`opened`）、PRがオープンされてからソースブランチが更新されたとき（`synchronize`）、またはPRが再オープンされたとき（`reopened`）にトリガーされます。
- [ ] `on: schedule` が `pull_requests: [reopened]` で設定されているため。
> `schedule` は特定の時間にワークフローをトリガーするために使用され、リポジトリベースのアクティビティには使用されません。
