---
question: "Seu fluxo de trabalho de análise de Pull Request utiliza várias ferramentas de análise de código e leva cerca de 20 minutos para ser concluído completamente. Ele é acionado no evento `pull_request` com o filtro `branches` configurado para `master`. Portanto, se um desenvolvedor fizer vários commits em poucos minutos, vários fluxos de trabalho serão executados em paralelo. Como você pode interromper todas as execuções anteriores do fluxo de trabalho e executar apenas aquela com as alterações mais recentes?"
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
> Isso colocaria as execuções na fila para aquele github ref. Não interromperia as execuções anteriores.

- [ ] Use activity types filter
```yaml
on:
  pull_request:
    branches:
      - master
    types: [latest]
```
> Não existe tal tipo de atividade como `latest` para o evento pull_request.

- [ ] Use cancel-in-progress flag para o evento `pull_request`
```yaml
on:
  pull_request:
    branches:
      - master
    cancel-in-progress: true
```
> `cancel-in-progress` só pode ser usado dentro de um bloco `concurrency`. Não é uma chave válida para `pull_request`.
