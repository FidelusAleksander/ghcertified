---
question: "Która metoda jest poprawna, aby uruchomić zadanie tylko wtedy, gdy zmienna konfiguracyjna `MY_VAR` ma wartość `MY_VALUE`?"
documentation: "https://docs.github.com/en/actions/learn-github-actions/contexts#example-usage-of-the-vars-context"
---

- [x] Poprzez utworzenie następującego warunku na poziomie zadania
```yaml
my-job:
  if: ${{ vars.MY_VAR == 'MY_VALUE' }}
```
- [ ] Poprzez utworzenie następującego warunku na poziomie zadania
```yaml
my-job:
  if: ${{ vars.MY_VAR }} == 'MY_VALUE'
```
> Zawsze będzie oceniane jako True
- [ ] To jest niemożliwe, ponieważ zmienne konfiguracyjne nie mogą być używane w warunkach `if`
> To prawda w przypadku `secrets`, ale nie dla zmiennych konfiguracyjnych
- [ ] To jest niemożliwe, ponieważ zmienne konfiguracyjne nie mogą być używane w warunkach `if` na poziomie zadania
> To prawda w przypadku `secrets`, ale nie dla zmiennych konfiguracyjnych
