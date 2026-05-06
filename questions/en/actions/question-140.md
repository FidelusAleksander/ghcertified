---
question: "You are writing a reusable workflow which has `branch-name` as an input. How can you conditionally run a step in that workflow if the branch name begins with 'smoke-test'?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#startswith"
---

- [x] Use the built-in `startsWith` method in combination with `jobs.<job_id>.steps[*].if`
```yaml
    if: startsWith(inputs.branch-name, 'smoke-test')
```

- [ ] Use the built-in `startsWith` method in combination with `jobs.<job_id>.steps[*].if`
```yaml
    if: inputs.branch-name.startsWith('smoke-test')
``` 
> You cannot use method chaining with Github Actions built-in methods. Almost all built-in methods are written in the style of `methodName(arg1,arg2,...)` 
- [ ] Use the `branches` filter under `workflow_call`
```yaml
on:
  workflow_call:
    branches:
        - 'smoke-test/**'
```
> `branches` is not a child of `workflow_call`. Furthermore, `workflow_call` is at workflow-level; items at this level cannot directly cause a step to run/not run.

- [ ] Use shell conditionals in combination with `jobs.<job_id>.steps[*].if`
```yaml
    if: [[ "${{inputs.branch-name}}" == "smoke-test"* ]]
```
> Only supported Github Actions contexts and expressions can be used in `jobs.<job_id>.steps[*].if` conditonals. 