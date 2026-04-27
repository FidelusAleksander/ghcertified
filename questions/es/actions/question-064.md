---
question: "¿Cómo pueden las organizaciones que están utilizando GitHub Enterprise Server habilitar la sincronización automática de GitHub Actions de terceros alojados en GitHub.com en su instancia de GitHub Enterprise Server?"
documentation: "https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect"
---

- [x] Usando GitHub Connect  
> Cuando está habilitado, GitHub Connect se utilizará para establecer automáticamente una conexión segura entre una instancia de GitHub Enterprise Server (GHES) y una cuenta de GitHub Enterprise Cloud (GHEC) (GHEC está alojada en GitHub.com). La cuenta GHEC sirve como una identidad confiable (autenticada) que GitHub.com utiliza para autorizar a la instancia GHES a acceder a las acciones alojadas en GitHub.com.  
- [ ] GitHub Enterprise Server tiene acceso a todas las GitHub.com Actions de manera predeterminada  
> GitHub Actions en GitHub Enterprise Server está diseñado para funcionar en entornos sin pleno acceso a internet. Por defecto, los workflows no pueden usar acciones de GitHub.com ni de GitHub Marketplace.  
- [ ] Usando la herramienta actions-sync  
> Aunque actions-sync puede utilizarse para sincronizar repositorios individuales de acciones desde GitHub.com hacia una empresa, este es un enfoque manual. Consulta la [documentación](https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom#about-the-actions-sync-tool) para más detalles.  
- [ ] GitHub Enterprise Server (GHES) no puede usar GitHub.com Actions debido a su naturaleza local y falta de acceso a internet.  
> Si bien los workflows ubicados en una instancia GHES no pueden usar GitHub.com Actions ni las acciones de GitHub Marketplace de forma predeterminada, esto puede solucionarse mediante el uso de GitHub Connect o actions-sync.  
