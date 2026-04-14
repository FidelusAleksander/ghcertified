---
question: "Jakie kroki są potrzebne do utworzenia grupy runnerów self-hosted dla organizacji na GitHub?"
documentation: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups"
---

- [x] Przejdź do ustawień organizacji, wybierz Actions, kliknij Runner groups, utwórz nową grupę i przypisz politykę dostępu do repozytoriów.
- [ ] W repozytorium `.github` zmodyfikuj plik `.gitconfig`, aby określić grupy runnerów i związane z nimi polityki dostępu.
- [ ] Skontaktuj się z pomocą techniczną GitHub, aby poprosić o utworzenie grupy runnerów i dostarczenie listy repozytoriów do konfiguracji dostępu.
- [ ] Użyj workflow GitHub Actions, aby automatycznie wygenerować grupy runnerów na podstawie aktywności i wzorców użytkowania repozytoriów.
