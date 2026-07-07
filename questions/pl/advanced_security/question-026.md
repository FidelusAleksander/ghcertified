---
question: "W jaki sposób GitHub Dependency graph rozpoznaje, jakich zależności używa Twój projekt?"
documentation: "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph#supported-package-ecosystems"
---

- [x] GitHub automatycznie wyprowadza zależności z plików manifestów i plików blokad, które zostały zatwierdzone do repozytorium
- [x] Zależności mogą być ręcznie dodane za pomocą Dependency submission API
- [ ] GitHub skanuje kod repozytorium w poszukiwaniu instrukcji importu zewnętrznych pakietów
- [ ] Wymagane jest dodanie GitHub Actions workflow, który używa oficjalnej `actions/dependency-graph` GitHub Action, aby dodawać zależności do grafu za każdym razem, gdy nowy commit jest wypychany do repozytorium
