---
question: "Al usar GitHub Actions para acceder a recursos en uno de los proveedores de nube (como AWS, Azure o GCP), la forma más segura y recomendada de autenticar es"
documentation: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect"
---

- [x] Usando OIDC
- [ ] Usando Vault
- [ ] Almacenar claves de acceso en `secrets`
> No se recomienda usar claves de acceso de larga duración en caso de filtraciones de seguridad o ataques como [inyección de scripts](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)
- [ ] Almacenar claves de acceso en `variables`
> No se deben almacenar valores sensibles en `variables`
