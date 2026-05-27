---
question: "アネットは、彼女のプライベートな組織内のメンバーだけが使用するカスタム `npm` パッケージを公開するためのワークフローを作成する必要があります。彼女のワークフローには何が含まれているべきですか？"
documentation: "https://docs.github.com/en/packages/learn-github-packages/publishing-a-package"
---

- [x] GitHub Packages への公開ロジック
> GitHub Packages は GitHub と統合されたパッケージレジストリであり、ニーズが GitHub 固有の場合（例えば actions/workflows）、使用が容易になります。GitHub Packages はパッケージを非公開でホストする機能を提供します。
- [x] `write:packages` 権限を持つトークン
> 個人アクセストークンはすべての GitHub Packages レジストリでサポートされています。一部のレジストリでは `GITHUB_TOKEN` の使用もサポートされています。詳細は [ドキュメント](https://docs.github.com/en/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries) を参照してください。
- [x] 対応する GitHub Packages レジストリ `https://npm.pkg.github.com` との通信ロジック
> GitHub Packages に関連するワークフローには、対応する GitHub ホスト型パッケージレジストリとの通信が含まれることが多く、URL の構文は `https://<package-type>.pkg.github.com` となります。例については [npm レジストリのドキュメント](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry) を参照してください。
- [ ] アクティビティタイプが指定されていない `on:registry_package` イベント
> `on:registry_package` はパッケージに関連していますが、パッケージを公開するためにこのイベントは必要ありません。
- [ ] `admin:packages` 権限を持つトークン
> `admin:packages` 権限は、GitHub Packages にホストされているパッケージを削除する必要がある場合にのみ必要です。この場合、最小権限の原則に従い、`write` 権限のみが必要です。
- [ ] `types:[published]` を指定した `on:registry_package` イベント
> `on:registry_package` イベントは、パッケージが公開されたときにワークフローをトリガーするように構成できますが、パッケージを公開するためにこのイベントは必要ありません。
