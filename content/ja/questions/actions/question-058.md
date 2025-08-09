---
question: "GitHub Actionsを使用してAWS、Azure、GCPなどのクラウドプロバイダーのリソースにアクセスする場合、最も安全で推奨される認証方法はどれですか？"
title: "質問 058"
---

> https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect
1. [x] OIDCを使用する
1. [ ] Vaultを使用する
1. [ ] アクセスキーを`secrets`に保存する  
> 長期間有効なアクセスキーは、セキュリティ侵害や[スクリプトインジェクション](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)などの攻撃時に推奨されない
1. [ ] アクセスキーを`variables`に保存する  
> `variables`に機密値を保存すべきではない