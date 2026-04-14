---
question: "Podczas tworzenia niestandardowych GitHub Actions - w jakim pliku należy zdefiniować wszystkie dane `metadata` akcji?"
documentation: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions"
---

Przykłady danych: nazwa, opis, dane wyjściowe lub wymagane dane wejściowe
- [x] W pliku `action.yml` lub `action.yaml` w repozytorium akcji
- [ ] W pliku `README` repozytorium
> Chociaż jest to dobra praktyka, nie jest to wymagane do działania akcji
- [ ] Jest edytowany w interfejsie użytkownika GitHub Marketplace podczas publikacji w celu udostępnienia
- [ ] W pliku `action.yml` lub `action.yaml` w repozytorium akcji, ale nie jest wymagany, jeśli akcja nie ma być udostępniana i wykorzystywana przez innych
> Wszystkie akcje wymagają pliku z danymi metadata.
