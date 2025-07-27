---
question: "Twój publicznie dostępny repozytorium open-source zawiera workflow z wyzwalaczem zdarzenia `pull_request`. Jak możesz wymagać zatwierdzeń dla uruchomień workflow wyzwalanych z forków Twojego repozytorium?"
title: "Pytanie 059"
---

> https://docs.github.com/en/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks#about-workflow-runs-from-public-forks
1. [x] Skonfiguruj wymagane zatwierdzenia dla uruchomień forków w repozytorium
1. [ ] Skonfiguruj zasady ochrony wdrożeń dla repozytorium
> Zasady ochrony wdrożeń są używane do ochrony środowisk
1. [ ] Skonfiguruj zasady ochrony gałęzi dla repozytorium
1. [ ] Workflow nie zostanie wyzwolony dla forków, jeśli używasz zdarzenia `pull_request`. Jeśli chcesz to zrobić, powinieneś użyć wyzwalacza zdarzenia `fork_pull_request` z flagą `require-approval`.
