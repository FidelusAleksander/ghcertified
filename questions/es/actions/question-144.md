---
question: "¿Cómo puedes cambiar el período de retención de los artefactos generados por un flujo de trabajo específico?"
documentation: "https://github.com/actions/upload-artifact#inputs"
---

- [x] Utilizando la entrada `retention-days` en `actions/upload-artifact`
- [ ] Utilizando la entrada `retention-days` en `actions/download-artifact`
> `actions/download-artifact` se usa para descargar artefactos. Por lo tanto, no tiene influencia sobre cuánto tiempo debe conservarse un artefacto cargado. Además, `retention-days` no es una entrada para esta acción. Consulta [la documentación](https://github.com/actions/download-artifact#inputs) para más detalles.
- [ ] En el repositorio del flujo de trabajo, navegando a la configuración de Actions y editando el valor de la configuración "Artifact and log retention" para el flujo de trabajo listado.
> Aunque puedes editar la configuración ["Artifact and log retention"](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository) en un repositorio, esto se aplica a todos los flujos de trabajo dentro de ese repositorio, no a un flujo de trabajo individual. Esta configuración no enumera cada flujo de trabajo individualmente.
- [ ] Navegando a la configuración de Actions de la organización y editando el valor de la configuración "Artifact and log retention".
> Aunque puedes editar la configuración ["Artifact and log retention"](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization) en una organización, esto se aplica a todos los flujos de trabajo dentro de una organización, no a un flujo de trabajo individual. 
