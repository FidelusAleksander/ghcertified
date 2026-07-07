---
question: "マルチ言語のリポジトリで各言語のCodeQL解析を並行して実行する最も簡単な方法は何ですか？"
documentation: "https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options#changing-the-languages-that-are-analyzed"
---

- [x] ジョブの`languages`マトリックスを作成し、それを`github/codeql-action/init`アクションの`languages`入力パラメータで参照します
- [ ] 各言語ごとに`github/codeql-action/analyze`アクションを個別のステップで呼び出します
- [ ] 各言語用に別々のワークフローを作成します
- [ ] `github/codeql-action/analyze`アクション内で並行処理を定義します
