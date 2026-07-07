---
question: "Como as organizações que utilizam o GitHub Enterprise Server podem habilitar a sincronização automática de ações do GitHub hospedadas por terceiros no GitHub.com para sua instância do GitHub Enterprise Server?"
documentation: "https://docs.github.com/en/enterprise-server@3.17/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect"
---

- [x] Usando o GitHub Connect
> Quando ativado, o GitHub Connect será utilizado para estabelecer automaticamente uma conexão segura entre uma instância do GitHub Enterprise Server (GHES) e uma conta do GitHub Enterprise Cloud (GHEC) (GHEC é hospedado no GitHub.com). A conta GHEC serve como uma identidade confiável (autenticada) que o GitHub.com usa para autorizar a instância GHES a acessar ações hospedadas no GitHub.com.   
- [ ] O GitHub Enterprise Server tem acesso a todas as ações do GitHub.com por padrão
> O GitHub Actions no GitHub Enterprise Server foi projetado para funcionar em ambientes sem acesso total à internet. Por padrão, os workflows não podem usar actions do GitHub.com ou do GitHub Marketplace.
- [ ] Usando a ferramenta actions-sync
> Embora a actions-sync possa ser usada para sincronizar repositórios de ações individuais do GitHub.com para uma empresa, essa é uma abordagem manual. Veja a [documentação](https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom#about-the-actions-sync-tool) para mais detalhes.
- [ ] O GitHub Enterprise Server (GHES) não pode usar ações do GitHub.com devido à sua natureza local e à falta de acesso à internet.
> Embora os workflows localizados em uma instância GHES não possam usar ações do GitHub.com nem ações do GitHub Marketplace por padrão, isso pode ser resolvido com o uso do GitHub Connect ou do actions-sync. 
