---
question: "¿De qué maneras puedes descargar un artefacto?"
documentation: "https://github.com/actions/upload-artifact#inputs"
---

- [x] Usando la acción `actions/download-artifact` en un workflow 
- [x] Descargando artefactos desde la interfaz de usuario de GitHub Actions en la ejecución del workflow
> Usar la interfaz de usuario te permite un enfoque práctico para descargar artefactos. Consulta la [documentación](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/download-workflow-artifacts) para más detalles.
- [x] Usando un endpoint específico de la API de GitHub
> La API de GitHub tiene un endpoint "Download an artifact". Consulta la [documentación](https://docs.github.com/en/rest/actions/artifacts?apiVersion=2026-03-10#download-an-artifact) para más detalles.
- [ ] Usando la acción `actions/upload-artifact` en un workflow
> `actions/upload-artifact` se utiliza para subir artefactos, no para descargarlos.
- [ ] Accediendo remotamente a los runners autohospedados mediante SSH y accediendo al directorio `.github/artifacts`
> Los artefactos generalmente se almacenan utilizando la infraestructura de GitHub, no en los runners. Hay una excepción: cuando se utiliza GitHub Enterprise Server (GHES), los artefactos y otros datos generados por las ejecuciones de workflows se almacenan en un almacenamiento de blobs externo. Consulta la [documentación](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#external-storage-requirements) para más detalles sobre los requisitos de almacenamiento en GHES.
