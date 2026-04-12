---
question: "このワークフローは、以下の条件を満たすすべてのPull Requestで実行されます:"
documentation: "https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#example-including-and-excluding-branches"
---

```yaml
on:
  pull_request:
    branches:
      - 'release/**'
      - '!release/**-alpha'
```
- [x] 対象ブランチ名が `release` で始まり、`-alpha` で終わらない
- [ ] 対象ブランチ名が `release` で始まる
- [ ] ソースブランチ名が `release` で始まり、`-alpha` で終わらない
- [ ] ソースブランチ名が `release` で始まる
