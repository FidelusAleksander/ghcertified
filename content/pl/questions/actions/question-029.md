---
question: "Twoje workflow analizy Pull Request używa wielu narzędzi do analizy kodu i zajmuje około 20 minut na pełne ukończenie. Jest uruchamiane na zdarzenie `pull_request` z filtrem `branches` ustawionym na `master`. W związku z tym, jeśli programista wykona kilka commitów w ciągu kilku minut, wiele workflow działa równolegle. Jak można zatrzymać wszystkie poprzednie uruchomienia workflow i uruchomić tylko to z najnowszymi zmianami?"
title: "Pytanie 029"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run

1. [x] Użyj współbieżności z anulowaniem trwających procesów
```yaml
  concurrency:
    group: ${{ github.workflow }}-${{ github.ref }}
    cancel-in-progress: true
```
1. [ ] Użyj współbieżności
```yaml
  concurrency:
    group: ${{ github.ref }}
```
> To zgrupuje uruchomienia na tym samym github ref. Nie zatrzyma poprzednich uruchomień

1. [ ] Użyj filtra typów aktywności
```yaml
  on:
    pull_request:
      branches:
        - master
      types: [latest]
```
> Nie istnieje taki typ aktywności jak `latest` dla zdarzenia pull_request
1. [ ] Użyj flagi cancel-in-progress dla zdarzenia `pull_request`
```yaml
  on:
    pull_request:
      branches:
        - master
      cancel-in-progress: true
```
