---
title: "Pytanie 077"
question: "Jaka jest najprostsza metoda równoczesnego wykonania analizy CodeQL dla każdego języka w repozytorium wielojęzycznym, korzystając z GitHub Actions?"
---


> https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#changing-the-languages-that-are-analyzed
1. [x] Tworząc macierz `languages` dla zadania, a następnie odwołując się do niej w parametrze wejściowym `languages` akcji `github/codeql-action/init`
1. [ ] Wywołując akcję `github/codeql-action/analyze` w oddzielnych krokach dla każdego języka
1. [ ] Tworząc oddzielny workflow dla każdego języka
1. [ ] Definiując równoległość w akcji `github/codeql-action/analyze`
