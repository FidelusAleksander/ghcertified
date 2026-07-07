---
question: "Jak możesz zapobiec wypychaniu commitów zawierających dane uwierzytelniające dostawców chmurowych na GitHub?"
documentation: "https://docs.github.com/en/code-security/concepts/secret-security/push-protection"
---

- [x] Włącz regułę ochrony przed wypychaniem dla skanowania tajnych danych w Twoim repozytorium lub organizacji.
- [ ] Dołącz plik `.gitignore` w swoim repozytorium, który będzie ignorować pliki zawierające tajne dane.
- [ ] Utwórz GitHub Action, które będzie skanowało Twoje commity w poszukiwaniu tajnych danych przed ich wypchnięciem na GitHub.
- [ ] Włącz regułę ochrony gałęzi dla Twojego repozytorium.
