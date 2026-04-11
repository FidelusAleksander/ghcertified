---
title: "Pytanie 108"
question: "Jaka jest jedna z głównych korzyści wynikających z używania Personal Access Token (PAT) zamiast standardowego loginu i hasła do uwierzytelniania w GitHubie?"
---

> https://learn.microsoft.com/en-us/training/modules/github-introduction-administration/3-how-github-authentication-works  
1. [ ] PAT-y mogą być zarządzane przez organizację i przedsiębiorstwo.  
> PAT-y, jak sama nazwa wskazuje, są osobiste. Organizacje i przedsiębiorstwa mogą zarządzać innymi formami uwierzytelniania, takimi jak LDAP, SAML i klucze SSH.  
1. [ ] PAT to dodatkowa warstwa zabezpieczeń używana podczas logowania się do witryn internetowych lub aplikacji. Dzięki PAT użytkownicy muszą zalogować się swoim loginem i hasłem, a także dostarczyć inną formę uwierzytelniania, do której tylko oni mają dostęp.  
> Jest to opis uwierzytelniania wieloskładnikowego lub dwuskładnikowego.  
1. [x] PAT może być używany do uwierzytelniania w GitHubie podczas korzystania z GitHub API lub wiersza poleceń. Użytkownicy generują token za pomocą opcji ustawień w GitHubie i przypisują uprawnienia tokenu do repozytorium lub organizacji.  
1. [ ] PAT pozwala na uwierzytelnianie GitHub Enterprise Server w oparciu o istniejące konta i centralne zarządzanie dostępem do repozytoriów.  
> Jest to opis korzyści z używania LDAP w GitHubie, a nie PAT.  
