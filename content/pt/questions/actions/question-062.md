---
question: "Sua organização define um segredo `SomeSecret`, porém, ao referenciar esse segredo em um fluxo de trabalho utilizando `${{ secrets.SomeSecret }}`, ele fornece um valor diferente do esperado. Qual pode ser a razão para isso?"
title: "Question 062"
---

> https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets
1. [x] O segredo `SomeSecret` também está declarado no escopo do repositório
1. [ ] O segredo `SomeSecret` também está declarado no escopo da organização Enterprise
> Se um segredo com o mesmo nome existir em vários níveis, o segredo no nível mais baixo terá precedência.
1. [ ] A expressão `${{ secrets.SomeSecret }}` é usada apenas para segredos no escopo de repositório
1. [ ] Você precisa usar a API do GitHub para acessar segredos no escopo da organização

