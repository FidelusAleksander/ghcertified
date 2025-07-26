---
question: "Jaki jest poprawny sposób na uruchomienie zadania tylko wtedy, gdy zmienna konfiguracyjna `MY_VAR` ma wartość `MY_VALUE`?"
title: "Pytanie 067"
---

> https://docs.github.com/en/actions/learn-github-actions/contexts#example-usage-of-the-vars-context
1. [x] Tworząc następujący warunek na poziomie zadania
```yaml
  my-job:
    if: ${{ vars.MY_VAR == 'MY_VALUE' }}
```
1. [ ] Tworząc następujący warunek na poziomie zadania
```yaml
  my-job:
    if: ${{ vars.MY_VAR }} == 'MY_VALUE'
```
> To zawsze będzie oceniane jako True
1. [ ] To nie jest możliwe, ponieważ zmienne konfiguracyjne nie mogą być używane w warunkach `if`
> To jest prawdą dla `secrets`, ale nie dla zmiennych konfiguracyjnych
1. [ ] To nie jest możliwe, ponieważ zmienne konfiguracyjne nie mogą być używane w warunkach `if` na poziomie zadania
> To jest prawdą dla `secrets`, ale nie dla zmiennych konfiguracyjnych
