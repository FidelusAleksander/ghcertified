---
question: "Al usar GitHub Actions para acceder a recursos en uno de los proveedores de nube (como AWS, Azure o GCP), la forma más segura y recomendada de autenticar es"
title: "Pregunta 058"
---

> https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect
1. [x] Usando OIDC
1. [ ] Usando Vault
1. [ ] Almacenar claves de acceso en `secrets`
> No se recomienda usar claves de acceso de larga duración en caso de filtraciones de seguridad o ataques como [inyección de scripts](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)
1. [ ] Almacenar claves de acceso en `variables`
> No se deben almacenar valores sensibles en `variables`
