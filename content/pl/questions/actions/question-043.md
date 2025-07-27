---
question: "Jeśli workflow uruchamia się na gałęzi `feature-a`, czy może przywrócić `caches` utworzone w domyślnej gałęzi `main`?"
title: "Pytanie 043"
---


> https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#restrictions-for-accessing-a-cache
1. [x] Tak, wszystkie gałęzie mogą przywrócić pamięci podręczne utworzone w domyślnej gałęzi
1. [ ] Tak, wszystkie pamięci podręczne mogą być dostępne dla workflow na dowolnej gałęzi w tym samym repozytorium
1. [ ] Nie, pamięci podręczne mogą być przywracane tylko z tej samej gałęzi
1. [ ] Tak, ale tylko jeśli żadne pliki nie zostały zmienione w gałęzi `feature-a`
