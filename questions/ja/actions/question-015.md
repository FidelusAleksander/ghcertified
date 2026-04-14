---
question: "どのマトリックスジョブの定義が構文的に正しいですか？"
documentation: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy"
---

- [x] 
```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

- [ ] 
```yaml
jobs:
  example_matrix:
    matrix:
      strategy:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

- [ ] 
```yaml
jobs:
  example_matrix:
    matrix:
      version: [10, 12, 14]
      os: [ubuntu-latest, windows-latest]
```

- [ ] 
```yaml
jobs:
  matrix:
    version: [10, 12, 14]
    os: [ubuntu-latest, windows-latest]
```
