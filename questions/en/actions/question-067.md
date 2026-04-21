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
> Incorrect, only `vars.MY_VAR` is evaluated inside `${{ }}`; the `== 'MY_VALUE'` part is left as literal text, so the result can be a non-empty string, which is truthy in an `if`
- [ ] It's not possible because configuration variables cannot be used in `if` conditionals
> That is true for `secrets` but not for configuration variables
- [ ] It's not possible because configuration variables cannot be used in job level `if` conditionals
> That is true for `secrets` but not for configuration variables
