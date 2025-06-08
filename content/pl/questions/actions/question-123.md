---
question: "Co należy dodać do `actions/checkout`, jeśli `my-org/my-private-repo` jest prywatnym repozytorium różniącym się od tego, które zawiera obecny workflow?"
title: "Pytanie 123"
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

1. [x] Utwórz sekret GitHub `MY_ACCESS_TOKEN`
```yaml
with:
    repository: my-org/my-private-repo
    path: ./.github/actions/my-org/my-private-repo
    token: ${{ secrets.MY_ACCESS_TOKEN }}
```

1. [ ] Utwórz wejście `MY_ACCESS_TOKEN`
```yaml
with:
    repository: my-org/my-private-repo
    path: ./.github/actions/my-org/my-private-repo
    token: ${{ MY_ACCESS_TOKEN }}
```

1. [ ] Zmienna środowiskowa `GITHUB_TOKEN`
```yaml
with:
    repository: my-org/my-private-repo
    path: ./.github/actions/my-org/my-private-repo
    token: $GITHUB_TOKEN
```

1. [ ] Pozostaw bez zmian, ponieważ tokeny dostępowe będą przekazywane automatycznie
```yaml
with:
    repository: my-org/my-private-repo
    path: ./.github/actions/my-org/my-private-repo
```
