---
question: "Twoja publicznie dostępna repozytorium open-source zawiera workflow z wyzwalaczem zdarzeń `pull_request`. Jak można wymagać zatwierdzeń dla workflow uruchamianych z forków twojego repozytorium?"
documentation: "https://docs.github.com/en/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks#about-workflow-runs-from-public-forks"
---

- [x] Ustaw wymaganą zgodę dla uruchomień workflow z forków w repozytorium
- [ ] Ustaw zasady ochrony przy wdrażaniu dla repozytorium  
> Zasady ochrony wdrażania są używane do ochrony środowisk  
- [ ] Ustaw zasady ochrony branch dla repozytorium
- [ ] Workflow nie uruchomi się dla forków, jeśli używany jest wyzwalacz zdarzeń `pull_request`. Jeśli chcesz to zrobić, powinieneś użyć wyzwalacza zdarzeń `fork_pull_request` z flagą `require-approval`.
