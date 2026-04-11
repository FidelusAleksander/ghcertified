---
question: "`job2` が `job1` で作成されたArtifactsを使用しています。そのため、`job1` が完了してから `job2` がArtifactsを探し始めるようにする必要があります。この依存関係はどのように作成しますか？"
title: "質問 048"
---


> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds

1. [x] `job2` で `needs` キーワードを使用して依存関係を作成する
1. [ ] `job1` からArtifactをダウンロードするために `actions/download-artifact` を使用すると、この依存関係は暗黙的に作成される
1. [ ] Workflowの `.yaml` 定義で `job1` の後に `job2` を定義して依存関係を作成する
1. [ ] `job2` で `concurrency` キーワードを使用して依存関係を作成する