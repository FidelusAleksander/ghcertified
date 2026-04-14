---
question: "このコードはマトリックス戦略を使用して6つの異なるジョブを並列で起動します。マトリックス戦略を使用してワークフロー全体を並列化できますか？"
documentation: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-a-matrix-strategy-with-a-reusable-workflow"
---

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

- [x] Yes
- [ ] No
- [ ] Only if the workflows are in the same repository
- [ ] Only with self-hosted runners

