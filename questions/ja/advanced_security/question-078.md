---
title: "質問 078"
question: "GitHub ActionsワークフローでカスタムCodeQL設定ファイルを使うには？"
---

> https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-a-custom-configuration-file
1. [x] `github/codeql-action/init`アクションの`config-file`入力パラメータに設定ファイルのパスを明示的に指定する
1. [ ] `.github/codeql/config-config.yml`に設定を保存し、`github/codeql-action/init`アクションが自動で検出して使う
1. [ ] リポジトリのセキュリティタブのコードスキャン欄に設定ファイルをアップロードする
1. [ ] `.github/workflows/codeql-analysis.yml`に設定を保存し、`github/codeql-action/init`アクションが自動で検出して使う