---
question: "オープンソースで公開されているRepositoryに`pull_request`イベントトリガーを持つWorkflowがあります。このRepositoryのForkからトリガーされたWorkflow実行に承認を必須とするにはどうしますか？"
title: "質問 059"
---

> https://docs.github.com/en/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks#about-workflow-runs-from-public-forks
1. [x] RepositoryでFork実行に対する必須承認を設定する
1. [ ] Repositoryにデプロイ保護ルールを設定する  
> デプロイ保護ルールはEnvironment保護用
1. [ ] RepositoryにBranch保護ルールを設定する
1. [ ] `pull_request`イベントを使用する場合、ForkからのWorkflowはトリガーされない。これを行うには`fork_pull_request`イベントトリガーと`require-approval`フラグを使用する必要がある