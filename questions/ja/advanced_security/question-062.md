---
question: "コードスキャン用のGitHub Actionsワークフローに`paths-ignore`キーワードを追加すると、どのような効果がありますか？"
documentation: "https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options#avoiding-unnecessary-scans-of-pull-requests"
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
- [x] 分析に関連しないファイルが変更された場合に不要なスキャンを回避する。
- [ ] CodeQLに`*.txt`および`*.md`ファイルを分析から除外するよう指示する。
- [ ] 指定された拡張子のファイルが変更されたプルリクエストでCodeQL分析が実行されるのを防ぐ。
- [ ] プルリクエストのチェックでは、`*.txt`および`*.md`ファイルで見つかったCodeQLの脆弱性を無視する。
