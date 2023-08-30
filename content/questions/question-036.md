---
title: "Question 036"
date: 2023-08-30T15:45:57+02:00
draft: false
subject: []
---

# You defined a matrix job `example_matrix`. How can limit the matrix to run a maximum of 2 jobs at the same time?

```yaml
  jobs:
    example_matrix:
      strategy:
        matrix:
          version: [10, 12, 14]
          os: [ubuntu-latest, windows-latest]
```
> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel
1. [x] Set jobs.example_matrix.strategy.max-parallel to 2
1. [ ] Set jobs.example_matrix.strategy.concurrency to 2
1. [ ] Use Github's REST API to check if the job count is lesser than 2
1. [ ] It's not possible, a matrix will always run all of the jobs in parallel if there are runners available
