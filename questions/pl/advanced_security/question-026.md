---
question: "Skąd GitHub Dependency graph wie, jakie zależności wykorzystuje Twój projekt?"
documentation: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#supported-package-ecosystems"
---

- [x] GitHub automatycznie wywodzi zależności z plików manifestów i lock commitowanych do repozytorium
- [x] Zależności mogą być ręcznie dodawane za pomocą Dependency submission API
- [ ] GitHub skanuje kod repozytorium w poszukiwaniu instrukcji importu zewnętrznych pakietów
- [ ] Należy dodać GitHub Actions workflow, który wykorzystuje oficjalny `actions/dependency-graph` GitHub Action, aby dodawać zależności do grafu za każdym razem, gdy nowy commit jest pushowany do repozytorium
