---
question: "Quais são os passos envolvidos na criação de um grupo de runners auto-hospedados para uma organização no GitHub?"
documentation: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups"
---

- [x] Navegue até as configurações da organização, selecione Actions, clique em Runner groups, crie um novo grupo e atribua uma política de acesso ao repositório.
- [ ] No repositório `.github`, modifique o arquivo `.gitconfig` para especificar os grupos de runners e as políticas de acesso associadas.
- [ ] Entre em contato com o suporte do GitHub para solicitar a criação de um grupo de runners e forneça uma lista de repositórios para configuração de acesso.
- [ ] Use um workflow do GitHub Actions para gerar automaticamente grupos de runners com base na atividade e nos padrões de uso do repositório.
