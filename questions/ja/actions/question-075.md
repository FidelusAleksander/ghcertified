---
question: "複数のジョブを持つワークフローで、すべてのジョブがGitHubホストランナー上で実行される場合、すべてのジョブが同じランナーマシンで実行されることが保証されているのは本当ですか？"
documentation: "https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job#choosing-github-hosted-runners"
---

- [x] いいえ
- [ ] はい
> 各ジョブは、runs-onで指定されたランナーイメージの新しいインスタンスで実行されます
- [ ] 並列で実行される場合のみ
> 各ジョブは、runs-onで指定されたランナーイメージの新しいインスタンスで実行されます
- [ ] 同じ `runs-on` ラベルを使用する場合のみ
> 各ジョブは、runs-onで指定されたランナーイメージの新しいインスタンスで実行されます
