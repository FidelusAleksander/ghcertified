---
question: "Seu fluxo de trabalho de análise de Pull Request usa várias ferramentas de análise de código e leva cerca de 20 minutos para ser concluído completamente. Ele é acionado no evento `pull_request` com o filtro `branches` definido para `master`. Portanto, se um desenvolvedor enviar vários commits em poucos minutos, vários fluxos de trabalho são executados em paralelo. Como você pode parar todas as execuções de fluxo de trabalho anteriores e executar apenas aquele com as alterações mais recentes?"
title: "Question 029"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run

1. [x] Use concorrência com cancelamento em andamento
```yaml
  concurrency:
    group: ${{ github.workflow }}-${{ github.ref }}
    cancel-in-progress: true
```
1. [ ] Use concorrência
```yaml
  concurrency:
    group: ${{ github.ref }}
```
> Isso enfileiraria execuções nesse github ref. Não interromperá execuções anteriores

1. [ ] Use filtro de tipos de atividade
```yaml
  on:
    pull_request:
      branches:
        - master
      types: [latest]
```
> Não existe tal tipo de atividade como `latest` para o evento pull_request

1. [ ] Use a flag de cancelamento em progresso para o evento `pull_request`
```yaml
  on:
    pull_request:
      branches:
        - master
      cancel-in-progress: true
```
