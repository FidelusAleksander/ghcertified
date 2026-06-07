---
question: "Catherine pisze poniższy job w workflow. Jaki będzie wynik wykonania tego jobu?"
documentation: "https://github.com/actions/checkout"
---

```yaml
jobs:
  doc-generate:
    name: "Generate Scaffold Doc"
    runs-on: ubuntu-latest
    steps:
      
      - name: Setup Python 3.13 
        uses: actions/setup-python@v6
        with:
          python-version: '3.13' 

      - name: Grant Execute Permission to Scaffolding Python Script
        run: chmod +x ./scripts/scaffold-doc.py

      - name: Execute Scaffolding Python Script
        run: python ./scripts/scaffold-doc.py
```

- [x] Skrypt Python nie zostanie uruchomiony, ponieważ `actions/checkout` nie zostało uwzględnione w workflow.
> `actions/checkout` jest konieczne do pobrania kodu repozytorium na system plików runnera. Jeśli nie zostanie użyte, skrypt Python nie zostanie znaleziony i tym samym nie zostanie wykonany.
- [ ] Skrypt Python zostanie pomyślnie uruchomiony, ponieważ polecenie `chmod` nadaje skryptowi uprawnienia do wykonania.
> To byłoby prawdą, gdyby użyto `actions/checkout`.
- [ ] Skrypt Python nie zostanie uruchomiony, ponieważ `runs-on` nie ma wartości `python`.
- [ ] Skrypt Python nie zostanie uruchomiony, ponieważ `actions/python-setup` nie jest poprawną akcją do ustawienia środowiska Python.
> Większość oficjalnych akcji konfigurujących języki programowania używa struktury `actions/setup-<language>`.
