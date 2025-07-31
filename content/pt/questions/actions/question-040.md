---
question: "No exemplo a seguir, `workflow A` passa todos os seus segredos para `workflow B`, utilizando a palavra-chave inherit. Em seguida, `workflow B` chama `workflow C`. Qual afirmação sobre os `secrets` é verdadeira para esse exemplo?"
title: "Pergunta 040"
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
1. [x] Todos os segredos disponíveis para o `workflow A` também estarão disponíveis para o `workflow B`, mas não para o `workflow C`.
1. [ ] Todos os segredos da organização `octo-org` e do repositório `octo-org/example-repo` estarão disponíveis para o `workflow B`, mas não para o `workflow C`.
> Nem todos os segredos da organização `octo-org` precisam ser disponibilizados para o `octo-org/example-repo`.
1. [ ] Todos os segredos disponíveis para o `workflow A` também estarão disponíveis para o `workflow B` e para o `workflow C`.
> O `workflow B` precisaria adicionar `secrets: inherit` ao chamar o `workflow C`.
1. [ ] Apenas os segredos de repositório e ambiente disponíveis para o `workflow A` estarão disponíveis para o `workflow B`, mas não para o `workflow C`. Segredos com escopo de organização não podem ser herdados.
