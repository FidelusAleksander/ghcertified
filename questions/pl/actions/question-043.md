---
question: "Jeśli workflow jest uruchamiany na gałęzi `feature-a`, czy może przywrócić `caches` utworzone w domyślnej gałęzi `main`?"
documentation: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#restrictions-for-accessing-a-cache"
---

- [x] Tak, wszystkie gałęzie mogą przywracać cache utworzone w domyślnej gałęzi
- [ ] Tak, wszystkie cache mogą być dostępne dla workflowów na dowolnej gałęzi w tym samym repozytorium
- [ ] Nie, cache można przywrócić tylko z tej samej gałęzi
- [ ] Tak, ale tylko jeśli żadne pliki nie zostały zmienione w gałęzi `feature-a`
