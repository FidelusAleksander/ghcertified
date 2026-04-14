---
question: "GitHub の個人アクセストークンを誤ってパブリックリポジトリにコミットしてしまいました。アカウントの危殆化を防ぐためにどのような対処をすべきですか？"
documentation: "https://docs.github.com/en/code-security/secret-scanning/managing-alerts-from-secret-scanning#securing-compromised-secrets"
---

- [x] トークンが危殆化したとみなし、直ちに削除する
- [ ] トークンの権限を読み取り専用に変更する
- [ ] git の履歴を上書きしてトークンを隠す
- [ ] このトークンがいずれかのアプリケーションで使用されているか確認し、使用されている場合は削除する
