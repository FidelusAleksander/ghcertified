---
question: "Manuela está configurando runners auto-hospedados para sua organização, que possui restrições rigorosas de comunicação com endereços IP. Como ela pode garantir que os runners auto-hospedados possam se comunicar com o GitHub?"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-settings-for-your-organization/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list"
---

- [x] Adicionar os endereços IP dos runners auto-hospedados à lista de endereços IP permitidos da organização
> Runners auto-hospedados comunicam-se com o GitHub para realizar várias atividades, como visto na [documentação](https://docs.github.com/en/enterprise-cloud@latest/actions/reference/runners/self-hosted-runners#communication). Para permitir essa comunicação, é necessário adicionar os endereços IP dos runners auto-hospedados à lista de endereços IP permitidos
- [ ] Adicionar o sistema operacional dos runners auto-hospedados à lista de sistemas operacionais permitidos da organização
- [ ] Adicionar o arquivo `.ip-exception` ao nível superior da estrutura de diretórios do runner auto-hospedado
- [ ] Migrar para runners padrão hospedados no GitHub, já que os runners auto-hospedados serão bloqueados se as listas de endereços IP permitidos estiverem habilitadas
- [ ] Selecionar a caixa de seleção 'Permitir acesso de runners auto-hospedados' nas configurações de lista de endereços IP permitidos da organização
