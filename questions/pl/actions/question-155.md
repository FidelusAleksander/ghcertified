---
question: "Marianne ma gałąź funkcji, która zawiera jej nowy plik workflow, ustawiony do uruchamiania codziennie o godzinie 2:00, zgodnie ze składnią przedstawioną poniżej. Jednak następnego dnia workflow się nie uruchamia. Co może być przyczyną?"
documentation: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule"
---

```yaml
on:
    schedule:
        cron:
            "0 2 * * *"
```

- [x] Plik workflow musi znajdować się w domyślnej gałęzi, aby został uruchomiony przez zdarzenie `schedule`
- [ ] Składnia `cron` nie została poprawnie zaplanowana
> `"0 2 * * *"` w składni CRON oznacza "uruchom codziennie o godzinie 2:00 rano". Nawet jeśli harmonogram byłby niepoprawnie ustawiony, workflow i tak nie zostałby uruchomiony, ponieważ nie znajduje się w domyślnej gałęzi.
- [ ] `schedule` nie może być jedynym zdarzeniem w workflow. Musi być połączony ze zdarzeniem opartym na repozytorium, takim jak `push`
- [ ] Nie użyto składni `@daily`
> Niestandardowa składnia CRON, taka jak `@daily`, nie jest obsługiwana przez GitHub Actions.
- [ ] Prywatne repozytorium zawierające workflow nie miało żadnej aktywności w ciągu ostatnich 60 dni, co automatycznie wyłączyło workflow.
> Ta automatyczna dezaktywacja dotyczy tylko repozytoriów publicznych, a nie prywatnych.
