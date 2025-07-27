---
question: "Jakie są prawidłowe przypadki użycia **defaults**? (Wybierz dwie.)"
title: "Pytanie 027"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaults

- [x] Użycie defaults.run na poziomie workflow, aby ustawić domyślną powłokę (np. bash) dla całego workflow
- [x] Użycie defaults.run na poziomie job, aby ustawić domyślny katalog roboczy dla wszystkich kroków w jednym job
- [ ] Użycie defaults.run na poziomie step, aby ustawić domyślną powłokę (np. bash) dla tego jednego kroku  
> defaults.run można ustawić tylko na poziomie workflow lub job
- [ ] Użycie defaults.env na poziomie workflow, aby ustawić domyślne zmienne środowiskowe dla całego workflow  
> Nie istnieje coś takiego jak defaults.env
- [ ] Użycie defaults.env na poziomie job, aby ustawić domyślne zmienne środowiskowe dla wszystkich kroków w jednym job  
> Nie istnieje coś takiego jak defaults.env
