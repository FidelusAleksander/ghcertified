---
question: "Which is the correct way of triggering a job only if configuration variable `MY_VAR` has the value of `MY_VALUE`?"
documentation: "https://docs.github.com/en/actions/learn-github-actions/contexts#example-usage-of-the-vars-context"
---

- [x] By creating the following conditional on job level
```yaml
my-job:
  if: ${{ vars.MY_VAR == 'MY_VALUE' }}
```
- [ ] By creating the following conditional on job level
```yaml
my-job:
  if: ${{ vars.MY_VAR }} == 'MY_VALUE'
```
> Incorrect, only `vars.MY_VAR` is evaluated inside `${{ }}`; this yields text like `some_value == 'MY_VALUE'`, and GitHub treats that non-empty string as truthy instead of performing the comparison
> See https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#literals
- [ ] It's not possible because configuration variables cannot be used in `if` conditionals
> That is true for `secrets` but not for configuration variables
- [ ] It's not possible because configuration variables cannot be used in job level `if` conditionals
> That is true for `secrets` but not for configuration variables
