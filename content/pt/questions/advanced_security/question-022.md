---
title: "Pergunta 022"
question: "Sua empresa possui segredos internos que não devem ser enviados para repositórios do GitHub. O padrão desses segredos não é conhecido pelo GitHub e, portanto, não é detectado pela verificação de segredos. O que as empresas podem fazer para proteger seus desenvolvedores de acidentalmente enviar esses segredos para repositórios na organização do GitHub?"
---

> https://docs.github.com/en/enterprise-cloud@latest/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization
1. [x] Definir padrões Regex para esses segredos e habilitar padrões personalizados para a verificação de segredos na organização.
1. [ ] A empresa deve participar do programa de parceiros do GitHub para que o padrão dos segredos da empresa seja reconhecido.
> O programa de parceiros do GitHub é destinado a provedores de serviços que distribuem segredos fora de sua organização (ex: provedores de nuvem). Ele não é destinado a segredos internos de uma única organização.
1. [ ] Definir fluxos de trabalho personalizados do GitHub Actions para os repositórios na organização que irão verificar esses segredos.
1. [ ] Incluir em todos os repositórios um arquivo `secret_scanning.yml`, que definirá esses segredos personalizados que devem ser verificados.
> O arquivo `secret_scanning.yml` pode ser usado para desativar a verificação de segredos para arquivos ou diretórios específicos. 
