---
title: "Pergunta 074"
question: "Quais das seguintes afirmações sobre a ativação da configuração padrão de varredura CodeQL são verdadeiras? (Escolha três.)"
---


> https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning
- [x] Você pode ativar a configuração padrão para todos os repositórios elegíveis de uma organização de uma vez, nas configurações da organização
- [x] GitHub Actions precisa estar habilitado como pré-requisito
- [x] Você pode ativar a configuração padrão em qualquer repositório, independentemente do conteúdo do repositório
- [ ] Você só pode ativar a configuração padrão em repositórios que contenham pelo menos uma linguagem suportada pelo CodeQL
> Se você ativar a configuração padrão em um repositório que não inclua nenhuma linguagem suportada pelo CodeQL, a configuração padrão não executará nenhuma varredura
- [ ] A configuração padrão fará a varredura do repositório em uma programação que você pode configurar. Para varredura baseada em eventos, você precisa configurar um fluxo de trabalho do GitHub Action
> A configuração padrão inclui varredura agendada e varredura de pull request / push nos branches padrão e protegidos
- [ ] Você só pode usar o conjunto de consultas padrão com a configuração padrão de varredura CodeQL
