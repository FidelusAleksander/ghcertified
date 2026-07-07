---
question: "GitHub Actionsを使用してAWS、Azure、GCPなどのクラウドプロバイダーのリソースにアクセスする場合、最も安全で推奨される認証方法は"
documentation: "https://docs.github.com/en/actions/concepts/security/openid-connect"
---

- [x] OIDCを使用する
- [ ] Vaultを使用する
- [ ] アクセスキーを`secrets`に保存する
> 長期間のアクセスキーを使用することは、セキュリティ漏洩や[スクリプトインジェクション](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)などの攻撃に対して推奨されません
- [ ] アクセスキーを`variables`に保存する
> 機密性の高い値を`variables`に保存すべきではありません
