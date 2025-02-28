---
question: "Seu workflow de análise de Pull Request usa várias ferramentas de análise de código e leva cerca de 20 minutos para ser concluído. Ele é acionado no evento `pull_request` com o filtro `branches` definido para `master`. Portanto, se um desenvolvedor fizer vários commits em poucos minutos, vários workflows serão executados em paralelo. Como você pode parar todas as execuções de workflow anteriores e executar apenas a última com as mudanças mais recentes?"
archetype: "questions"
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
> Isso colocaria as execuções em fila nesse github ref. Não irá parar execuções anteriores

1. [ ] Use filtro de tipos de atividade
```yaml
  on:
    pull_request:
      branches:
        - master
      types: [latest]
```
> Não existe tal tipo de atividade como `latest` para o evento pull_request
1. [ ] Use a flag cancel-in-progress para o evento `pull_request`
```yaml
  on:
    pull_request:
      branches:
        - master
      cancel-in-progress: true
```
