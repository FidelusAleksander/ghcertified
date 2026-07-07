---
question: "Você precisa do GitHub Actions habilitado para"
documentation: "https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-version-updates"
---

- [x] Revisão de Dependência
- [ ] Atualizações de Segurança do Dependabot
- [ ] Atualizações de Versão do Dependabot
- [ ] Todas essas
> GitHub Actions não é necessário para que as atualizações de versão do Dependabot e as atualizações de segurança do Dependabot sejam executadas no GitHub. No entanto, pull requests abertas pelo Dependabot podem acionar workflows que executam ações.
- [ ] Nenhuma dessas
> A revisão de dependência utiliza `actions/dependency-review-action` GitHub Action
