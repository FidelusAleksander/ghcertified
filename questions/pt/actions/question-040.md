---
question: "No seguinte exemplo, `workflow A` passa todos os seus segredos para `workflow B` usando a palavra-chave inherit. Então `workflow B` chama `workflow C`. Qual declaração sobre `secrets` é verdadeira para esse exemplo?"
documentation: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-nested-workflows"
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
- [x] Todos os segredos disponíveis para `workflow A` também estarão disponíveis para `workflow B`, mas não para `workflow C`
- [ ] Todos os segredos da organização `octo-org` e do repositório `octo-org/example-repo` estarão disponíveis para `workflow B`, mas não para `workflow C`
> Nem todos os segredos da organização `octo-org` precisam estar disponíveis para `octo-org/example-repo`.
- [ ] Todos os segredos disponíveis para `workflow A` também estarão disponíveis para `workflow B` e `workflow C`
> `Workflow B` precisaria adicionar `secrets: inherit` ao chamar `workflow C`
- [ ] Apenas os segredos do repositório e do ambiente disponíveis para `workflow A` estarão disponíveis para `workflow B`, mas não para `workflow C`. Segredos no escopo da organização não podem ser herdados
