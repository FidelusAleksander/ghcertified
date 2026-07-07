---
question: "W jaki sposób można dostosować zaawansowaną konfigurację skanowania CodeQL za pomocą dodatkowych zestawów zapytań CodeQL?"
documentation: "https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options"
---

- [x] Używając niestandardowego pliku konfiguracyjnego i definiując w nim dodatkowe zapytania
- [x] Definiując dostosowania w przepływie pracy analizy CodeQL GitHub Actions jako parametry wejściowe dla akcji `github/codeql-action/init`
- [ ] Używając CodeQL CLI z niestandardowym plikiem konfiguracyjnym do uruchamiania analizy
- [ ] Definiując dostosowania w ustawieniach repozytorium Security / Code scanning
- [ ] Używając akcji GitHub `github/codeql-customizations`
