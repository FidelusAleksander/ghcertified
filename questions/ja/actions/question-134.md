---
question: "GitHub Actions ワークフロー内でカスタム JavaScript スクリプトを直接実行するにはどうすればよいですか？"
documentation: "https://github.com/marketplace/actions/github-script"
---

- [x] `actions/github-script` アクションを使用する
> `actions/github-script` を使用すると、API 呼び出しやワークフロー コンテキストへのアクセスのためにインライン JavaScript を記述および活用することができます。`actions/github-script` を使用するには、[ドキュメント](https://github.com/actions/github-script) に記載されているように、他のアクションと同じように呼び出します。
- [ ] リポジトリの Actions 設定で「カスタム JavaScript スクリプトを許可する」設定を有効にする
> リポジトリの Actions 設定には「カスタム JavaScript スクリプトを許可する」という設定はありません。
- [ ] 組織の Actions 設定で「カスタム JavaScript スクリプトを許可する」設定を有効にする
> リポジトリの Actions 設定に「カスタム JavaScript スクリプトを許可する」という設定はありません。公式の GitHub Actions を使用するために、組織の Action 設定で「Allow actions created by GitHub」などの設定を有効にする必要がある場合もありますが、これは `actions/github-script` に特化したものではありません。
- [ ] スクリプト ブロックの内容を `GITHUB_SCRIPT` 環境変数に書き込む
> `GITHUB_SCRIPT` はデフォルトの GitHub Actions の環境変数ではありません。デフォルトの環境変数一覧は、[ドキュメント](https://docs.github.com/en/actions/reference/workflows-and-actions/variables) を参照してください。
- [ ] JavaScript Action 内で `using` キーを `'github-script'` に設定する
> JavaScript Actions の場合、`using` キーは `node*`（ここで * はサポートされている Node.js のバージョン）に設定する必要があります。一般的に、JavaScript Actions は `actions/github-script` を必要としません。
