---
question: "Jaką jedną z głównych korzyści daje użycie Personal Access Token (PAT) zamiast standardowego nazwy użytkownika i hasła do uwierzytelniania w GitHub?"
documentation: "https://learn.microsoft.com/en-us/training/modules/github-introduction-administration/3-how-github-authentication-works"
---

- [ ] PAT-y mogą być zarządzane przez organizację i Enterprise.
> PAT-y, jak sama nazwa wskazuje, są osobiste. Organizacje i Enterprise mogą zarządzać innymi formami uwierzytelniania, takimi jak LDAP, SAML i klucze SSH.
- [ ] PAT to dodatkowa warstwa bezpieczeństwa stosowana podczas logowania do stron internetowych lub aplikacji. Dzięki PAT użytkownicy muszą zalogować się za pomocą swojej nazwy użytkownika i hasła oraz podać inną formę uwierzytelnienia, do której tylko oni mają dostęp.
> To opis uwierzytelniania wieloskładnikowego lub dwuskładnikowego.
- [x] PAT może być używany do uwierzytelniania w GitHub podczas korzystania z GitHub API lub wiersza poleceń. Użytkownicy generują token za pomocą opcji ustawień GitHub i przypisują uprawnienia tokena do repozytorium lub organizacji.
- [ ] PAT pozwala uwierzytelnić GitHub Enterprise Server przy użyciu istniejących kont oraz centralnie zarządzać dostępem do repozytorium.
> To opis zalet LDAP dla GitHub, a nie PAT.
