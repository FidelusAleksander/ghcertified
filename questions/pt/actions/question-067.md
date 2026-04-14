---
question: "Qual é a maneira correta de acionar um job apenas se a variável de configuração `MY_VAR` tiver o valor de `MY_VALUE`?"
documentation: "https://docs.github.com/en/actions/learn-github-actions/contexts#example-usage-of-the-vars-context"
---

- [x] Criando a seguinte condicional no nível do job
```yaml
my-job:
  if: ${{ vars.MY_VAR == 'MY_VALUE' }}
```
- [ ] Criando a seguinte condicional no nível do job
```yaml
my-job:
  if: ${{ vars.MY_VAR }} == 'MY_VALUE'
```
> Isso sempre será avaliado como True
- [ ] Não é possível porque variáveis de configuração não podem ser usadas em condicionais `if`
> Isso é verdadeiro para `secrets`, mas não para variáveis de configuração
- [ ] Não é possível porque variáveis de configuração não podem ser usadas em condicionais `if` no nível do job
> Isso é verdadeiro para `secrets`, mas não para variáveis de configuração
