---
question: "GitHub ActionsでCodeQL分析を実行する場合、どのActionsを使用すべきですか？"
documentation: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/codeql-code-scanning-for-compiled-languages#about-the-codeql-analysis-workflow-and-compiled-languages"
---

- [x] `github/codeql-action/init`
- [x] `github/codeql-action/analyze`
- [x] `github/codeql-action/autobuild` （コンパイル型プログラミング言語の場合のみ）
- [ ] `github/codeql-action/autobuild`
- [ ] `github/codeql-action/init` （コンパイル型プログラミング言語の場合のみ）
- [ ] `github/codeql-action/analyze` （インタプリタ型プログラミング言語の場合のみ）
