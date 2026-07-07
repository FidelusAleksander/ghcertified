---
question: "¿Cómo pueden las organizaciones que utilizan GitHub Enterprise Server habilitar la sincronización automática de GitHub Actions de terceros alojados en GitHub.com con su instancia de GitHub Enterprise Server?"
documentation: "https://docs.github.com/en/enterprise-server@3.17/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect"
---

- [x] Usando GitHub Connect
> Cuando está habilitado, GitHub Connect se utilizará para establecer automáticamente una conexión segura entre una instancia de GitHub Enterprise Server (GHES) y una cuenta de GitHub Enterprise Cloud (GHEC) (GHEC está alojada en GitHub.com). La cuenta de GHEC funciona como una identidad confiable (autenticada) que GitHub.com utiliza para autorizar la instancia de GHES a acceder a acciones alojadas en GitHub.com.   
- [ ] GitHub Enterprise Server tiene acceso a todas las GitHub.com Actions por defecto
> GitHub Actions en GitHub Enterprise Server está diseñado para funcionar en entornos sin acceso completo a internet. Por defecto, los workflows no pueden usar acciones de GitHub.com ni del GitHub Marketplace.
- [ ] Usando la herramienta actions-sync
> Aunque actions-sync se puede usar para sincronizar repositorios individuales de acciones desde GitHub.com a una empresa, este es un enfoque manual. Consulta la [documentación](https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom#about-the-actions-sync-tool) para más detalles.
- [ ] GitHub Enterprise Server (GHES) no puede usar GitHub.com Actions debido a su naturaleza on-premise y la falta de acceso a internet.
> Aunque los workflows ubicados en una instancia de GHES no pueden usar acciones de GitHub.com ni del GitHub Marketplace por defecto, esto puede solucionarse mediante el uso de GitHub Connect o actions-sync. 
