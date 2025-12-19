---
question: "Which is the correct way of triggering a job only if configuration variable `MY_VAR` has the value of `MY_VALUE`?"
title: "Question 067"
---

> https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/accessing-contextual-information-about-workflow-runs#vars-context
1. [x] By creating the following conditional on job level
```yaml
  my-job:
    if: ${{ vars.MY_VAR == 'MY_VALUE' }}
```
1. [ ] By creating the following conditional on job level
```yaml
  my-job:
    if: ${{ vars.MY_VAR }} == 'MY_VALUE'
```
> This will always be evaluate to True
1. [ ] It's not possible because configuration variables cannot be used in `if` conditionals
> That is true for `secrets` but not for configuration variables
1. [ ] It's not possible because configuration variables cannot be used in job level `if` conditionals
> That is true for `secrets` but not for configuration variables
