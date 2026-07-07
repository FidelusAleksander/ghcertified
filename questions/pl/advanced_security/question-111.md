---
question: "Musisz włączyć GitHub Actions dla"
documentation: "https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-version-updates"
---

- [x] Przegląd zależności
- [ ] Aktualizacje zabezpieczeń Dependabot
- [ ] Aktualizacje wersji Dependabot
- [ ] Wszystkie powyższe
> GitHub Actions nie jest wymagane do uruchamiania aktualizacji wersji Dependabot i aktualizacji zabezpieczeń Dependabot na GitHubie. Jednak pull requesty otwierane przez Dependabot mogą uruchamiać workflowy, które wykonują akcje.
- [ ] Żadna z powyższych
> Przegląd zależności korzysta z `actions/dependency-review-action` GitHub Action
