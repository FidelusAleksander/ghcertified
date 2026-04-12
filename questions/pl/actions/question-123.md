---
question: "Co należy dodać do `actions/checkout`, jeśli `my-org/my-private-repo` jest prywatnym repozytorium różniącym się od tego, które zawiera bieżący workflow?"
documentation: "https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#example-using-an-action-inside-a-different-private-repository-than-the-workflow"
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

- [x] Utwórz GitHub secret `MY_ACCESS_TOKEN`
```yaml
with:
    repository: my-org/my-private-repo
    path: ./.github/actions/my-org/my-private-repo
    token: ${{ secrets.MY_ACCESS_TOKEN }}
```

- [ ] Utwórz parametr wejściowy `MY_ACCESS_TOKEN`
```yaml
with:
    repository: my-org/my-private-repo
    path: ./.github/actions/my-org/my-private-repo
    token: ${{ MY_ACCESS_TOKEN }}
```

- [ ] Zmienna środowiskowa `GITHUB_TOKEN`
```yaml
with:
    repository: my-org/my-private-repo
    path: ./.github/actions/my-org/my-private-repo
    token: $GITHUB_TOKEN
```

- [ ] Pozostaw bez zmian, ponieważ tokeny dostępu zostaną przekazane automatycznie
```yaml
with:
    repository: my-org/my-private-repo
    path: ./.github/actions/my-org/my-private-repo
```
