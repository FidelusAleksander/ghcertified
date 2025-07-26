---
title: "Pytanie 079"
question: "Na którym commit i gałęzi uruchamiane są zaplanowane workflows w GitHub Actions?"
---

> https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule

1. [ ] Zaplanowane workflows uruchamiane są na określonym commicie w ostatnio zmodyfikowanej gałęzi.
   > niepoprawne, zarówno określony commit, jak i ostatnio zmodyfikowana gałąź
1. [ ] Zaplanowane workflows uruchamiane są na określonym commicie w gałęzi main.
   > niepoprawne, zarówno określony commit, jak i gałąź main
1. [x] Zaplanowane workflows uruchamiane są na najnowszym commicie w domyślnej gałęzi repozytorium.
1. [ ] Zaplanowane workflows uruchamiane są na najnowszym commicie w gałęzi main.
   > najnowszy commit jest poprawny, ale gałąź main nie
