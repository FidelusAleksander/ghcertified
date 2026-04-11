---
title: "Pytanie 054"
question: "Jak skonfigurować repozytorium GitHub, aby uruchamiało analizę CodeQL według harmonogramu? (Wybierz dwie odpowiedzi.)"
---


> https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning#about-default-setup
- [x] Poprzez utworzenie przepływu pracy GitHub Actions z wyzwalaczem `schedule`. Przepływ pracy powinien korzystać z akcji z repozytorium `github/codeql-action`.
- [x] Poprzez użycie domyślnej konfiguracji analizy CodeQL.
- [ ] Poprzez ustawienie właściwości `codeql.trigger` w ustawieniach repozytorium na `schedule`.
- [ ] Poprzez dodanie właściwości `schedule` do pliku `.github/codeql.yml`.
- [ ] Poprzez złożenie wniosku do wsparcia technicznego GitHub o włączenie zaplanowanej analizy CodeQL dla repozytorium.
