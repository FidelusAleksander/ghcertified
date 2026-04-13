---
question: "Gdzie można określić zapytania CodeQL do uruchomienia w przepływie pracy GitHub Actions?"
documentation: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#running-additional-queries"
---

- [x] W parametrze wejściowym `queries` akcji `github/codeql-action/init`
- [x] W pliku YAML konfiguracji CodeQL
- [ ] W parametrze wejściowym `paths` akcji `github/codeql-action/queries`
- [ ] W sekcji Code Scanning zakładki Security w repozytorium
- [ ] W polu `codeql` pliku `.github/settings.yml`
