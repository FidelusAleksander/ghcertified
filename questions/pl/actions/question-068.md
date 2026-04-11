---
question: "Aby uruchomić `step` tylko wtedy, gdy sekret `MY_SECRET` został ustawiony, możesz:"
title: "Pytanie 068"
---

> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-secrets
1. [x] Ustawić sekret `MY_SECRET` jako zmienną środowiskową na poziomie zadania, a następnie odwołać się do tej zmiennej środowiskowej, aby warunkowo uruchomić ten krok
```yaml
  my-job:
    runs-on: ubuntu-latest
    env:
      my_secret: ${{ secrets.MY_SECRET }}
    steps:
      - if: ${{ env.my_secret != '' }}
```
1. [ ] Tworząc następujący warunek na poziomie zadania
```yaml
  my-job:
    runs-on: ubuntu-latest
    if: ${{ secrets.MY_SECRET == '' }}
```
> sekrety nie mogą być bezpośrednio używane w warunkach `if:`
1. [ ] Tworząc następujący warunek na poziomie kroku
```yaml
  my-job:
    runs-on: ubuntu-latest
    steps:
      - if: ${{ secrets.MY_SECRET == '' }}
```
> sekrety nie mogą być bezpośrednio używane w warunkach `if:`
1. [ ] Tworząc następujący warunek na poziomie kroku
```yaml
  my-job:
    runs-on: ubuntu-latest
    steps:
      - if: ${{ secrets.MY_SECRET }}
```
> sekrety nie mogą być bezpośrednio używane w warunkach `if:`
