---
question: "De que maneiras você pode excluir artefatos de fluxo de trabalho?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/remove-workflow-artifacts"
---

- [x] Usando a interface do usuário do GitHub Actions para navegar até uma execução de fluxo de trabalho e excluir os artefatos individualmente
- [x] Usando a interface do usuário do GitHub Actions para excluir a execução do fluxo de trabalho que gerou os artefatos
> Excluir uma execução de fluxo de trabalho também exclui os artefatos associados à execução.
- [x] Usando um endpoint específico da API do GitHub
> A API do GitHub possui um endpoint "Delete an artifact". Veja a [documentação](https://docs.github.com/en/rest/actions/artifacts?apiVersion=2026-03-10#delete-an-artifact) para mais detalhes.
- [ ] Usando a ação `actions/delete-artifact` em um fluxo de trabalho
- [ ] Acessando remotamente runners auto-hospedados via SSH, navegando até o diretório `.github/artifacts` e excluindo os artefatos selecionados
> Em geral, os artefatos são armazenados usando a infraestrutura do GitHub, não os runners.
- [ ] Configurando o período de retenção de artefatos para 0 dias
> Períodos de retenção de artefatos não podem ser configurados para 0 dias. Veja a [documentação](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization) para mais informações.
