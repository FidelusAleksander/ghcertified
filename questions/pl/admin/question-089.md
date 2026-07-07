---
question: "Jakie kroki są wymagane do utworzenia grupy runnerów hostowanych samodzielnie dla organizacji na GitHubie?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access"
---

- [x] Przejdź do ustawień organizacji, wybierz Actions, kliknij Runner groups, utwórz nową grupę i przypisz politykę dostępu do repozytorium.
- [ ] W repozytorium `.github` zmodyfikuj plik `.gitconfig`, aby określić grupy runnerów i powiązane polityki dostępu.
- [ ] Skontaktuj się z pomocą techniczną GitHub, aby poprosić o utworzenie grupy runnerów i podać listę repozytoriów do konfiguracji dostępu.
- [ ] Użyj workflow GitHub Actions, aby automatycznie generować grupy runnerów na podstawie aktywności i wzorców użytkowania repozytoriów.
