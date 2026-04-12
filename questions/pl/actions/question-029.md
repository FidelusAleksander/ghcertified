---
question: "Twój workflow analizy Pull Request używa wielu narzędzi do analizy kodu i zajmuje około 20 minut na pełne ukończenie. Jest uruchamiany na zdarzeniu `pull_request` z filtrem `branches` ustawionym na `master`. Dlatego, jeśli programista wypchnie wiele commitów w ciągu kilku minut, wiele workflowów działa równolegle. Jak możesz zatrzymać wszystkie poprzednie uruchomienia workflowów i uruchomić tylko ten z najnowszymi zmianami?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run"
---

- [x] Użyj współbieżności z anulowaniem w toku
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
- [ ] Użyj współbieżności
```yaml
concurrency:
  group: ${{ github.ref }}
```
> To zakolejkuje uruchomienia dla tego github ref. Nie zatrzyma poprzednich uruchomień

- [ ] Użyj filtra typów aktywności
```yaml
on:
  pull_request:
    branches:
      - master
    types: [latest]
```
> Nie istnieje taki typ aktywności jak `latest` dla zdarzenia pull_request
- [ ] Użyj flagi cancel-in-progress dla zdarzenia `pull_request`
```yaml
on:
  pull_request:
    branches:
      - master
    cancel-in-progress: true
```
