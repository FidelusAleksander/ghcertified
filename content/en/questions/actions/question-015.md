---
question: "Which matrix job definition is syntactically correct?"
title: "Question 015"
---


> https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy

1. [x] 
```yaml
  jobs:
    example_matrix:
      strategy:
        matrix:
          version: [10, 12, 14]
          os: [ubuntu-latest, windows-latest]
```

1. [ ] 
```yaml
  jobs:
    example_matrix:
      matrix:
        strategy:
          version: [10, 12, 14]
          os: [ubuntu-latest, windows-latest]
```

1. [ ] 
```yaml
  jobs:
    example_matrix:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

1. [ ] 
```yaml
  jobs:
    matrix:
      version: [10, 12, 14]
      os: [ubuntu-latest, windows-latest]
```
