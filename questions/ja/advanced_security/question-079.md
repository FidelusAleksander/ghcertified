---
question: "GitHub Actions ワークフローで実行する CodeQL クエリをどこで指定できますか？"
documentation: "https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options#running-additional-queries"
---

- [x] `github/codeql-action/init` アクションの `queries` 入力パラメータ内
- [x] CodeQL 構成 YAML ファイル内
- [ ] `github/codeql-action/queries` アクションの `paths` 入力パラメータ内
- [ ] リポジトリのセキュリティ タブ内の Code Scanning セクション
- [ ] `.github/settings.yml` ファイルの `codeql` フィールド内
