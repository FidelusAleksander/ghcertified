---
question: "CIサーバーがSARIF結果をGitHubにアップロードするために必要なものは何ですか？"
documentation: "https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/use-with-existing-ci-system#generating-a-token-for-authentication-with-github"
---

- [x] `security_events`の書き込み権限を持つGitHub Appまたは個人アクセストークン。
- [ ] GitHub Advisory Databaseへの直接接続。
- [ ] GitHubリポジトリへの管理者アクセス。
- [ ] CIシステムにインストールされた特別なプラグイン。
