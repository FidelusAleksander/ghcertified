---
question: "You are writing a reusable workflow which has `branch_name` as an input. How can you conditionally run a step in that workflow if the branch begins with 'smoke-test'?"
documentation: "TODO"
---

- [ ] 
```yaml
    if: startsWith(inputs.branch_name, 'smoke-test')
```
> Note: `ACTIONS_RUNNER_DEBUG` can be set as a secret or variable at organization-level or repository-level.
- [ ] 
- [ ]
```yaml
on:
  workflow_call:
    branches:
        - 'smoke-test/**'
```
> `branches` is not a child of `workflow_call`. Furthermore, `workflow_call` is at workflow-level; items at this level cannot directly cause a step to run/not run.
- [ ]
> `runner-diagnostic-logs` is the name of the folder Github generates when `ACTIONS_RUNNER_DEBUG` is enabled. To avoid potential confusion, a folder with this name should not be created anywhere else. 
- [ ] Renaming the `_diag` directory of a self-hosted runner to `runner-diagnostic-logs`
> Renaming the `_diag` directory should never be done as this can potentially effect logging activities.