---
question: "¿Cómo puedes configurar tu repositorio de GitHub para ejecutar un análisis de CodeQL según un horario?"
documentation: "https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning#about-default-setup"
---

- [x] Creando un workflow de GitHub Actions con un disparador `schedule`. El workflow debe utilizar acciones del repositorio `github/codeql-action`.
- [x] Usando la configuración predeterminada de análisis de CodeQL.
- [ ] Configurando la propiedad `codeql.trigger` en los ajustes del repositorio como `schedule`.
- [ ] Agregando una propiedad `schedule` al archivo `.github/codeql.yml`.
- [ ] Presentando una solicitud al soporte de GitHub para habilitar el análisis programado de CodeQL para el repositorio.
