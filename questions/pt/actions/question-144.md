---
question: "Como você pode alterar o período de retenção para artefatos gerados por um determinado workflow?"
documentation: "https://github.com/actions/upload-artifact#inputs"
---

- [x] Utilizando o input `retention-days` em `actions/upload-artifact` 
- [ ] Utilizando o input `retention-days` em `actions/download-artifact`
> `actions/download-artifact` é usado para baixar artefatos. Portanto, ele não determina por quanto tempo um artefato enviado deve ser retido. Além disso, `retention-days` não é um input para esta ação. Veja [a documentação](https://github.com/actions/download-artifact#inputs) para mais detalhes. 
- [ ] No repositório do workflow, navegando até as configurações do Actions e editando o valor da configuração "Artifact and log retention" para o workflow listado.
> Embora você possa editar a configuração ["Artifact and log retention"](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository) em um repositório, isso se aplica a todos os workflows desse repositório, e não a um workflow individual. Essa configuração não lista workflows individuais.
- [ ] Navegando até as configurações de Actions da organização e editando o valor da configuração "Artifact and log retention"
> Embora você possa editar a configuração ["Artifact and log retention"](https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization) em uma organização, isso se aplica a todos os workflows dentro da organização, e não a um workflow individual.
