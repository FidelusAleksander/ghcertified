---
question: "No exemplo a seguir, `workflow A` passa todos os seus segredos para `workflow B`, usando a palavra-chave inherit. Em seguida, `workflow B` chama `workflow C`. Qual afirmação sobre `secrets` é verdadeira para esse exemplo?"
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
1.
