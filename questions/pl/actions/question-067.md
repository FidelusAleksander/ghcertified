---
question: "Który sposób wyzwolenia zadania tylko wtedy, gdy zmienna konfiguracyjna `MY_VAR` ma wartość `MY_VALUE`, jest poprawny?"
documentation: "https://docs.github.com/en/actions/learn-github-actions/contexts#example-usage-of-the-vars-context"
---

- [x] Tworząc następujący warunek na poziomie zadania
```yaml
my-job:
  if: ${{ vars.MY_VAR == 'MY_VALUE' }}
```
- [ ] Tworząc następujący warunek na poziomie zadania
```yaml
my-job:
  if: ${{ vars.MY_VAR }} == 'MY_VALUE'
```
> Niepoprawne, tylko `vars.MY_VAR` jest oceniane wewnątrz `${{ }}`; skutkuje to tekstem takim jak `some_value == 'MY_VALUE'`, a GitHub traktuje ten niepusty ciąg znaków jako prawdziwy, zamiast przeprowadzić porównanie
> Zobacz https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#literals
- [ ] To nie jest możliwe, ponieważ zmienne konfiguracyjne nie mogą być używane w warunkach `if`
> To prawda w przypadku `secrets`, ale nie dla zmiennych konfiguracyjnych
- [ ] To nie jest możliwe, ponieważ zmienne konfiguracyjne nie mogą być używane w warunkach `if` na poziomie zadania
> To prawda w przypadku `secrets`, ale nie dla zmiennych konfiguracyjnych
