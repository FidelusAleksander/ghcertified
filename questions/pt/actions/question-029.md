---
question: "Seu fluxo de trabalho de análise de Pull Request usa várias ferramentas de análise de código e leva cerca de 20 minutos para ser concluído totalmente. Ele é acionado no evento `pull_request` com o filtro `branches` definido como `master`. Portanto, se um desenvolvedor fizer vários commits em poucos minutos, vários fluxos de trabalho serão executados em paralelo. Como você pode interromper todas as execuções de fluxo de trabalho anteriores e executar apenas aquela com as alterações mais recentes?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run"
---

- [x] Use concurrency com cancel-in-progress
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
- [ ] Use concurrency
```yaml
concurrency:
  group: ${{ github.ref }}
```
> Isso colocaria as execuções na fila para esse github ref. Ele não interromperá execuções anteriores.

- [ ] Use filtro de tipos de atividade
```yaml
on:
  pull_request:
    branches:
      - master
    types: [latest]
```
> Não existe um tipo de atividade chamado `latest` para o evento pull_request.

- [ ] Use a flag cancel-in-progress para o evento `pull_request`
```yaml
on:
  pull_request:
    branches:
      - master
    cancel-in-progress: true
```
> `cancel-in-progress` só pode ser usado dentro de um bloco `concurrency`. Não é uma chave válida para `pull_request`.
