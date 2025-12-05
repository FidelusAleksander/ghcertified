---
question: "¿Cuáles son los pasos para habilitar y aplicar SAML SSO para una sola organización?"
title: "Pregunta 013"
---

> https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization
1. [x] Navega a los `Settings` de tu organización, haz clic en `Authentication security`, selecciona `Enable SAML authentication`, configura los ajustes del IdP, prueba la configuración de SAML y aplica SAML SSO.
1. [ ] Desde los `Enterprise account settings`, abre `Security`, habilita SAML SSO y aplica para todas las organizaciones; luego configura el IdP. (Esto gestiona SSO a nivel empresarial, no para una sola organización).
1. [ ] En la organización, ve a `Settings` → `Member privileges`, habilita `SAML SSO`, añade los metadatos del IdP y aplica sin probar. (SAML se configura en `Authentication security`, y es necesario probarlo).
1. [ ] Abre los `Settings` del repository, elige `Security`, habilita `SAML SSO`, configura el IdP y aplica. (SAML SSO se configura a nivel de organización, no por repository).
