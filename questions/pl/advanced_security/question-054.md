---
question: "Jak skonfigurować swoje repozytorium GitHub, aby uruchamiać analizę CodeQL według harmonogramu?"
documentation: "https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning#about-default-setup"
---

- [x] Tworząc workflow GitHub Actions z wyzwalaczem `schedule`. Workflow powinien wykorzystywać akcje z repozytorium `github/codeql-action`.
- [x] Używając domyślnej konfiguracji analizy CodeQL.
- [ ] Ustawiając właściwość `codeql.trigger` w ustawieniach repozytorium na `schedule`.
- [ ] Dodając właściwość `schedule` do pliku konfiguracyjnego `.github/codeql.yml`.
- [ ] Składając wniosek do wsparcia technicznego GitHub o włączenie zaplanowanej analizy CodeQL dla repozytorium.
