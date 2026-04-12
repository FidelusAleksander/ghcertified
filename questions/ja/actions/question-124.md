---
question: "次の構成に基づいて、このマトリックスが評価された場合、GitHub Actions はいくつのジョブを実行しますか？"
documentation: "https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/running-variations-of-jobs-in-a-workflow#expanding-or-adding-matrix-configurations"
---

```yaml
strategy:
  matrix:
    os: [ubuntu-latest, windows-latest]
    node: [14, 16]
    include:
      - os: macos-latest
        node: 18
      - os: ubuntu-latest
        node: 14
```

- [ ] 4 jobs
- [x] 5 jobs
- [ ] 6 jobs
- [ ] 7 jobs
- [ ] ジョブは実行されません。この構文は無効です。

