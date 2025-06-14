---
question: "Qual é a maneira correta de disparar um job apenas se a variável de configuração `MY_VAR` tiver o valor de `MY_VALUE`?"
title: "Pergunta 067"
---

> https://docs.github.com/en/actions/learn-github-actions/contexts#example-usage-of-the-vars-context
1. [x] Criando a seguinte condicional no nível de job
```yaml
  my-job:
    if: ${{ vars.MY_VAR == 'MY_VALUE' }}
```
1. [ ] Criando a seguinte condicional no nível de job
```yaml
  my-job:
    if: ${{ vars.MY_VAR }} == 'MY_VALUE'
```
> Isso sempre será avaliado como True
1. [ ] Não é possível porque variáveis de configuração não podem ser usadas em condicionais `if`
> Isso é verdade para `secrets`, mas não para variáveis de configuração
1. [ ] Não é possível porque variáveis de configuração não podem ser usadas em condicionais `if` no nível de job
> Isso é verdade para `secrets`, mas não para variáveis de configuração
