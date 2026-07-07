---
question: "Jaka jest najprostsza metoda równoczesnego wykonania analizy CodeQL dla każdego języka w repozytorium wielojęzycznym za pomocą GitHub Actions?"
documentation: "https://docs.github.com/en/code-security/reference/code-scanning/workflow-configuration-options#changing-the-languages-that-are-analyzed"
---

- [x] Tworząc macierz `languages` dla zadania, a następnie odwołując się do niej w parametrze wejściowym `languages` akcji `github/codeql-action/init`
- [ ] Wywołując akcję `github/codeql-action/analyze` w oddzielnych krokach dla każdego języka
- [ ] Tworząc oddzielny workflow dla każdego języka
- [ ] Definiując równoległość w akcji `github/codeql-action/analyze`
