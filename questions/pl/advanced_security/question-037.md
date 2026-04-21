---
question: "Co robi domyślna konfiguracja analizy CodeQL w GitHub?"
documentation: "https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql#about-code-scanning-with-codeql"
---

- [x] Automatycznie wykrywa języki, wybiera domyślny zestaw zapytań i konfiguruje wyzwalacze skanowania
- [ ] Wymaga od użytkowników wyboru języków i zdefiniowania niestandardowego zestawu zapytań przed uruchomieniem skanów
> Okno dialogowe potwierdzenia jest wyświetlane podczas włączania domyślnej konfiguracji, ale języki i zestaw zapytań są automatycznie wstępnie wybrane
- [ ] Analizuje tylko główny język repozytorium przy użyciu rozszerzonego zestawu zapytań
> Domyślna konfiguracja skanuje wszystkie obsługiwane języki, a nie tylko główny język, i używa domyślnego zestawu zapytań
- [ ] Tworzy plik workflow CodeQL w repozytorium, który musi zostać scalony przed rozpoczęciem skanowania
> To opisuje zaawansowaną konfigurację, a nie domyślną konfigurację
