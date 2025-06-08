---
question: "Jeśli workflow jest uruchamiany na gałęzi `feature-a`, czy może przywracać `cache` utworzone na domyślnej gałęzi `main`?"
title: "Pytanie 043"
---


> https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#restrictions-for-accessing-a-cache
1. [x] Tak, wszystkie gałęzie mogą przywracać cache utworzony na domyślnej gałęzi
1. [ ] Tak, wszystkie cache mogą być dostępne dla workflowów na dowolnej gałęzi w tym samym repozytorium
1. [ ] Nie, cache mogą być przywracane tylko z tej samej gałęzi
1. [ ] Tak, ale tylko jeśli żadne pliki nie zostały zmienione na gałęzi `feature-a`
