---
question: "Petra tworzy workflow, którego jedynym zadaniem jest `post-merge`. Jak może skonfigurować zadanie, aby było uruchamiane po scaleniu pull requestu?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#running-your-pull_request-workflow-when-a-pull-request-merges"
---

- [x] Określić typ aktywności `pull_request` jako `closed` i użyć warunku na poziomie zadania, aby sprawdzić, czy `github.event.pull_request.merged` jest prawdziwe
```yaml
on:
    pull_request:
        types: [closed]

jobs:
    post-merge:
        if: github.event.pull_request.merged == true
``` 
> Aby uruchomić zadanie workflow po scaleniu pull requestu, należy określić zarówno typ aktywności pull requestu w `on:`, jak i ustawić warunek na poziomie zadania.
- [ ] Określić typ aktywności `pull_request` jako `merged` i użyć warunku na poziomie zadania, aby sprawdzić, czy `github.event.pull_request.merged` jest prawdziwe
```yaml
on:
    pull_request:
        types: [merged]
jobs:
    post-merge:
        if: github.event.pull_request.merged == true
``` 
> Zdarzenie `pull_request` nie posiada typu aktywności `merged`. Zajrzyj do sekcji "pull_request" w podlinkowanej dokumentacji, aby zobaczyć dostępne typy aktywności dla `pull_request`.
- [ ] Określić typ aktywności `pull_request` jako `merged` (bez konieczności używania warunku na poziomie zadania)
```yaml
on:
    pull_request:
        types: [merged]
jobs:
    post-merge:
``` 
> Zdarzenie `pull_request` nie posiada typu aktywności `merged`.
- [ ] Określić typ aktywności `pull_request` jako `closed` (bez konieczności używania warunku na poziomie zadania)
```yaml
on:
    pull_request:
        types: [closed]
jobs:
    post-merge:
``` 
> Pull requesty mogą być zamknięte bez ich scalania. Jeśli nie użyjesz warunku na poziomie zadania, który sprawdza, czy PR został scalony, zadanie uruchomi się za każdym razem, gdy PR zostanie zamknięty, a nie tylko po scaleniu.
- [ ] Określić typ aktywności `pull_request` jako `closed` i użyć warunku na poziomie zadania, aby sprawdzić, czy `github.ref` jest równy gałęzi scalania pull requestu.
```yaml
on:
    pull_request:
        types: [closed]
jobs:
    post-merge: 
        if: ${{ github.ref == github.event.pull_request.base.ref }}
``` 
> Po scaleniu pull requestu, `github.ref` będzie *pełnym odniesieniem* do gałęzi scalania (np. `refs/heads/main`), a nie tylko samą nazwą gałęzi (np. `main`).
