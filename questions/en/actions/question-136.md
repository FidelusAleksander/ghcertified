---
question: "You have a workflow that uses the matrix below. If a job in the matrix fails, how can you ensure other in-progress and queued jobs in the matrix are not cancelled?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idstrategyfail-fast"
---

```yaml
jobs:
  deploy:
    strategy:
      matrix:
        version: ["1", "1.2", "1.3"]
        os: [ubuntu-latest, windows-latest]
```

- [x] Set `jobs.<job_id>.strategy.fail-fast` to `false`
> `jobs.<job_id>.strategy.fail-fast` is set to `true` by default, meaning if one matrix job fails, other in-progress and queued matrix jobs will be cancelled. You must explicitly set `fail-fast` to `false` to avoid this behavior. 
- [ ] Nothing needs to be done, since `jobs.<job_id>.strategy.fail-fast` has a default setting of `false`
> `jobs.<job_id>.strategy.fail-fast` is set to `true` by default.
- [ ] Set `jobs.<job_id>.strategy.matrix.fail-fast` to `false`
> This is incorrect, `fail-fast` is at `strategy` level, not `matrix` level. If you set `fail-fast` at `matrix` level, it would function as part of the [job configuration](https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/run-job-variations#adding-a-matrix-strategy-to-your-workflow-job) and not effect the cancellation/continuation of other matrix jobs.
- [ ] Nothing needs to be done, since `jobs.<job_id>.strategy.matrix.fail-fast` has a default setting of `false`
> This is incorrect, `fail-fast` is at `strategy` level, not `matrix` level. 
- [ ] There is no way to enforce this behavior, it cannot be worked around.