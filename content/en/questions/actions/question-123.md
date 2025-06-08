---
question: "What must be added to `actions/checkout` if `my-org/my-private-repo` is a private repository differing from the one containing the current workflow?"
title: "Question 123"
---

```yaml
name: deploy-workflow
on: [push]
jobs:
    my-job:
        runs-on: ubuntu-latest
        steps:
          - name: "Checkout GitHub Action"
            uses: actions/checkout@v4
            with:
               repository: my-org/my-private-repo
               path: ./.github/actions/my-org/my-private-repo
```

> https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#example-using-an-action-inside-a-different-private-repository-than-the-workflow

1. [x] Create a GitHub secret `MY_ACCESS_TOKEN`
```yaml
with:
    repository: my-org/my-private-repo
    path: ./.github/actions/my-org/my-private-repo
    token: ${{ secrets.MY_ACCESS_TOKEN }}
```

1. [ ] Create an input `MY_ACCESS_TOKEN`
```yaml
with:
    repository: my-org/my-private-repo
    path: ./.github/actions/my-org/my-private-repo
    token: ${{ MY_ACCESS_TOKEN }}
```

1. [ ] The environmental variable `GITHUB_TOKEN`
```yaml
with:
    repository: my-org/my-private-repo
    path: ./.github/actions/my-org/my-private-repo
    token: $GITHUB_TOKEN
```

1. [ ] Leave as is since access tokens will be passed automatically
```yaml
with:
    repository: my-org/my-private-repo
    path: ./.github/actions/my-org/my-private-repo
```
