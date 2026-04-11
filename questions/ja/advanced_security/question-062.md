---
title: "質問 062"
question: "`paths-ignore` キーワードをコードスキャンのGitHub Actionsワークフローに追加するとどうなりますか？"
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
> https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#avoiding-unnecessary-scans-of-pull-requests
1. [x] 解析に関係ないファイルが変更された際の不要なスキャンを避けられる。
1. [ ] CodeQLにすべての`*.txt`と`*.md`ファイルを解析から除外するよう指示する。
1. [ ] 指定された拡張子のファイルが変更されるプルリクエストでCodeQL解析の実行を防ぐ。
1. [ ] プルリクエストチェックは`*.txt`と`*.md`ファイルで見つかったCodeQLの脆弱性を無視する。