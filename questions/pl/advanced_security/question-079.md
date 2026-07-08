---
question: "Gdzie można określić zapytania CodeQL do uruchomienia w przepływie pracy GitHub Actions?"
documentation: "https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options#running-additional-queries"
---

- [x] W parametrze wejściowym `queries` akcji `github/codeql-action/init`
- [x] W pliku YAML konfiguracji CodeQL
- [ ] W parametrze wejściowym `paths` akcji `github/codeql-action/queries`
- [ ] W sekcji Code Scanning zakładki Security w repozytorium
- [ ] W polu `codeql` pliku `.github/settings.yml`
