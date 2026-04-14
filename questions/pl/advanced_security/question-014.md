---
question: "Umieściłeś fałszywe sekrety w swoim kodzie testowym i zostały one wykryte przez GitHub's secret scanning. Co możesz zrobić, aby poinformować GitHub, że są to fałszywe sekrety używane w testach i mogą być pominięte przez secret scanning?"
documentation: "https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/excluding-folders-and-files-from-secret-scanning"
---

- [x] Tworząc plik `secret_scanning.yml`, w którym zadeklarujesz ścieżki zawierające fałszywe sekrety, aby skanowanie je pominęło
- [x] Zamknij alert Secret Scanning, wybierając powód zamknięcia `Used in tests`
- [ ] W swoich plikach testowych dodaj komentarz `#gh_ignore: fake secret` do linii zawierającej fałszywy sekret.
- [ ] Tworząc plik `.github/codeql.yml`, w którym zadeklarujesz ścieżki zawierające fałszywe sekrety, aby skanowanie je pominęło
