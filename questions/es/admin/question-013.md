---
question: "¿Cuáles son los pasos para habilitar y forzar SAML SSO para una organización única?"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/enabling-and-testing-saml-single-sign-on-for-your-organization#enabling-and-testing-saml-single-sign-on-for-your-organization"
---

- [x] Navega a la `Configuración` de tu organización, haz clic en `Seguridad de autenticación`, selecciona `Habilitar autenticación SAML`, configura los ajustes del IdP, prueba la configuración de SAML y fuerza SAML SSO.
- [ ] Desde la `Configuración de la cuenta Enterprise`, abre `Seguridad`, habilita SAML SSO y fuerza para todas las organizaciones; luego configura el IdP. (Esto gestiona SSO a nivel empresarial, no para una única organización).
- [ ] En la organización, ve a `Configuración` → `Privilegios de miembros`, habilita `SAML SSO`, agrega los metadatos del IdP y fuerza sin realizar pruebas. (SAML se configura en `Seguridad de autenticación` y es necesario realizar pruebas).
- [ ] Abre la `Configuración` del repositorio, elige `Seguridad`, habilita `SAML SSO`, configura el IdP y fuerza. (SAML SSO se establece a nivel de la organización, no por repositorio).
