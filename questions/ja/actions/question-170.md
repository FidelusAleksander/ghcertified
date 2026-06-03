---
question: "以下のワークフロージョブに示されている `runs-on` キーの値について観察してください。このジョブの実行に関して正しいのはどれですか？"
documentation: "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/use-in-a-workflow#using-custom-labels-to-route-jobs"
---
```yaml
jobs:
    fire_emblem_deploy:
        name: "Deploy the 'Fire Emblem' application"
        runs-on: [self-hosted,nes,linux]
```

- [x] ジョブは、すべてのラベルが適用されたセルフホステッドランナー上で実行されます。
- [ ] ジョブは、いずれかのラベルが適用されたセルフホステッドランナー上で実行されます。
> ランナーラベルは累積的に適用されます。ワークフローは一部のラベルしか持たないランナー上では実行されません。すべてのラベルが必要です。
- [ ] ジョブは、GitHub ホステッドランナーでも実行可能です。なぜなら、それらにカスタムラベルを適用できるからです。
> GitHub ホステッドランナーにはカスタムラベルを適用することはできません。それらは、割り当てられた[事前定義済みラベル](https://docs.github.com/en/enterprise-cloud@latest/actions/how-tos/write-workflows/choose-where-workflows-run/choose-the-runner-for-a-job#standard-github-hosted-runners-for-public-repositories)を使用して参照する必要があります。
- [ ] ジョブは、`self-hosted,nes,linux`という名前のセルフホステッドまたはGitHubホステッドランナー（どちらが先に利用可能か）上で実行されます。
> `runs-on` はランナーの名前ではなくラベルを指します。
