---
question: "This workflow will run on all pull requests where:"
title: "Question 018"
---

```yaml
on:
  pull_request:
    branches:
      - 'release/**'
      - '!release/**-alpha'
```
> https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#example-including-and-excluding-branches
1. [x] the target branch name starts with `release` but does not end with `-alpha`
1. [ ] the target branch name starts with `release`
1. [ ] the source branch name starts with `release` but does not end with `-alpha`
1. [ ] the source branch name starts with `release`
