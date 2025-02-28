---
question: "Para executar um `step` apenas se o secret `MY_SECRET` tiver sido definido, você pode:"
archetype: "questions"
title: "Questão 068"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-secrets
1. [x] Definir o secret `MY_SECRET` como uma variável de ambiente no nível do job, depois referenciar essa variável de ambiente para condicionalmente executar esse step
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
> secrets não podem ser referenciados diretamente em condicionais if:
1. [ ] Criando a seguinte condicional no nível do step
```yaml
  my-job:
    runs-on: ubuntu-latest
    steps:
      - if: ${{ secrets.MY_SECRET == '' }}
```
> secrets não podem ser referenciados diretamente em condicionais if:
1. [ ] Criando a seguinte condicional no nível do step
```yaml
  my-job:
    runs-on: ubuntu-latest
    steps:
      - if: ${{ secrets.MY_SECRET }}
```
> secrets não podem ser referenciados diretamente em condicionais if:
