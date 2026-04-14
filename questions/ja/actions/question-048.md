---
question: "`job2`というジョブが`job1`で作成されたアーティファクトを使用しています。そのため、`job1`が終了してからでないと、`job2`がアーティファクトを探し始めないようにすることが重要です。この依存関係をどのように作成しますか？"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds"
---

- [x] `job2`内で`needs`キーワードを使用して、この依存関係を作成する
- [ ] `actions/download-artifact`を使用して`job1`のアーティファクトをダウンロードする際に、この依存関係が暗黙的に作成される
- [ ] ワークフローの`.yaml`定義で`job1`の後に`job2`を定義することによって、この依存関係を作成する
- [ ] `job2`内で`concurrency`キーワードを使用して、この依存関係を作成する
