---
question: "O que deve ser adicionado ao `actions/checkout` se `my-org/my-private-repo` for um repositório privado diferente do repositório que contém o fluxo de trabalho atual?"
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

> https://docs.github.com/pt/actions/writing-workflows/workflow-syntax-for-github-actions#exemplo-de-uso-de-uma-action-dentro-de-um-repositório-privado-diferente-do-fluxo-de-trabalho

1. [x] Criar um segredo no GitHub `MY
