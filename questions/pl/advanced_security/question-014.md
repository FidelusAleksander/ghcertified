---
question: "W swoim kodzie testowym zawarłeś fałszywe dane uwierzytelniające, które zostały wykryte przez funkcję skanowania sekretów GitHub. Co możesz zrobić, aby poinformować GitHub, że są to fałszywe dane używane w testach i mogą być pomijane przez skanowanie sekretów?"
documentation: "https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/exclude-folders-and-files"
---

- [x] Tworząc plik `secret_scanning.yml`, w którym zadeklarujesz ścieżki, gdzie znajdują się fałszywe dane uwierzytelniające, aby były one pomijane podczas skanowania
- [x] Zamykając powiadomienie Secret Scanning Alert z powodem zamknięcia `Used in tests`
- [ ] Dodając w plikach testowych komentarz `#gh_ignore: fake secret` w linii, w której znajduje się fałszywy sekret.
- [ ] Tworząc plik `.github/codeql.yml`, w którym zadeklarujesz ścieżki, gdzie znajdują się fałszywe dane uwierzytelniające, aby były one pomijane podczas skanowania
