---
question: "GitHub Actionsでシークレットを管理するためにサードパーティのボールトをどのように使用できますか？"
documentation: "https://developer.hashicorp.com/vault/docs/platform/github-actions"
---

> https://bitwarden.com/help/github-actions-integration/
> https://docs.keeper.io/keeperpam/secrets-manager/integrations/github-actions
- [x] サードパーティのボールトにシークレットを格納し、GitHub Actionsシークレットとして保存されたアクセス認証情報を使用して、ワークフロー内で認証し、実行時にそれらを取得します。
- [ ] GitHub Actions内ではサードパーティのボールトとの直接統合がネイティブにサポートされており、追加の設定は必要ありません。
- [ ] サードパーティのボールトには、それらのAPIキーをワークフローファイルに埋め込み、ベンダーのAPIまたはCLIを使用してアクセスする必要があります。
- [ ] GitHub Actionsはシークレット管理のためのサードパーティのボールトの使用をサポートしておらず、すべてのシークレットをGitHub内に格納する必要があります。
