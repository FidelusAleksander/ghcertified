---
question: "¿De qué maneras puedes eliminar artefactos de los workflows?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/remove-workflow-artifacts"
---

- [x] Usando la interfaz de usuario de GitHub Actions para navegar a una ejecución de workflow y eliminar los artefactos individualmente
- [x] Usando la interfaz de usuario de GitHub Actions para eliminar la ejecución del workflow que generó los artefactos
> Eliminar una ejecución de workflow también elimina los artefactos asociados con dicha ejecución.
- [x] Usando un endpoint específico de la API de GitHub
> La API de GitHub tiene un endpoint "Delete an artifact". Consulta la [documentación](https://docs.github.com/en/rest/actions/artifacts?apiVersion=2026-03-10#delete-an-artifact) para más detalles.
- [ ] Usando la acción `actions/delete-artifact` en un workflow 
- [ ] Accediendo de forma remota a los self-hosted runners a través de SSH, navegando al directorio `.github/artifacts` y eliminando los artefactos seleccionados
> Generalmente, los artefactos se almacenan utilizando la infraestructura de GitHub, no los runners. 
- [ ] Configurando el período de retención de los artefactos a 0 días
> Los períodos de retención de artefactos no pueden configurarse en 0 días. Consulta la [documentación](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization) para más información.
