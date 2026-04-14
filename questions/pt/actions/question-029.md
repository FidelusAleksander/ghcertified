---
question: "Seu workflow de análise de Pull Request utiliza múltiplas ferramentas de análise de código e leva cerca de 20 minutos para ser totalmente concluído. Ele é acionado no evento `pull_request` com o filtro `branches` definido como `master`. Portanto, se um desenvolvedor enviar múltiplos commits dentro de poucos minutos, vários workflows serão executados em paralelo. Como você pode interromper todas as execuções de workflow anteriores e executar apenas a que contém as alterações mais recentes?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run"
---

- [x] Use concurrency with cancel-in-progress
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
> Isso colocaria as execuções na fila para esse github ref. Não interromperia execuções anteriores

- [ ] Use activity types filter
```yaml
on:
  pull_request:
    branches:
      - master
    types: [latest]
```
> Não existe tal tipo de atividade como `latest` para o evento pull_request
- [ ] Use cancel-in-progress flag for `pull_request` event
```yaml
on:
  pull_request:
    branches:
      - master
    cancel-in-progress: true
```
