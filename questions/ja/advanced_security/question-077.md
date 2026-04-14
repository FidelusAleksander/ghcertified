---
question: "複数のプログラミング言語を使用するリポジトリで、各言語についてCodeQL分析を並行して実行する最も簡単な方法は何ですか？"
documentation: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed"
---

- [x] ジョブの`languages`マトリックスを作成し、それを`github/codeql-action/init`アクションの`languages`入力パラメータで参照する
- [ ] 各言語について個別のステップで`github/codeql-action/analyze`アクションを呼び出す
- [ ] 各言語のために個別のワークフローを作成する
- [ ] `github/codeql-action/analyze`アクションで並行処理を定義する
