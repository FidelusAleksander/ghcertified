---
title: "質問 079"
question: "GitHub ActionsでスケジュールされたWorkflowは、どのCommitとBranch上で実行されますか？"
---

> https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule

1. [ ] スケジュールされたWorkflowは、最後に変更されたBranch上の特定のCommitで実行される  
   > 誤り。特定のCommitと最後に変更されたBranchの両方
1. [ ] スケジュールされたWorkflowは、main Branch上の特定のCommitで実行される  
   > 誤り。特定のCommitとmain Branchの両方
1. [x] スケジュールされたWorkflowは、RepositoryのデフォルトBranch上の最新のCommitで実行される
1. [ ] スケジュールされたWorkflowは、main Branch上の最新のCommitで実行される  
   > 最新のCommitは正しいが、main Branchとは限らない