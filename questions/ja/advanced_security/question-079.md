---
question: "GitHub Actions ワークフロー内で実行する CodeQL クエリを指定できる場所はどこですか？"
documentation: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#running-additional-queries"
---

- [x] `github/codeql-action/init` アクションの `queries` 入力パラメータ内
- [x] CodeQL 設定 YAML ファイル内
- [ ] `github/codeql-action/queries` アクションの `paths` 入力パラメータ内
- [ ] リポジトリのセキュリティタブの Code Scanning セクション内
- [ ] `.github/settings.yml` ファイルの `codeql` フィールド内
