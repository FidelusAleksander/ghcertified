---
question: "GitHub Actions ワークフローでカスタム CodeQL 構成ファイルを使用するにはどうすればよいですか?"
documentation: "https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options#using-a-custom-configuration-file"
---

- [x] `github/codeql-action/init` アクションの `config-file` 入力パラメーターで構成ファイルのパスを明示的に指定することによって
- [ ] 構成を `.github/codeql/config-config.yml` ファイルに保存することによって。`github/codeql-action/init` アクションが自動的にファイルを検出して使用します
- [ ] セキュリティタブの Code Scanning セクションにそのファイルをアップロードすることによって
- [ ] 構成を `.github/workflows/codeql-analysis.yml` ファイルに保存することによって。`github/codeql-action/init` アクションが自動的にファイルを検出して使用します
