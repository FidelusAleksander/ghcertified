---
question: "¿Por qué deberías usar OIDC al conectar un workflow con proveedores de nube?"
documentation: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect"
---

- [x] OIDC evita que tengas que mantener credenciales de nube como secretos de GitHub de larga duración
- [x] OIDC implica la generación y uso de tokens de corta duración, lo cual es más seguro
- [ ] Los proveedores de nube requieren el uso de OIDC.
> OIDC es opcional y recomendado, pero no estrictamente obligatorio.
- [ ] Usar OIDC permite eludir la configuración de políticas de confianza con los proveedores de nube
> Debes configurar políticas de confianza con el proveedor de nube para usar OIDC
- [ ] OIDC genera JSON web tokens (JWTs) que pueden ser usados en diferentes jobs del workflow
> La infraestructura de OIDC implica crear JWTs que son únicos para cada job del workflow
- [ ] Usar OIDC dentro de un workflow guardará automáticamente los logs de ese workflow en el almacenamiento en la nube
> OIDC se ocupa de la seguridad al conectar con proveedores de nube, no del almacenamiento. Por lo tanto, no está involucrado en guardar los logs de los workflows en ningún lugar.
