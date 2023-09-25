---
title: "Question 014"
date: 2023-08-21T10:35:03+02:00
draft: false
subject: []
---

# This code will launch 6 different jobs in parallel using the matrix strategy. Can You use the matrix strategy to parallelize entire workflows?

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
> https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-a-matrix-strategy-with-a-reusable-workflow
1. [ ] No
1. [x] Yes
