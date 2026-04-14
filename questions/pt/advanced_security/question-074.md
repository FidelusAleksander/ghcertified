---
question: "Quais das seguintes afirmações sobre a habilitação da configuração padrão do CodeQL scanning são verdadeiras?"
documentation: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning"
---

- [x] Você pode habilitar a configuração padrão para todos os repositórios elegíveis em uma organização de uma só vez nas configurações da organização
- [x] GitHub Actions precisa ser habilitado como um pré-requisito
- [x] Você pode habilitar a configuração padrão em qualquer repositório, independentemente do conteúdo do repositório
- [ ] Você só pode habilitar a configuração padrão em repositórios que contenham pelo menos uma linguagem compatível com CodeQL
> Se você habilitar a configuração padrão em um repositório que não inclui nenhuma linguagem compatível com CodeQL, a configuração padrão não executará nenhuma verificação
- [ ] A configuração padrão irá escanear o repositório em um cronograma que você pode configurar. Para varreduras baseadas em eventos, você precisa configurar um workflow do GitHub Action
> A configuração padrão inclui varreduras agendadas e varreduras de pull request / push nos branches padrão e protegidos
- [ ] Você só pode usar o conjunto de consultas padrão com a configuração padrão do CodeQL scanning
