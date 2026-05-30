---
question: "Działania JavaScript i `actions/github-script` oba korzystają z JavaScript. Dlaczego powinieneś używać `actions/github-script` zamiast tworzyć własne działanie w JavaScript?"
documentation: "https://github.com/actions/github-script"
---

- [x] `actions/github-script` powinien być używany do krótkich skryptów inline
- [x] `actions/github-script` powinien być używany, gdy chcesz użyć wstępnie uwierzytelnionego klienta do interakcji z GitHub API.
- [x] Działania JavaScript powinny być używane, gdy chcesz stworzyć niestandardowe, wielokrotnego użytku działanie do użycia w różnych repozytoriach
- [ ] Działania JavaScript powinny być używane do krótkich skryptów inline
- [ ] `actions/github-script` powinien być używany, gdy musisz użyć precyzyjnie dostosowanego środowiska Node.js z kilkoma specyficznymi zależnościami
> Chociaż możesz zainstalować moduły dla `actions/github-script` do użycia przed jego wywołaniem, to jeśli kilka zależności jest potrzebnych, skutkuje to kilkoma krokami w ramach workflow. `actions/github-script` również nie pozwala na zmianę wersji Node.js; jesteś ograniczony do tej, którą definiuje.
- [ ] Działania JavaScript powinny być używane, gdy chcesz lekkie rozwiązanie do wykonywania wywołań GitHub API.
> Działania JavaScript nie są lekkie; wymagają utworzenia pliku `action.yml`, który musi być przechowywany w osobnym folderze lub nawet oddzielnym repozytorium, w zależności od podejścia. `actions/github-script` posiada wstępnie uwierzytelnionego klienta, co ułatwia wykonywanie wywołań GitHub API przy użyciu podejścia opartego na JavaScript.
