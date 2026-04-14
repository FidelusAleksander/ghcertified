---
question: "W jaki sposób można dostosować zaawansowaną konfigurację skanowania CodeQL za pomocą dodatkowych pakietów zapytań CodeQL?"
documentation: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning"
---

- [x] Korzystając z niestandardowego pliku konfiguracyjnego i definiując w nim dodatkowe zapytania
- [x] Definiując dostosowania w GitHub Actions workflow analizy CodeQL jako parametry wejściowe dla akcji `github/codeql-action/init`
- [ ] Korzystając z CodeQL CLI z niestandardowym plikiem konfiguracyjnym do uruchomienia analizy
- [ ] Definiując dostosowania w ustawieniach repozytorium Security / Code scanning
- [ ] Korzystając z `github/codeql-customizations` GitHub Action
