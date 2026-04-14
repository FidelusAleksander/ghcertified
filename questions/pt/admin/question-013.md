---
question: "Quais são as etapas para habilitar e aplicar SAML SSO para uma única organização?"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization"
---

- [x] Navegue até as `Settings` da sua organização, clique em `Authentication security`, selecione `Enable SAML authentication`, configure as definições do IdP, teste a configuração SAML e aplique o SAML SSO.
- [ ] Nas `Enterprise account settings`, abra `Security`, habilite SAML SSO e aplique para todas as organizações; depois configure o IdP. (Isso gerencia o SSO em toda a empresa, não para uma única organização.)
- [ ] Na organização, vá para `Settings` → `Member privileges`, habilite `SAML SSO`, adicione os metadados do IdP e aplique sem testar. (SAML é configurado em `Authentication security`, e é necessário testar.)
- [ ] Abra as `Settings` do repositório, escolha `Security`, habilite `SAML SSO`, configure o IdP e aplique. (SAML SSO é configurado no nível da organização, não por repositório.)
