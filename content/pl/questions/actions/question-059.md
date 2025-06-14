---
question: "Twoje publicznie dostępne repozytorium open-source zawiera przepływ pracy z wyzwalaczem zdarzenia `pull_request`. Jak możesz wymagać zatwierdzeń dla uruchomień przepływu pracy wyzwolonych z forków Twojego repozytorium?"
title: "Pytanie 059"
---

> https://docs.github.com/en/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks#about-workflow-runs-from-public-forks
1. [x] Skonfiguruj wymagane zatwierdzenia dla uruchomień forków w repozytorium
1. [ ] Skonfiguruj reguły ochrony wdrożeń dla repozytorium
> Reguły ochrony wdrożeń są używane do ochrony środowisk
1. [ ] Skonfiguruj reguły ochrony gałęzi dla repozytorium
1. [ ] Przepływ pracy nie uruchomi się dla forków, jeśli użyto zdarzenia `pull_request`. Jeśli chcesz to zrobić, powinieneś użyć wyzwalacza zdarzenia `fork_pull_request` z flagą `require-approval`.
