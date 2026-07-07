---
question: "Quais das afirmações a seguir são verdadeiras sobre o GitHub Enterprise Server (GHES)?"
documentation: "https://docs.github.com/en/enterprise-server@3.21/admin/overview/about-github-enterprise-server"
---

- [x] Os workflows do GHES não podem acessar ações do GitHub.com nem do GitHub Marketplace por padrão. 
- [x] `actions/actions-sync` é dedicado principalmente à transferência de ações do GitHub.com para uma instância GHES.
> Sincronizar ações do GitHub.com é realizado principalmente via GitHub Connect ou `actions-sync`. A ferramenta `actions/actions-sync` é uma [maneira manual](https://docs.github.com/en/enterprise-server@3.21/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) de executar esse processo.
- [ ] GHES pode usar versões aprimoradas dos runners hospedados pelo GitHub.
> GHES não tem acesso aos runners hospedados pelo GitHub. Isso é indicado na [documentação do `actions/actions-sync`](https://docs.github.com/en/enterprise-server@3.21/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom).
- [ ] Usando o GitHub Connect, os usuários podem seguir um processo manual para acessar ações do GitHub.com. Esse processo deve ser feito uma vez por ação desejada.
> O GitHub Connect permite acesso automático às ações do GitHub.com. Os usuários devem seguir um processo de configuração, mas geralmente isso só precisa ser feito uma vez. Consulte a [documentação do GitHub Connect](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-public-githubcom-actions-using-github-connect#enabling-automatic-access-to-public-githubcom-actions) para mais detalhes.
- [x] As instâncias do GitHub Enterprise Server são hospedadas localmente, enquanto o GitHub Enterprise Cloud (GHEC) é hospedado e gerenciado pelo GitHub.
> [GitHub Enterprise Server](https://docs.github.com/en/enterprise-server@3.21/admin/overview/about-github-enterprise-server) é uma versão auto-hospedada da plataforma do GitHub. As instâncias de [GitHub Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud) são hospedadas em um subdomínio dedicado do GHE.com. Todos os subdomínios do GHE.com são hospedados pelo GitHub.
