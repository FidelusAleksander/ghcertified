---
question: "Sua organização define um secret `SomeSecret`, no entanto, quando você referencia esse secret em um workflow usando `${{ secrets.SomeSecret }}`, ele fornece um valor diferente do esperado. Qual pode ser a razão para isso?"
archetype: "questions"
title: "Questão 062"
---

> https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets
1. [x] O secret `SomeSecret` também está declarado no escopo do repositório
1. [ ] O secret `SomeSecret` também está declarado no escopo da empresa
> Se um secret com o mesmo nome existir em múltiplos níveis, o secret no nível mais baixo tem precedência.
1. [ ] A expressão `${{ secrets.SomeSecret }}` é usada apenas para secrets no escopo do repositório
1. [ ] Você precisa usar a API do GitHub para acessar secrets no escopo da organização
