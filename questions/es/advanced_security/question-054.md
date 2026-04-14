---
question: "¿Cómo puedes configurar tu repositorio de GitHub para ejecutar análisis de CodeQL en un horario programado?"
documentation: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning#about-default-setup"
---

- [x] Creando un workflow de GitHub Actions con un disparador `schedule`. El workflow debe utilizar acciones del repositorio `github/codeql-action`.
- [x] Usando la configuración predeterminada de análisis de CodeQL.
- [ ] Configurando la propiedad `codeql.trigger` en la configuración del repositorio como `schedule`.
- [ ] Agregando una propiedad `schedule` al archivo de configuración `.github/codeql.yml`.
- [ ] Solicitando a soporte de GitHub que habilite el análisis programado de CodeQL para el repositorio.
