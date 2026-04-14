---
question: "GitHub Actions を使用して AWS、Azure、GCP などのクラウドプロバイダーのリソースにアクセスする場合、認証の最も安全で推奨される方法はどれですか？"
documentation: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect"
---

- [x] OIDC を使用する
- [ ] Vault を使用する
- [ ] アクセスキーを `secrets` に保存する
> 長期的なアクセスキーを使用することは、[スクリプトインジェクション](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections) などのセキュリティ侵害や攻撃のリスクがあるため、推奨されません。
- [ ] アクセスキーを `variables` に保存する
> 機密性の高い値は `variables` に保存すべきではありません。
