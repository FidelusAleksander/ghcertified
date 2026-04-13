---
question: "Jak możesz zapobiec przesyłaniu commitów zawierających dane uwierzytelniające dostawcy usług w chmurze do GitHub?"
documentation: "https://docs.github.com/en/code-security/secret-scanning/push-protection-for-repositories-and-organizations"
---

- [x] Włącz regułę ochrony przed przesyłaniem z tajnym skanowaniem dla swojego repozytorium lub organizacji.
- [ ] Uwzględnij plik `.gitignore` w swoim repozytorium, który będzie ignorować pliki zawierające tajne dane.
- [ ] Utwórz GitHub Action, który przeskanuje twoje commity w poszukiwaniu tajnych danych, zanim zostaną przesłane do GitHub.
- [ ] Włącz regułę ochrony gałęzi dla swojego repozytorium.
