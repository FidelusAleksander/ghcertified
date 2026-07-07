---
question: "GitHub Actions を有効にする必要があるのはどれですか？"
documentation: "https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-version-updates"
---

- [x] 依存関係のレビュー
- [ ] Dependabot セキュリティ更新
- [ ] Dependabot バージョン更新
- [ ] これらすべて
> GitHub Actions は、Dependabot のバージョン更新やセキュリティ更新を GitHub 上で実行するためには必要ではありません。ただし、Dependabot によって作成されたプルリクエストはワークフローをトリガーし、アクションを実行することがあります。
- [ ] 該当なし
> 依存関係のレビューでは、`actions/dependency-review-action` GitHub Action を使用します。
