---
question: "ワークフローで利用するMarketplaceアクションを検討しています。アクションが信頼できることを示すいくつかの側面は何ですか？"
documentation: "https://docs.github.com/en/actions/reference/security/secure-use#using-third-party-actions"
---

- [x] Marketplaceページに「Verified Creator」バッジが表示されている
- [x] READMEがアクションの目的とその動作を詳細に定義している
- [ ] `action.yml`が非常に簡潔である
- [ ] Marketplaceページでアクションのスター数が少ない
- [ ] アクションのソースコードが長期間更新されていないため、そのアクションの開発が終了していることを示している
> アクションを含むリポジトリが長期間更新されていない場合、依存関係などが古くなっている可能性があり、セキュリティリスクが発生する可能性があります。
