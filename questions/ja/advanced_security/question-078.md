---
question: "GitHub Actions ワークフローでカスタム CodeQL 設定ファイルをどのように使用できますか？"
documentation: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-a-custom-configuration-file"
---

- [x] `github/codeql-action/init` アクションの `config-file` 入力パラメータに設定ファイルのパスを明示的に指定する
- [ ] 設定を `.github/codeql/config-config.yml` ファイルに保存する。`github/codeql-action/init` アクションが自動的にファイルを検出して使用する
- [ ] リポジトリの Security タブ内の Code Scanning セクションにそのファイルをアップロードする
- [ ] 設定を `.github/workflows/codeql-analysis.yml` ファイルに保存する。`github/codeql-action/init` アクションが自動的にファイルを検出して使用する
