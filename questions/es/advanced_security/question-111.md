---
question: "Necesitas habilitar GitHub Actions para"
documentation: "https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-version-updates"
---

- [x] Revisión de dependencias
- [ ] Actualizaciones de seguridad de Dependabot
- [ ] Actualizaciones de versión de Dependabot
- [ ] Todas estas
> GitHub Actions no es necesario para que las actualizaciones de versión y las actualizaciones de seguridad de Dependabot se ejecuten en GitHub. Sin embargo, las pull requests abiertas por Dependabot pueden activar workflows que ejecuten actions.
- [ ] Ninguna de estas
> La revisión de dependencias utiliza la GitHub Action `actions/dependency-review-action`.
