---
question: "Twój workflow analizy Pull Request używa wielu narzędzi do analizy kodu i zajmuje około 20 minut, aby całkowicie się zakończyć. Jest uruchamiany na zdarzeniu `pull_request` z filtrem `branches` ustawionym na `master`. Dlatego, jeśli programista wypycha wiele commitów w ciągu kilku minut, wiele workflow jest uruchamianych równolegle. Jak można zatrzymać wszystkie poprzednie uruchomienia workflow i uruchomić tylko te z najnowszymi zmianami?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run"
---

- [x] Użyj concurrency z cancel-in-progress
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
- [ ] Użyj concurrency
```yaml
concurrency:
  group: ${{ github.ref }}
```
> To umieści w kolejce uruchomienia na danym github ref. Nie zatrzyma to poprzednich uruchomień

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
> `cancel-in-progress` można użyć tylko wewnątrz bloku `concurrency`. Nie jest to prawidłowy klucz dla `pull_request`.
