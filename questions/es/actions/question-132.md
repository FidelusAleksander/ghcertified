---
question: "¿Cuál de las siguientes afirmaciones son verdaderas con respecto a GitHub Enterprise Server (GHES)?"
documentation: "https://docs.github.com/en/enterprise-server/admin/overview/about-github-enterprise-server"
---

- [x] Los flujos de trabajo de GHES no pueden acceder a GitHub.com ni a las acciones de GitHub Marketplace de forma predeterminada. 
- [x] `actions/actions-sync` está principalmente dedicado a trasladar acciones de GitHub.com a una instancia de GHES.
> La sincronización de acciones desde GitHub.com se logra principalmente a través de GitHub Connect o `actions-sync`. La herramienta `actions/actions-sync` es una [manera manual](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) de realizar este proceso.
- [ ] Se permite que GHES utilice versiones avanzadas de los runners alojados por GitHub.
> GHES no tiene acceso a los runners alojados por GitHub en absoluto. Esto se menciona en la [documentación de `actions/actions-sync`](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom).
- [ ] Usando GitHub Connect, los usuarios pueden seguir un proceso manual para acceder a las acciones de GitHub.com. Este proceso debe realizarse una vez por cada acción deseada.
> GitHub Connect permite el acceso automático a las acciones de GitHub.com. Los usuarios deben seguir un proceso de configuración, pero generalmente esto solo es necesario hacerlo una vez. Consulta la [documentación de GitHub Connect](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#enabling-automatic-access-to-public-githubcom-actions) para más detalles.
- [x] Las instancias de GitHub Enterprise Server son auto gestionadas, en comparación con GitHub Enterprise Cloud (GHEC), que es alojado y gestionado por GitHub.
> [GitHub Enterprise Server](https://docs.github.com/en/enterprise-server/admin/overview/about-github-enterprise-server) es una versión auto gestionada de la plataforma GitHub. Las instancias de [GitHub Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud) están alojadas en un subdominio dedicado de GHE.com. Todos los subdominios de GHE.com son alojados por GitHub.
