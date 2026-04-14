---
question: "再利用可能なワークフロー `build` がZIPファイルのアーティファクトを作成します。このZIPファイルの場所を、`build` ワークフローを呼び出す呼び出し元ワークフローへどのように渡しますか？"
documentation: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow"
---

- [x] `build` ワークフロー内でワークフローレベルの出力を定義します
- [x] `build` ワークフロー内でジョブレベルの出力を定義します
- [x] `build` ワークフロー内のステップの1つで、出力を `$GITHUB_OUTPUT` に書き込みます
- [ ] すべての出力は自動的に呼び出し元ワークフローに渡されます

