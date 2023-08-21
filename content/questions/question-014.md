---
title: "Question 014"
date: 2023-08-21T10:35:03+02:00
draft: false
subject: []
---

# This is code will launch 6 different jobs in parallel using the matrix strategy. Can You use the matrix strategy to parallelize entire workflows?

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
> https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy
1. [x] No
1. [ ] Yes
