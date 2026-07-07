---
question: "¿Por qué deberías usar OIDC al conectar un flujo de trabajo con proveedores de nube?"
documentation: "https://docs.github.com/en/actions/concepts/security/openid-connect"
---

- [x] OIDC evita que tengas que conservar credenciales de nube como secretos permanentes de GitHub 
- [x] OIDC implica la generación y uso de tokens de corta duración, lo cual es más seguro
- [ ] Los proveedores de nube requieren el uso de OIDC.
> OIDC es opcional y recomendado, pero no estrictamente necesario.
- [ ] Usar OIDC te permite evitar la configuración de políticas de confianza con los proveedores de nube
> Debes configurar políticas de confianza con el proveedor de nube para usar OIDC
- [ ] OIDC genera tokens web JSON (JWTs) que se pueden usar en trabajos de flujo de trabajo
> La infraestructura de OIDC implica crear JWTs que son únicos para cada trabajo de flujo de trabajo
- [ ] Usar OIDC dentro de un flujo de trabajo guardará automáticamente los registros de ese flujo de trabajo en el almacenamiento en la nube
> OIDC se enfoca en la seguridad al conectarse con proveedores de nube, no en el almacenamiento. Por lo tanto, no está involucrado en guardar los registros de los flujos de trabajo en ningún lugar.
