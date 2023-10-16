---
title: "Question 068"
draft: false
subject: []
---

# To run a `step` only if the secret `MY_SECRET` has been set, You can:
> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-secrets
1. [x] Set the secret `MY_SECRET` as a job level environment variable, then reference that environment variable to conditionally run that step
```yaml
  my-job:
    runs-on: ubuntu-latest
    env:
      my_secret: ${{ secrets.MY_SECRET }}
    steps:
      - if: ${{ env.my_secret != '' }}
```
1. [ ] By creating the following conditional on job level
```yaml
  my-job:
    runs-on: ubuntu-latest
    if: ${{ secrets.MY_SECRET == '' }}
```
> secrets cannot be directly referenced in if: conditionals
1. [ ] By creating the following conditional on step level
```yaml
  my-job:
    runs-on: ubuntu-latest
    steps:
      - if: ${{ secrets.MY_SECRET == '' }}
```
> secrets cannot be directly referenced in if: conditionals
1. [ ] By creating the following conditional on step level
```yaml
  my-job:
    runs-on: ubuntu-latest
    steps:
      - if: ${{ secrets.MY_SECRET }}
```
> secrets cannot be directly referenced in if: conditionals
