---
question: "Sua organização define um segredo `SomeSecret`, porém, ao referenciar esse segredo em um workflow usando `${{ secrets.SomeSecret }}`, ele fornece um valor diferente do esperado. Qual pode ser a razão para isso?"
documentation: "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets"
---

- [x] O segredo `SomeSecret` também está declarado no escopo do repositório
- [ ] O segredo `SomeSecret` também está declarado no escopo da enterprise
> Se um segredo com o mesmo nome existir em múltiplos níveis, o segredo no nível mais baixo terá precedência.
- [ ] A expressão `${{ secrets.SomeSecret }}` é usada apenas para segredos no escopo do repositório
- [ ] Você precisa usar a API do GitHub para acessar segredos no escopo da organização

