---
question: "Sua organização define um segredo `SomeSecret`, no entanto, quando você referencia esse segredo em um fluxo de trabalho usando `${{ secrets.SomeSecret }}`, ele fornece um valor diferente do esperado. Qual pode ser o motivo disso?"
title: "Questão 062"
---

> https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets
1. [x] O segredo `SomeSecret` também está declarado no escopo do repositório
1. [ ] O segredo `SomeSecret` também está declarado no escopo da empresa
> Se um segredo com o mesmo nome existir em vários níveis, o segredo no nível mais baixo tem precedência.
1. [ ] A expressão `${{ secrets.SomeSecret }}` é usada apenas para segredos no escopo do repositório
1. [ ] Você precisa usar a API do GitHub para acessar segredos no escopo da organização

