---
question: "Cuando se utilizan GitHub Actions para acceder a recursos en uno de los proveedores de nube (como AWS, Azure o GCP), la forma más segura y recomendada de autenticarse es"
documentation: "https://docs.github.com/en/actions/concepts/security/openid-connect"
---

- [x] Usando OIDC
- [ ] Usando Vault
- [ ] Almacenando claves de acceso en `secrets`
> No se recomienda utilizar claves de acceso de larga duración en caso de filtraciones de seguridad o ataques, como [inyección de scripts](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)
- [ ] Almacenando claves de acceso en `variables`
> No se deben almacenar valores sensibles en `variables`
