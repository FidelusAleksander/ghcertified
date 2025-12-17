---
question: "複数のジョブが含まれるワークフローで、すべてがGitHubホストランナー上で実行されている場合、すべてのジョブが同じランナーマシンで実行されることが保証されていますか？"
title: "質問 075"
---

> https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job#choosing-github-hosted-runners
1. [x] いいえ
1. [ ] はい
> 各ジョブは、runs-onで指定されたランナーイメージの新しいインスタンスで実行されます
1. [ ] 並列で実行される場合のみ
> 各ジョブは、runs-onで指定されたランナーイメージの新しいインスタンスで実行されます
1. [ ] 同じ `runs-on` ラベルを使用する場合のみ
> 各ジョブは、runs-onで指定されたランナーイメージの新しいインスタンスで実行されます
