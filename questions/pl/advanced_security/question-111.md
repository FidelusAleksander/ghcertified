---
question: "Musisz mieć włączone GitHub Actions dla"
documentation: "https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-version-updates"
---

- [x] Dependency Review
- [ ] Dependabot Security Updates
- [ ] Dependabot Version Updates
- [ ] Wszystkiego
> GitHub Actions nie są wymagane, aby aktualizacje wersji Dependabot i aktualizacje bezpieczeństwa Dependabot działały na GitHub. Jednak pull requesty otwierane przez Dependabot mogą inicjować workflows, które uruchamiają akcje.
- [ ] Żadnego z powyższych
> Dependency review używa `actions/dependency-review-action` GitHub Action
