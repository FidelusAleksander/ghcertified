---
question: "Jak można wykluczyć określone katalogi lub pliki z procesu skanowania sekretów?"
documentation: "https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/exclude-folders-and-files"
---

- [x] Poprzez utworzenie pliku `secret_scanning.yml` i dodanie ścieżek, które nie powinny być skanowane
- [ ] Nie można wykluczyć konkretnych plików ani katalogów z procesu skanowania. Po włączeniu skanowania sekretów dla repozytorium wszystkie pliki i katalogi będą skanowane.
- [ ] Umieszczając te pliki w pliku `.gitignore`
- [ ] Poprzez utworzenie pliku `dependabot.yml` i dodanie ścieżek, które nie powinny być skanowane
