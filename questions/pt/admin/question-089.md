---
question: "Quais etapas estão envolvidas na criação de um grupo de executores auto-hospedados para uma organização no GitHub?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access"
---

- [x] Navegue até as configurações da organização, selecione Actions, clique em Grupos de executores, crie um novo grupo e atribua uma política de acesso ao repositório.
- [ ] No repositório `.github`, modifique o arquivo `.gitconfig` para especificar grupos de executores e políticas de acesso associadas.
- [ ] Entre em contato com o suporte do GitHub para solicitar a criação de um grupo de executores e forneça uma lista de repositórios para configuração de acesso.
- [ ] Use um workflow do GitHub Actions para gerar automaticamente grupos de executores com base na atividade do repositório e nos padrões de uso.
