---
question: "Podczas tworzenia niestandardowych GitHub Actions - w jakim pliku musi być zdefiniowane całe `metadata` akcji?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
---

Przykłady metadanych: nazwa, opis, wyniki lub wymagane dane wejściowe
- [x] W pliku `action.yml` lub `action.yaml` w repozytorium akcji
- [ ] W pliku `README` w repozytorium  
> Chociaż jest to zalecana praktyka, nie jest to wymagane, aby akcja działała
- [ ] Jest edytowane w interfejsie GitHub Marketplace UI podczas publikacji do udostępniania
- [ ] W pliku `action.yml` lub `action.yaml` w repozytorium akcji, ale nie jest to wymagane, jeśli akcja nie jest przeznaczona do udostępniania i używania przez publiczność  
> Wszystkie akcje wymagają pliku z metadanymi.
