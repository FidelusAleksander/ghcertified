---
question: "Podczas tworzenia niestandardowych GitHub Actions - w jakim pliku muszą być zdefiniowane wszystkie dane `metadata` akcji?"
title: "Pytanie 054"
---

Przykłady danych: nazwa, opis, wyjścia lub wymagane wejścia  
> https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions  
1. [x] W pliku `action.yml` lub `action.yaml` w repozytorium akcji  
1. [ ] W pliku `README` repozytorium  
> Chociaż to dobra praktyka, nie jest to wymagane, aby akcja działała  
1. [ ] Edytuje się to w interfejsie GitHub Marketplace podczas publikowania w celu udostępnienia  
1. [ ] W pliku `action.yml` lub `action.yaml` w repozytorium akcji, ale nie jest to wymagane, jeśli akcja nie ma być udostępniana i używana publicznie  
> Wszystkie akcje wymagają pliku z danymi metadata.  
