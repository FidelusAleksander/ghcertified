---
question: "Podczas tworzenia niestandardowych GitHub Actions - w jakim pliku musi być zdefiniowane całe `metadata` akcji?"
title: "Pytanie 054"
---

Przykłady metadata: nazwa, opis, wyjścia lub wymagane dane wejściowe  
> https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions  
1. [x] W pliku `action.yml` lub `action.yaml` w repozytorium akcji  
1. [ ] W pliku `README` repozytorium  
> Chociaż to dobra praktyka, nie jest to wymagane, aby akcja działała  
1. [ ] Edytowane w interfejsie użytkownika GitHub Marketplace po opublikowaniu do udostępnienia  
1. [ ] W pliku `action.yml` lub `action.yaml` w repozytorium akcji, ale nie jest to wymagane, jeśli akcja nie jest przeznaczona do udostępnienia publicznego  
> Wszystkie akcje wymagają pliku metadata.  
