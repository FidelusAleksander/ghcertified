---
title: "Pergunta 074"
question: "Quais das seguintes afirmações sobre habilitar a configuração padrão do CodeQL scanning são verdadeiras? (Escolha três.)"
---

> https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning
- [x] Você pode habilitar a configuração padrão para todos os repositórios elegíveis em uma organização de uma só vez nas configurações da organização
- [x] O GitHub Actions precisa estar habilitado como pré-requisito
- [x] Você pode habilitar a configuração padrão em qualquer repositório, independentemente do conteúdo do repositório
- [ ] Você só pode habilitar a configuração padrão em repositórios que contenham pelo menos uma linguagem suportada pelo CodeQL
> Se você habilitar a configuração padrão em um repositório que não inclua nenhuma linguagem suportada pelo CodeQL, a configuração padrão não executará nenhuma análise
- [ ] A configuração padrão analisará o repositório em uma programação que você pode configurar. Para análise baseada em eventos, você precisa configurar um fluxo de trabalho do GitHub Action
> A configuração padrão inclui análise agendada e análise de pull request/push nos branches padrão e protegidos
- [ ] Você só pode usar o conjunto de consultas padrão com a configuração padrão do CodeQL scanning
