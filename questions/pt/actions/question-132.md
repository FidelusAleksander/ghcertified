---
question: "Quais das seguintes opções são verdadeiras sobre o GitHub Enterprise Server (GHES)?"
documentation: "https://docs.github.com/en/enterprise-server/admin/overview/about-github-enterprise-server"
---

- [x] Os workflows do GHES não podem acessar GitHub.com nem as ações do GitHub Marketplace por padrão.
- [x] `actions/actions-sync` é principalmente dedicado a mover ações do GitHub.com para uma instância GHES.
> Sincronizar ações do GitHub.com é principalmente realizado através do GitHub Connect ou `actions-sync`. A ferramenta `actions/actions-sync` é uma [maneira manual](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) de executar este processo. 
- [ ] O GHES pode usar versões avançadas de runners hospedados pelo GitHub.
> O GHES não tem acesso a runners hospedados pelo GitHub. Isso é indicado na [documentação `actions/actions-sync`](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom).
- [ ] Usando o GitHub Connect, os usuários podem seguir um processo manual para acessar ações do GitHub.com. Este processo deve ser feito uma vez para cada ação desejada.
> O GitHub Connect permite acesso automático às ações do GitHub.com. Os usuários devem seguir um processo de configuração, que geralmente precisa ser feito apenas uma vez. Consulte a [documentação do GitHub Connect](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#enabling-automatic-access-to-public-githubcom-actions) para mais detalhes.
- [x] Instâncias do GitHub Enterprise Server são autogerenciadas, em comparação com o GitHub Enterprise Cloud (GHEC), que é hospedado e gerenciado pelo GitHub.
> [GitHub Enterprise Server](https://docs.github.com/en/enterprise-server/admin/overview/about-github-enterprise-server) é uma versão autogerenciada da plataforma GitHub. As instâncias do [GitHub Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud) são hospedadas em um subdomínio dedicado do GHE.com. Todos os subdomínios GHE.com são hospedados pelo GitHub.
