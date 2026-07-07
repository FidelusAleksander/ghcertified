---
question: "Co robi domyślna konfiguracja analizy CodeQL w GitHub?"
documentation: "https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning-with-codeql#about-code-scanning-with-codeql"
---

- [x] Automatycznie wykrywa języki, wybiera domyślny zestaw zapytań i konfiguruje wyzwalacze skanowania
- [ ] Wymaga, aby użytkownicy wybrali języki i zdefiniowali niestandardowy zestaw zapytań przed uruchomieniem skanowania
> Po włączeniu domyślnej konfiguracji wyświetlane jest okno potwierdzające, ale języki i zestaw zapytań są automatycznie wstępnie wybrane
- [ ] Analizuje tylko główny język repozytorium za pomocą rozszerzonego zestawu zapytań
> Domyślna konfiguracja skanuje wszystkie obsługiwane języki, a nie tylko główny, i używa domyślnego zestawu zapytań
- [ ] Tworzy plik CodeQL workflow w repozytorium, który musi zostać scalony przed rozpoczęciem skanowania
> To opisuje konfigurację zaawansowaną, a nie domyślną konfigurację
