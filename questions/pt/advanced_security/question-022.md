---
question: "Sua empresa possui segredos internos que não devem ser enviados para repositórios do GitHub. O padrão desses segredos não é conhecido pelo GitHub e, portanto, não é detectado pela verificação de segredos. O que as empresas podem fazer para proteger seus desenvolvedores de acidentalmente enviar esses segredos para repositórios na GitHub Organization?"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/code-security/secret-scanning/defining-custom-patterns-for-secret-scanning#defining-a-custom-pattern-for-an-organization"
---

- [x] Definir padrões regex para esses segredos e ativar padrões personalizados para a verificação de segredos na organização.
- [ ] A empresa deve aderir ao programa de parceiros do GitHub para que o padrão dos segredos da empresa seja reconhecido.
> O programa de parceiros do GitHub é destinado a provedores de serviços que distribuem segredos fora de sua organização (por exemplo, provedores de nuvem). Ele não é destinado a segredos internos de uma única organização.
- [ ] Definir workflows personalizados do GitHub Actions para os repositórios da organização que irão verificar esses segredos.
- [ ] Incluir em todos os repositórios o arquivo `secret_scanning.yml`, que definirá esses segredos personalizados que devem ser verificados.
> O arquivo `secret_scanning.yml` pode ser usado para desativar a verificação de segredos para arquivos ou diretórios específicos. 
