---
title: "Pergunta 108"
question: "Qual é um dos principais benefícios de usar um Personal Access Token (PAT) em vez de um nome de usuário e senha padrão para autenticação no GitHub?"
---

> https://learn.microsoft.com/en-us/training/modules/github-introduction-administration/3-how-github-authentication-works
1. [ ] PATs podem ser gerenciados pela organização e pela empresa.
> Os PATs, como o nome sugere, são pessoais. Organizações e empresas podem gerenciar outras formas de autenticação, como LDAP, SAML e chaves SSH.
1. [ ] PAT é uma camada extra de segurança usada ao fazer login em sites ou aplicativos. Com PAT, os usuários precisam entrar com seu nome de usuário e senha e fornecer outra forma de autenticação que apenas eles possuem.
> Esta é uma descrição da autenticação multifatorial ou de dois fatores.
1. [x] PAT pode ser usado para autenticação no GitHub ao usar a GitHub API ou a linha de comando. Os usuários geram um token por meio da opção de configurações do GitHub e vinculam as permissões do token a um repositório ou organização.
1. [ ] PAT permite autenticar o GitHub Enterprise Server com suas contas existentes e gerenciar o acesso aos repositórios de forma centralizada.
> Esta é uma descrição dos benefícios do LDAP para o GitHub, não do PAT.
