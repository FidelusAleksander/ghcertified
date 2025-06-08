---
question: "In the following example, `workflow A` passes all of its secrets to `workflow B`, by using the inherit keyword. Then `workflow B` calls `workflow C`. Which statement regarding `secrets` is true for that example?"
title: "Question 040"
---


```yaml
  jobs:
    workflowA-calls-workflowB:
      uses: octo-org/example-repo/.github/workflows/B.yml@main
      secrets: inherit
```

```yaml
  jobs:
    workflowB-calls-workflowC:
      uses: different-org/example-repo/.github/workflows/C.yml@main
```
> https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-nested-workflows
1. [x] All secrets available to `workflow A` will be also available to `workflow B`, but not to `workflow C`
1. [ ] All secrets from `octo-org` organization and `octo-org/example-repo` repository will be available to `workflow B`, but not to `workflow C`
> Not all secrets from `octo-org` organization have to be made available to `octo-org/example-repo`.
1. [ ] All secrets available to `workflow A` will be also available to `workflow B` and `workflow C`
> `Workflow B` would need to add `secrets: inherit` when calling `workflow C`
1. [ ] Only repository and environment secrets available to `workflow A` will be available to `workflow B`, but not to `workflow C`. Organization scoped secrets cannot be inherited
