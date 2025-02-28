---
question: "No exemplo a seguir, o `workflow A` passa todos os seus secrets para o `workflow B`, usando a palavra-chave inherit. Então o `workflow B` chama o `workflow C`. Qual afirmação sobre `secrets` é verdadeira para esse exemplo?"
archetype: "questions"
title: "Questão 040"
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
1. [x] Todos os secrets disponíveis para o `workflow A` também estarão disponíveis para o `workflow B`, mas não para o `workflow C`
1. [ ] Todos os secrets da organização `octo-org` e do repositório `octo-org/example-repo` estarão disponíveis para o `workflow B`, mas não para o `workflow C`
> Nem todos os secrets da organização `octo-org` precisam estar disponíveis para `octo-org/example-repo`.
1. [ ] Todos os secrets disponíveis para o `workflow A` também estarão disponíveis para o `workflow B` e `workflow C`
> O `workflow B` precisaria adicionar `secrets: inherit` ao chamar o `workflow C`
1. [ ] Apenas os secrets do repositório e do ambiente disponíveis para o `workflow A` estarão disponíveis para o `workflow B`, mas não para o `workflow C`. Secrets no escopo da organização não podem ser herdados
