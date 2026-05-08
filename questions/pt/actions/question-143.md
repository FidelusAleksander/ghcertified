---
question: "Sua organização deseja reduzir o período de retenção para artefatos armazenados, citando preocupações com armazenamento. Como isso pode ser feito em nível organizacional?"
documentation: "https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization"
---

- [x] Navegando para as configurações de Actions da organização e editando o valor da configuração "Retenção de artefatos e logs"
- [ ] Usando runners hospedados por conta própria, criando um arquivo `.github/retention-policy.yml` e especificando o valor da chave `artifact-retention-period`  
> Personalizar períodos de retenção de artefatos não se limita aos runners hospedados por conta própria.  
- [ ] Isso não pode ser feito em nível organizacional. Todos os workflows que utilizam `actions/upload-artifact` devem usar a entrada obrigatória `retention-days`.  
> Embora a entrada `retention-days` possa ser usada para personalizar o período de retenção de artefatos individuais criados por um workflow, isso é inadequado se for tentar aplicar uma política abrangente em nível organizacional. Além disso, a entrada `retention-days` é [opcional, não obrigatória](https://github.com/actions/upload-artifact#inputs).  
- [ ] Isso não pode ser feito: os artefatos são estritamente armazenados por 90 dias em todos os sistemas que implementam Github Actions.  
> O período padrão de retenção para artefatos é de 90 dias. É possível alterar esse valor em todos os sistemas que implementam Github Actions.  
