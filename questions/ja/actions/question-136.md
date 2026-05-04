---
question: "以下のマトリックスを使用しているワークフローがあります。マトリックス内のジョブが失敗した場合、進行中およびキューに入っている他のジョブをキャンセルしないようにするにはどうすればよいですか？"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idstrategyfail-fast"
---

```yaml
jobs:
  deploy:
    strategy:
      matrix:
        version: ["1", "1.2", "1.3"]
        os: [ubuntu-latest, windows-latest]
```

- [x] `jobs.<job_id>.strategy.fail-fast` を `false` に設定する
> `jobs.<job_id>.strategy.fail-fast` のデフォルト値は `true` です。したがって、1つのマトリックスジョブが失敗すると、進行中およびキューに入っている他のマトリックスジョブがキャンセルされます。この動作を回避するには、`fail-fast` を明示的に `false` に設定する必要があります。
- [ ] 何もする必要はありません。`jobs.<job_id>.strategy.fail-fast` のデフォルト設定は `false` です。
> `jobs.<job_id>.strategy.fail-fast` のデフォルト値は `true` です。
- [ ] `jobs.<job_id>.strategy.matrix.fail-fast` を `false` に設定する
> これは誤りです。`fail-fast` は `strategy` レベルの設定であり、`matrix` レベルではありません。`fail-fast` を `matrix` レベルで設定すると、それは[ジョブ構成](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations#adding-a-matrix-strategy-to-your-workflow-job)の一部として機能し、他のマトリックスジョブのキャンセルや継続には影響しません。
- [ ] 何もする必要はありません。`jobs.<job_id>.strategy.matrix.fail-fast` のデフォルト設定は `false` です。
> これは誤りです。`fail-fast` は `strategy` レベルの設定であり、`matrix` レベルではありません。
- [ ] この動作を強制する方法はありません。回避方法は存在しません。
