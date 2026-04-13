---
question: "Jak skonfigurować swoje repozytorium GitHub do uruchamiania analizy CodeQL zgodnie z harmonogramem?"
documentation: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning#about-default-setup"
---

- [x] Tworząc GitHub Actions workflow z wyzwalaczem `schedule`. Workflow powinien korzystać z akcji z repozytorium `github/codeql-action`.
- [x] Korzystając z domyślnej konfiguracji analizy CodeQL.
- [ ] Ustawiając właściwość `codeql.trigger` w ustawieniach repozytorium na `schedule`.
- [ ] Dodając właściwość `schedule` do pliku konfiguracji `.github/codeql.yml`.
- [ ] Składając żądanie do wsparcia technicznego GitHub o włączenie analizy CodeQL zgodnie z harmonogramem dla repozytorium.
