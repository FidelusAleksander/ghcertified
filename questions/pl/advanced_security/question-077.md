---
question: "Jaka jest najprostsza metoda jednoczesnego wykonania analizy CodeQL dla każdego języka w repozytorium wielojęzykowym za pomocą GitHub Actions?"
documentation: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed"
---

- [x] Poprzez utworzenie matrycy `languages` dla zadania i odwołanie się do niej w parametrze wejściowym `languages` akcji `github/codeql-action/init`
- [ ] Poprzez wywołanie akcji `github/codeql-action/analyze` w oddzielnych krokach dla każdego języka
- [ ] Poprzez utworzenie oddzielnego workflow dla każdego języka
- [ ] Zdefiniuj równoległość w akcji `github/codeql-action/analyze`
