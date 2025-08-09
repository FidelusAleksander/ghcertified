---
title: "質問 077"
question: "多言語リポジトリでGitHub Actionsを使い、言語ごとに並列でCodeQL解析を実行する最も簡単な方法は？"
---

> https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed
1. [x] ジョブに`languages`マトリックスを作成し、それを`github/codeql-action/init`アクションの`languages`入力パラメータで参照する
1. [ ] 各言語ごとに`github/codeql-action/analyze`アクションを別々のステップで呼ぶ
1. [ ] 各言語ごとに別ワークフローを作る
1. [ ] `github/codeql-action/analyze`アクションで並列処理を定義する