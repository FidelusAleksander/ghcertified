---
question: "Sua organização define um segredo `SomeSecret`, no entanto, ao referenciar esse segredo em um workflow usando `${{ secrets.SomeSecret }}`, ele fornece um valor diferente do esperado. Qual pode ser a razão para isso?"
title: "Pergunta 062"
---

> https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets
1. [x] O segredo `SomeSecret` também está declarado no escopo do repositório
1. [ ] O segredo `SomeSecret` também está declarado no escopo da empresa
> Se um segredo com o mesmo nome existir em múltiplos níveis, o segredo no nível mais baixo tem precedência.
1. [ ] A expressão `${{ secrets.SomeSecret }}` é usada apenas para segredos com escopo de repositório
1. [ ] Você precisa usar a GitHub API para acessar segredos com escopo de organização

