---
question: "Para executar um `step` somente se o segredo `MY_SECRET` tiver sido configurado, você pode:"
title: "Pergunta 068"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-secrets
1. [x] Configurar o segredo `MY_SECRET` como uma variável de ambiente no nível do job e, em seguida, referenciar essa variável de ambiente para executar condicionalmente aquele step
```yaml
  my-job:
    runs-on: ubuntu-latest
    env:
      my_secret: ${{ secrets.MY_SECRET }}
    steps:
      - if: ${{ env.my_secret != '' }}
```
1. [ ] Criando a seguinte condicional no nível do job
```yaml
  my-job:
    runs-on: ubuntu-latest
    if: ${{ secrets.MY_SECRET == '' }}
```
> segredos não podem ser diretamente
