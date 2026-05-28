---
question: "以下のうち、`pull_request` イベントと `pull_request_target` イベントを比較した場合に正しいものはどれですか？"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request"
---

- [x] `pull_request` イベントはマージコミットのコンテキスト内で実行され、一方で `pull_request_target` イベントはベースリポジトリのデフォルトブランチのコンテキスト内で実行されます。
> マージコミットの詳細については、GitHubの[ドキュメント](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/about-pull-request-merges)を参照してください。
- [x] マージコンフリクトがある場合、`pull_request` アクティビティではワークフローは実行されません。
- [x] `pull_request` と `pull_request_target` イベントは、デフォルトで `opened`、`synchronize`、`reopened` のアクティビティタイプを持っています。
- [ ] フォークされたリポジトリからのPRの場合、`pull_request` を使用すると、デフォルトブランチに関連付けられているため、リポジトリ内のすべてのシークレットにワークフローがアクセスできるようになります。
> これは `pull_request_target` に該当します。`pull_request` はデフォルトブランチに関連付けられていないため、フォークされたPRによってトリガーされた場合、ワークフローはシークレットへのアクセスが制限されます。詳細については上記のドキュメント、「pull_request_target」セクションを参照してください。
- [ ] マージコンフリクトがある場合、`pull_request_target` アクティビティではワークフローは実行されません。
- [ ] PRの変更ファイルを使用してCIチェックやテストスイートの実行などを行いたい場合、`pull_request_target` イベントを使用する必要があります。
> `pull_request_target` はリポジトリのデフォルトブランチのコンテキスト内で実行されるため、CIチェックやテストスイートなどのアクティビティによって信用できないコードがチェックアウトされ、実行される可能性があります。詳細については、[ドキュメント](https://docs.github.com/en/enterprise-cloud@latest/actions/reference/security/secure-use#mitigating-the-risks-of-untrusted-code-checkout)を参照してください。
