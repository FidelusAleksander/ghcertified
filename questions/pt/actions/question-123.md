---
question: "O que deve ser adicionado ao `actions/checkout` se `my-org/my-private-repo` for um repositório privado diferente do que contém o workflow atual?"
title: "Pergunta 123"
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

1. [x] Criar um segredo do GitHub `MY_ACCESS_TOKEN`
```yaml
with:
    repository: my-org/my-private-repo
    path: ./.github/actions/my-org/my-private-repo
    token: ${{ secrets.MY_ACCESS_TOKEN }}
```

1. [ ] Criar uma entrada `MY_ACCESS_TOKEN`
```yaml
with:
    repository: my-org/my-private-repo
    path: ./.github/actions/my-org/my-private-repo
    token: ${{ MY_ACCESS_TOKEN }}
```

1. [ ] A variável ambiental `GITHUB_TOKEN`
```yaml
with:
    repository: my-org/my-private-repo
    path: ./.github/actions/my-org/my-private-repo
    token: $GITHUB_TOKEN
```

1. [ ] Deixar como está, pois os tokens de acesso serão passados automaticamente
```yaml
with:
    repository: my-org/my-private-repo
    path: ./.github/actions/my-org/my-private-repo
```
