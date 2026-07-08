---
question: "CI サーバーが SARIF 結果を GitHub にアップロードするために必要なものは何ですか？"
documentation: https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/use-with-existing-ci-system#generating-a-token-for-authentication-with-github
---

- [x] `security_events` の書き込み権限を持つ GitHub App または個人アクセストークン。
- [ ] GitHub Advisory Database への直接接続。
- [ ] GitHub リポジトリへの管理者アクセス。
- [ ] CI システムにインストールされた特別なプラグイン。
