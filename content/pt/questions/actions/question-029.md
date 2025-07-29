---
question: "O fluxo de trabalho de análise do seu Pull Request usa várias ferramentas de análise de código e leva cerca de 20 minutos para ser concluído completamente. Ele é acionado no evento `pull_request` com o filtro `branches` configurado para `master`. Portanto, se um desenvolvedor enviar múltiplos commits em poucos minutos, vários fluxos de trabalho serão executados em paralelo. Como você pode interromper todas as execuções anteriores do fluxo de trabalho e executar apenas a mais recente com as alterações mais atuais?"
title: "Questão 029"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run

1. [x] Use concurrency com cancel-in-progress
```yaml
  concurrency:
    group: ${{ github.workflow }}-${{ github.ref }}
    cancel-in-progress: true
```
1. [ ] Use concurrency
```yaml
  concurrency:
    group: ${{ github.ref }}
```
> Isso colocaria as execuções na fila para aquele github ref. Não interromperá as execuções anteriores.

1. [ ] Use filtro de tipos de atividade
```yaml
  on:
    pull_request:
      branches:
        - master
      types: [latest]
```
> Não existe um tipo de atividade chamado `latest` para o evento pull_request.

1. [ ] Use a flag cancel-in-progress para o evento `pull_request`
```yaml
  on:
    pull_request:
      branches:
        - master
      cancel-in-progress: true
```
