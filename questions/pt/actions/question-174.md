---
question: "O seguinte workflow chama um workflow reutilizável em um de seus jobs. O workflow reutilizável possui `permissions` definidas no nível do workflow, conforme mostrado abaixo. Qual será o resultado de chamar o workflow reutilizável?"
documentation: "https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows"
---

```yaml
# workflow chamador
on:
    issues:
        types: [opened]
    
    permissions:
        contents: write

    jobs:
        issue_creator:
            permissions:
                contents: read
            uses: ./.github/workflows/issue-creator.yml

# workflow reutilizável (issue-creator.yml)
on:
    workflow_call:

    permissions:
        contents: write

    jobs:
        create_issue:
            runs-on: ubuntu-latest
            steps: 
                env: GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}    
                - run: gh issue create --title "Issue report" --body "Hello!" --repo $GITHUB_REPOSITORY

```
- [x] O workflow reutilizável retornará um erro, pois o job que o chamou possui apenas permissões de `contents:read`
> Nesse cenário, o workflow chamador é acionado, mas seu job não será executado. Em vez disso, será gerado um erro dizendo que o arquivo de workflow chamador não é válido, pois o workflow reutilizável está solicitando permissões `contents: write`, mas tem apenas permissões `contents: read`.
- [ ] O workflow reutilizável criará um issue no repositório com o título `"Issue Report"`
> Isso ocorreria se o job `issue_creator` tivesse permissões de `contents:write`, que seriam herdadas pelo workflow reutilizável.
- [ ] O workflow reutilizável não será chamado, pois workflows reutilizáveis devem estar em uma subpasta de `.github/workflows`
> Todos os workflows devem estar localizados no diretório `.github/workflows`.
- [ ] Tanto o workflow chamador quanto o workflow reutilizável não serão chamados, porque `issues` não é um gatilho válido para GitHub Actions.
> `issues` é um evento padrão de gatilho, conforme visto na [documentação](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#issues)
