---
question: "In what ways can you enable runner diagnostic logging?"
documentation: "https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging#enabling-runner-diagnostic-logging"
---

- [x] Setting a secret or variable named `ACTIONS_RUNNER_DEBUG` to `true`
> Note: This secret or variable can be defined at organization or repository level.
- [x] Re-running a workflow with `Enable debug logging enabled`
- [] By adding a `runner-diagnostic-logs` top-level folder to the workflow's repository
> `runner-diagnostic-logs` is the name of the folder Github generates when `ACTIONS_RUNNER_DEBUG` is enabled. To avoid potential confusion, a folder with this name should not be created anywhere else. 
- [] By adding a `runner-diagnostic-logs` subfolder to the `_diag` directory of the self-hosted runner being used
> `runner-diagnostic-logs` is the name of the folder Github generates when `ACTIONS_RUNNER_DEBUG` is enabled. To avoid potential confusion, a folder with this name should not be created anywhere else. 
- [] Renaming the `_diag` directory of a self-hosted runner to `runner-diagnostic-logs`
> Renaming the `_diag` directory should never be done as this can potentially effect logging activities.