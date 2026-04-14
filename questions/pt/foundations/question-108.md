---
pergunta: "Qual é um dos principais benefícios de usar um Personal Access Token (PAT) em vez de um nome de usuário e senha padrão para autenticação no GitHub?"
documentação: "https://learn.microsoft.com/en-us/training/modules/github-introduction-administration/3-how-github-authentication-works"
---

- [ ] Os PATs podem ser gerenciados pela organização e enterprise.  
> Os PATs, como o próprio nome sugere, são pessoais. Organizações e enterprises podem gerenciar outras formas de autenticação, como LDAP, SAML e chaves SSH.  
- [ ] O PAT é uma camada extra de segurança usada ao fazer login em sites ou aplicativos. Com o PAT, os usuários precisam fazer login com seu nome de usuário e senha e fornecer outra forma de autenticação à qual apenas eles têm acesso.  
> Esta é uma descrição de autenticação multifator ou autenticação de dois fatores.  
- [x] O PAT pode ser usado para autenticação no GitHub ao usar a API do GitHub ou a linha de comando. Os usuários geram um token por meio da opção de configurações do GitHub e vinculam as permissões do token a um repositório ou organização.  
- [ ] O PAT permite que você autentique o GitHub Enterprise Server com suas contas existentes e gerencie centralmente o acesso ao repositório.  
> Esta é uma descrição dos benefícios do LDAP para o GitHub, não do PAT.  
