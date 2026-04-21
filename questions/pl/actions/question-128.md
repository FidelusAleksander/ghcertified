---
question: "Przepływ pracy jest uruchamiany, gdy wnioski o scalenie są ponownie otwierane. Dlaczego może to być przyczyną?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request"
---

- [x] `types: [reopened]` jest zdefiniowane pod zdarzeniem `pull_request`. 
- [ ] Reguły ochrony gałęzi zostały nieprawidłowo skonfigurowane.
> Reguły ochrony gałęzi nie określają, kiedy przepływ pracy jest uruchamiany.
- [x] Żadne typy aktywności nie są zdefiniowane pod zdarzeniem `pull_request`.
> Jeśli żadne typy aktywności nie są jawnie zdefiniowane, zdarzenie `pull_request` będzie uruchamiane przy otwieraniu wniosków o scalenie (`opened`), przy wnioskach, których źródłowa gałąź została zaktualizowana od momentu ich otwarcia (`synchronize`), lub przy ponownie otwartych wnioskach o scalenie (`reopened`).
- [ ] `on: schedule` zostało skonfigurowane z `pull_requests: [reopened]`
> `schedule` jest używane do uruchamiania przepływów pracy w określonych momentach, a nie na podstawie aktywności w repozytorium.
