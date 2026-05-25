---
question: "¿Cómo se integran los flujos de trabajo con OIDC después de que se haya establecido una relación de confianza?"
documentation: "https://docs.github.com/en/actions/concepts/security/openid-connect#how-oidc-integrates-with-github-actions"
---

- [x] Un trabajo del flujo de trabajo solicita un token OIDC al proveedor de OIDC de GitHub. El token OIDC es validado por el proveedor de la nube, que luego proporciona un token de acceso a la nube para que el flujo de trabajo pueda acceder a los recursos en la nube.
- [ ] Un trabajo del flujo de trabajo solicita un token de acceso a la nube al proveedor de acceso a la nube de GitHub. Luego, el token es validado por el proveedor de la nube, que proporciona un token OIDC para que el flujo de trabajo pueda acceder a los recursos en la nube.
> Los tokens OIDC se solicitan primero, luego se genera un token de acceso a la nube. Los tokens OIDC no pueden acceder a los recursos en la nube.
- [ ] El disparador del evento `on: OIDC_request` solicita un token de acceso a la nube al proveedor de acceso a la nube de GitHub. Luego, el token es validado por el proveedor de la nube, lo que permite al flujo de trabajo acceder a los recursos en la nube.
> No existe un disparador de evento `on: OIDC_request`.
- [ ] El disparador del evento `on: OIDC_request` solicita un token OIDC al proveedor de OIDC de GitHub. Luego, el token es validado por el proveedor de la nube, lo que permite al flujo de trabajo acceder a los recursos en la nube.
> No existe un disparador de evento `on: OIDC_request`.
- [ ] Después de agregar un flujo de trabajo a la lista de "flujos de trabajo permitidos de OIDC" en la configuración del repositorio, los flujos de trabajo crearán automáticamente tokens OIDC y de acceso a la nube en su propio nombre. Estos tokens pueden usarse inmediatamente en el flujo de trabajo para interactuar con los proveedores de la nube.
> No existe una configuración de "flujos de trabajo permitidos de OIDC".  
