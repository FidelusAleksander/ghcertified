---
question: "Qual é a maneira correta de acionar um trabalho apenas se a variável de configuração `MY_VAR` tiver o valor `MY_VALUE`?"
documentation: "https://docs.github.com/en/actions/learn-github-actions/contexts#example-usage-of-the-vars-context"
---

- [x] Criando a seguinte condicional no nível do trabalho
```yaml
my-job:
  if: ${{ vars.MY_VAR == 'MY_VALUE' }}
```
- [ ] Criando a seguinte condicional no nível do trabalho
```yaml
my-job:
  if: ${{ vars.MY_VAR }} == 'MY_VALUE'
```
> Incorreto, apenas `vars.MY_VAR` é avaliado dentro de `${{ }}`; isso gera um texto como `some_value == 'MY_VALUE'`, e o GitHub trata essa string não vazia como verdadeira (truthy), em vez de realizar a comparação
> Veja https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#literals
- [ ] Não é possível porque variáveis de configuração não podem ser usadas em condicionais `if`
> Isso é verdadeiro para `secrets`, mas não para variáveis de configuração
- [ ] Não é possível porque variáveis de configuração não podem ser usadas em condicionais `if` no nível do trabalho
> Isso é verdadeiro para `secrets`, mas não para variáveis de configuração
