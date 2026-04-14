---
question: "Sua organização define um segredo `SomeSecret`, no entanto, ao referenciar esse segredo em um workflow usando `${{ secrets.SomeSecret }}`, ele apresenta um valor diferente do esperado. Qual pode ser a razão para isso?"
documentation: "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets"
---

- [x] O segredo `SomeSecret` também está declarado no escopo do repositório
- [ ] O segredo `SomeSecret` também está declarado no escopo da empresa
> Se um segredo com o mesmo nome existir em múltiplos níveis, o segredo no nível mais baixo tem precedência.
- [ ] A expressão `${{ secrets.SomeSecret }}` é usada apenas para segredos no escopo do repositório
- [ ] Você precisa usar a GitHub API para acessar segredos no escopo da organização
