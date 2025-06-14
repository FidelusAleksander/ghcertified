---
question: "Jakie są prawidłowe przypadki użycia **defaults**? (Wybierz dwa.)"
title: "Pytanie 027"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaults

- [x] Użycie defaults.run na poziomie workflow do ustawienia domyślnej powłoki (np. bash) dla całego workflow
- [x] Użycie defaults.run na poziomie job do ustawienia domyślnego katalogu roboczego dla wszystkich kroków w jednym job
- [ ] Użycie defaults.run na poziomie step do ustawienia domyślnej powłoki (np. bash) dla tego pojedynczego kroku  
> defaults.run można ustawić tylko na poziomie workflow lub job
- [ ] Użycie defaults.env na poziomie workflow do ustawienia domyślnych zmiennych środowiskowych dla całego workflow  
> Nie istnieje coś takiego jak defaults.env
- [ ] Użycie defaults.env na poziomie job do ustawienia domyślnych zmiennych środowiskowych dla wszystkich kroków w jednym job  
> Nie istnieje coś takiego jak defaults.env
