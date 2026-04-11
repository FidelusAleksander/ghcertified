---
title: "Pytanie 026"
question: "W jaki sposób Dependency graph GitHub rozpoznaje, jakich zależności używa Twój projekt? (Wybierz dwa.)"
---




> https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#supported-package-ecosystems
- [x] GitHub automatycznie pozyskuje informacje o zależnościach z plików manifestów i plików lock, które są zapisane w repozytorium
- [x] Zależności można dodawać ręcznie za pomocą Dependency submission API
- [ ] GitHub skanuje kod repozytorium w poszukiwaniu instrukcji importu zewnętrznych pakietów
- [ ] Wymagane jest dodanie workflow GitHub Actions, który wykorzystuje oficjalny `actions/dependency-graph` GitHub Action, aby dodawać zależności do wykresu przy każdym nowym commicie do repozytorium
