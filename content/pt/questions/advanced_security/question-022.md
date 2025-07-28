---
title: "Questão 022"
question: "Sua empresa possui segredos internos que não devem ser enviados para os repositórios do GitHub. O padrão desses segredos não é reconhecido pelo GitHub e, portanto, não é detectado pela verificação de segredos. O que as empresas podem fazer para proteger seus desenvolvedores de enviar esses segredos acidentalmente para os repositórios em sua Organização do GitHub?"
---


> https://docs.github.com/en/enterprise-cloud@latest/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization
1. [x] Definir padrões regex para esses segredos e ativar padrões personalizados para verificação de segredos na organização.
1. [ ] A empresa deve ingressar no programa de parceiros do GitHub para que o padrão dos segredos da empresa seja reconhecido.
> O programa de parceiros do GitHub é destinado a provedores de serviços que distribuem segredos fora de sua organização (por exemplo, provedores de nuvem). Ele não é destinado a segredos internos de uma única organização.
1. [ ] Definir workflows personalizados do GitHub Actions para os repositórios na organização que irão verificar esses segredos.
1. [ ] Em todos os repositórios, incluir o arquivo `secret_scanning.yml`, que definirá esses segredos personalizados que devem ser verificados.
> O arquivo `secret_scanning.yml` pode ser usado para desativar a verificação de segredos para arquivos ou diretórios específicos. 
