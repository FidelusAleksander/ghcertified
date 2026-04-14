---
question: "Jakie są kroki do włączenia i wymuszenia Saml SSO dla jednej organizacji?"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization"
---

- [x] Przejdź do ustawień swojej organizacji (`Settings`), kliknij `Authentication security`, wybierz `Enable SAML authentication`, skonfiguruj ustawienia IdP, przetestuj konfigurację SAML, i wymuś SAML SSO.
- [ ] Z ustawień konta `Enterprise`, otwórz `Security`, włącz SAML SSO i wymuś dla wszystkich organizacji; następnie skonfiguruj IdP. (To zarządza SSO w całym przedsiębiorstwie, a nie w pojedynczej organizacji.)
- [ ] W organizacji przejdź do `Settings` → `Member privileges`, włącz `SAML SSO`, dodaj metadane IdP i wymuś bez testowania. (SAML jest skonfigurowany w `Authentication security`, a testowanie jest wymagane.)
- [ ] Otwórz `Settings` repozytorium, wybierz `Security`, włącz `SAML SSO`, skonfiguruj IdP i wymuś. (SAML SSO jest ustawiany na poziomie organizacji, a nie pojedynczego repozytorium.)
