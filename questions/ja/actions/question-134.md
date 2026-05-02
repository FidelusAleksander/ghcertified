---
question: "GitHub Actions ワークフロー内でカスタム JavaScript スクリプトを直接実行するにはどうすればよいですか？"
documentation: "https://github.com/marketplace/actions/github-script"
---

- [x] `actions/github-script` アクションを使用する
> `actions/github-script` を使用すると、API 呼び出しを行い、ワークフローのコンテキストにアクセスするためのインライン JavaScript を記述して活用することができます。`actions/github-script` を使用するには、[ドキュメント](https://github.com/actions/github-script) に記載されているように、他のアクションと同じように呼び出してください。
- [ ] リポジトリの Actions 設定で「Allow custom JavaScript scripts」構成を有効にする
> リポジトリの Actions 設定には「Allow custom JavaScript scripts」という構成は存在しません。
- [ ] Organization の Actions 設定で「Allow custom JavaScript scripts」構成を有効にする
> リポジトリの Actions 設定には「Allow custom JavaScript scripts」という構成は存在しません。Organization の Actions 設定で「Allow actions created by Github」のような設定を有効にする必要がある場合がありますが、これは `actions/github-script` の使用だけに関連するものではありません。
- [ ] スクリプトブロックの内容を `GITHUB_SCRIPT` 環境変数に書き込む
> `GITHUB_SCRIPT` はデフォルトの GitHub Actions 環境変数ではありません。デフォルトの環境変数のリストは [ドキュメント](https://docs.github.com/en/actions/reference/workflows-and-actions/variables) で確認できます。
- [ ] JavaScript アクションで、`using` キーを `'github-script'` に設定する
> JavaScript アクションでは、`using` キーをサポートされるバージョンの Node.js を指定する `node*` に設定する必要があります。一般的に、JavaScript アクションでは `actions/github-script` を必要としません。
