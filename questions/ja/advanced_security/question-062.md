---
question: "コードスキャンのGitHub Actionsワークフローに`paths-ignore`キーワードを追加する効果は何ですか？"
documentation: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#avoiding-unnecessary-scans-of-pull-requests"
---

```yaml
.github/workflows/codeql-analysis.yml

on:
  pull_request:
    branches: [main]
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'

```
- [x] 分析に関係のないファイルが変更された場合に、不必要なスキャンを回避する。
- [ ] CodeQL に `*.txt` および `*.md` ファイルをすべて分析から除外するように指示する。
- [ ] 指定された拡張子のファイルが変更されたプルリクエストで CodeQL 分析が実行されるのを防ぐ。
- [ ] プルリクエストのチェックでは、`*.txt` および `*.md` ファイルの CodeQL の脆弱性が無視される。
