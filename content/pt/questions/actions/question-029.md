```yaml
---
question: "Seu fluxo de trabalho de análise de Pull Request usa várias ferramentas de análise de código e leva cerca de 20 minutos para ser concluído. Ele é acionado no evento `pull_request` com o filtro `branches` definido como `master`. Portanto, se um desenvolvedor fizer push de vários commits em poucos minutos, vários fluxos de trabalho serão executados em paralelo. Como você pode parar todas as execuções de workflow anteriores e executar apenas aquele com as alterações mais recentes?"
title: "Pergunta 029"
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
  concurrency
