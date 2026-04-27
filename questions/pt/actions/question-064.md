---
question: "Como organizações que utilizam o GitHub Enterprise Server podem habilitar a sincronização automática de GitHub Actions de terceiros hospedadas no GitHub.com para sua instância do GitHub Enterprise Server?"
documentation: "https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect"
---

- [x] Usando o GitHub Connect  
> Quando ativado, o GitHub Connect será usado para estabelecer automaticamente uma conexão segura entre uma instância do GitHub Enterprise Server (GHES) e uma conta do GitHub Enterprise Cloud (GHEC) (GHEC é hospedado no GitHub.com). A conta GHEC serve como uma identidade confiável (autenticada) que o GitHub.com usa para autorizar a instância do GHES a acessar as actions hospedadas no GitHub.com.   
- [ ] O GitHub Enterprise Server tem acesso a todas as GitHub.com Actions por padrão  
> O GitHub Actions no GitHub Enterprise Server foi projetado para funcionar em ambientes sem acesso completo à internet. Por padrão, os workflows não podem usar actions do GitHub.com e do GitHub Marketplace.  
- [ ] Usando a ferramenta actions-sync  
> Embora o actions-sync possa ser usado para sincronizar repositórios individuais de actions do GitHub.com para uma empresa, esta é uma abordagem manual. Consulte a [documentação](https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom#about-the-actions-sync-tool) para mais detalhes.  
- [ ] O GitHub Enterprise Server (GHES) não pode usar GitHub.com Actions devido à sua natureza on-premise e falta de acesso à internet.  
> Embora workflows localizados em uma instância GHES não possam usar GitHub.com Actions nem actions do GitHub Marketplace por padrão, isso pode ser corrigido via uso do GitHub Connect ou actions-sync.  
