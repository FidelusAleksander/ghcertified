---
question: "Petra está criando um workflow cujo único job é chamado `post-merge`. Como ela pode configurar o job para ser acionado após um Pull Request ser mesclado?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#running-your-pull_request-workflow-when-a-pull-request-merges"
---

- [x] Especificar o tipo de atividade `pull_request` como `closed`, e usar uma condicional no nível do job para verificar se `github.event.pull_request.merged` é verdadeiro
```yaml
on:
    pull_request:
        types: [closed]

jobs:
    post-merge:
        if: github.event.pull_request.merged == true
``` 
> Para acionar um job de workflow quando um Pull Request for mesclado, você deve especificar tanto o tipo de atividade do Pull Request em `on:` quanto configurar uma condicional no nível do job.
- [ ] Especificar o tipo de atividade `pull_request` como `merged`, e usar uma condicional no nível do job para verificar se `github.event.pull_request.merged` é verdadeiro
```yaml
on:
    pull_request:
        types: [merged]
jobs:
    post-merge:
        if: github.event.pull_request.merged == true
``` 
> O evento `pull_request` não possui um tipo de atividade `merged`. Veja a seção "pull_request" da documentação vinculada para conhecer os tipos de atividade válidos para `pull_request`.
- [ ] Especificar o tipo de atividade `pull_request` como `merged` (sem necessidade de condicional no nível do job)
```yaml
on:
    pull_request:
        types: [merged]
jobs:
    post-merge:
``` 
> O evento `pull_request` não possui um tipo de atividade `merged`.
- [ ] Especificar o tipo de atividade `pull_request` como `closed` (sem necessidade de condicional no nível do job)
```yaml
on:
    pull_request:
        types: [closed]
jobs:
    post-merge:
``` 
> Pull Requests podem ser fechados sem serem mesclados. Se você não usar uma condicional correspondente no nível do job que verifica se o PR foi mesclado, então o job será acionado toda vez que um PR for fechado, não apenas quando ocorrer a mesclagem.
- [ ] Especificar o tipo de atividade `pull_request` como `closed` e usar uma condicional no nível do job para verificar se `github.ref` é igual ao branch de mesclagem do Pull Request.
```yaml
on:
    pull_request:
        types: [closed]
jobs:
    post-merge: 
        if: ${{ github.ref == github.event.pull_request.base.ref }}
``` 
> Após um Pull Request ser mesclado, `github.ref` será o *ref totalmente formado* do branch de mesclagem (ex. `refs/heads/main`), e não apenas o nome do branch de mesclagem (ex. `main`).
