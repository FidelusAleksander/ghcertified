---
question: "複数のジョブを持ち、すべてがGitHub-hosted runner上で実行されるWorkflowでは、すべてのジョブが同じRunnerマシン上で実行されることが保証されますか？"
title: "質問 075"
---

> https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job#choosing-github-hosted-runners
1. [x] No
1. [ ] Yes  
> 各ジョブは、`runs-on`で指定されたRunnerイメージの新しいインスタンスで実行される