---
question: "¿Cómo pueden las organizaciones que utilizan GitHub Enterprise Server habilitar la sincronización automática de las GitHub Actions de terceros alojadas en GitHub.com con su instancia de GitHub Enterprise Server?"
documentation: "https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect"
---

- [x] Usando GitHub Connect  
> Cuando se habilita, GitHub Connect se utiliza para establecer automáticamente una conexión segura entre una instancia de GitHub Enterprise Server (GHES) y una cuenta de GitHub Enterprise Cloud (GHEC) (GHEC está alojada en GitHub.com). La cuenta de GHEC sirve como una identidad confiable (autenticada) que GitHub.com utiliza para autorizar a la instancia de GHES a acceder a las acciones alojadas en GitHub.com.  
- [ ] GitHub Enterprise Server tiene acceso a todas las GitHub.com Actions de forma predeterminada  
> GitHub Actions en GitHub Enterprise Server está diseñado para trabajar en entornos sin acceso completo a Internet. Por defecto, los flujos de trabajo no pueden usar acciones de GitHub.com ni del GitHub Marketplace.  
- [ ] Usando la herramienta actions-sync  
> Si bien se puede usar actions-sync para sincronizar manualmente repositorios individuales de acciones desde GitHub.com a una empresa, este es un enfoque manual. Consulta la [documentación](https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom#about-the-actions-sync-tool) para más detalles.  
- [ ] GitHub Enterprise Server (GHES) no puede usar GitHub.com Actions debido a su naturaleza local y a la falta de acceso a Internet.  
> Si bien los flujos de trabajo ubicados en una instancia de GHES no pueden usar acciones de GitHub.com ni acciones de GitHub Marketplace de forma predeterminada, esto se puede solucionar mediante el uso de GitHub Connect o actions-sync.  
