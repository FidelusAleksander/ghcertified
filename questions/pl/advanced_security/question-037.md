---
question: "Co robi domyślna konfiguracja analizy CodeQL w GitHub?"
documentation: "https://docs.github.com/en/code-security/concepts/code-scanning/codeql"
---

- [x] Automatycznie wykrywa języki, wybiera domyślny zestaw zapytań i konfiguruje wyzwalacze skanowania
- [ ] Wymaga od użytkowników wyboru języków i zdefiniowania niestandardowego zestawu zapytań przed rozpoczęciem skanów
> Przy włączaniu domyślnej konfiguracji wyświetlane jest okno dialogowe z potwierdzeniem, ale języki i zestaw zapytań są automatycznie wstępnie wybrane
- [ ] Analizuje tylko główny język repozytorium, używając rozszerzonego zestawu zapytań
> Domyślna konfiguracja skanuje wszystkie obsługiwane języki, a nie tylko główny, i korzysta z domyślnego zestawu zapytań
- [ ] Tworzy plik workflow CodeQL w repozytorium, który musi zostać scalony przed rozpoczęciem skanowania
> To opisuje zaawansowaną konfigurację, a nie domyślną konfigurację
