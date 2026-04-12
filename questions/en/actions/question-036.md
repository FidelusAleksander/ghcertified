---
question: "You defined a matrix job `example_matrix`. How can you limit the matrix to run a maximum of 2 jobs at a time?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel"
---

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
- [x] Set `jobs.example_matrix.strategy.max-parallel` to 2
- [ ] Set `jobs.example_matrix.strategy.concurrency` to 2
- [ ] Use GitHub's REST API to check if the job count is lesser than 2
- [ ] It's not possible, a matrix will always run all of the jobs in parallel if there are runners available
