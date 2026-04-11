---
question: "Workflowが最初に `commit A` で実行され失敗しました。次の `commit B` でWorkflowを修正しました。Workflowを再実行すると、どのCommitのコードで実行されますか？"
title: "質問 055"
---

> https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs#about-re-running-workflows-and-jobs
1. [x] `commit A` のコードで実行される
1. [ ] `commit B` のコードで実行される  
> Workflowの再実行では、元の実行をトリガーしたイベントと同じcommit SHAおよびGit refが使用される
1. [ ] GitHub ActionsではWorkflowを再実行できない。最新の変更でWorkflowを実行するには新たにトリガーする必要がある
1. [ ] `commit A` のコードと `commit B` のコードでそれぞれ1つずつ、合計2つのWorkflowがトリガーされる