---
question: "¿Cuál de las siguientes respuestas es correcta con respecto a los tokens de acceso de instalación?"
documentation: "https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation#using-an-installation-access-token-to-authenticate-as-an-app-installation"
---

- [x] Los tokens de acceso de instalación son tokens de corta duración ideales para actividades de automatización, pero requieren configurar una GitHub App.
- [x] `GITHUB_TOKEN` es un tipo de token de acceso de instalación.
> `GITHUB_TOKEN` es un token de acceso de instalación de GitHub App que se genera automáticamente para cada ejecución de workflow. Consulta la [documentación](https://docs.github.com/en/actions/concepts/security/github_token) para obtener más detalles.
- [x] Se puede llamar a `actions/create-github-app-token` dentro de workflows para crear un token de acceso de instalación disponible para uso inmediato.
- [ ] Se puede llamar a `actions/create-github-app-token` dentro de workflows para crear un token de acceso de instalación, pero el token de acceso de instalación solo se puede usar en futuras ejecuciones del workflow.
> Una vez creado, un token de acceso de instalación se puede usar de inmediato. Consulta la [página oficial de esta acción](https://github.com/actions/create-github-app-token) para obtener más detalles.
- [ ] Los tokens de acceso de instalación no pueden configurarse para actuar en nombre de su GitHub App asociada.
> Los tokens de acceso de instalación a menudo se configuran para actuar en nombre de su GitHub App asociada. Esto puede facilitar la auditoría de actividades automatizadas.
