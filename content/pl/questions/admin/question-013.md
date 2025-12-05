---
question: "Jakie są kroki, aby włączyć i wymusić SAML SSO dla jednej organizacji?"
title: "Pytanie 013"
---

> https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization
1. [x] Przejdź do `Settings` swojej organizacji, kliknij `Authentication security`, wybierz `Enable SAML authentication`, skonfiguruj ustawienia IdP, przetestuj konfigurację SAML i wymuś SAML SSO.
1. [ ] Z `Enterprise account settings`, otwórz `Security`, włącz SAML SSO i wymuś dla wszystkich organizacji; następnie skonfiguruj IdP. (Zarządza to SSO na poziomie całego Enterprise, a nie jednej organizacji.)
1. [ ] W organizacji przejdź do `Settings` → `Member privileges`, włącz `SAML SSO`, dodaj metadane IdP i wymuś bez testowania. (SAML jest konfigurowany w `Authentication security`, a testowanie jest wymagane.)
1. [ ] Otwórz `Settings` repozytorium, wybierz `Security`, włącz `SAML SSO`, skonfiguruj IdP i wymuś. (SAML SSO jest ustawiany na poziomie organizacji, a nie dla poszczególnych repozytoriów.)
