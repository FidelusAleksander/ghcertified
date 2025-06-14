---
question: "Jaki jest poprawny sposób wyzwalania zadania tylko wtedy, gdy zmienna konfiguracyjna `MY_VAR` ma wartość `MY_VALUE`?"
title: "Pytanie 067"
---

> https://docs.github.com/en/actions/learn-github-actions/contexts#example-usage-of-the-vars-context
1. [x] Poprzez utworzenie następującego warunku na poziomie zadania:
```yaml
  my-job:
    if: ${{ vars.MY_VAR == 'MY_VALUE' }}
```
1. [ ] Poprzez utworzenie następującego warunku na poziomie zadania:
```yaml
  my-job:
    if: ${{ vars.MY_VAR }} == 'MY_VALUE'
```
> To zawsze będzie ewaluowane jako True
1. [ ] To nie jest możliwe, ponieważ zmienne konfiguracyjne nie mogą być używane w warunkach `if`
> To prawda dla `secrets`, ale nie dla zmiennych konfiguracyjnych
1. [ ] To nie jest możliwe, ponieważ zmienne konfiguracyjne nie mogą być używane w warunkach `if` na poziomie zadania
> To prawda dla `secrets`, ale nie dla zmiennych konfiguracyjnych
