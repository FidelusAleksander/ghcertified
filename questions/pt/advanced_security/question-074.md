---
question: "Quais das seguintes afirmações sobre a ativação da configuração padrão de varredura do CodeQL são verdadeiras?"
documentation: "https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning"
---

- [x] Você pode ativar a configuração padrão para todos os repositórios elegíveis em uma organização de uma vez nas configurações da organização
- [x] GitHub Actions precisa estar ativado como pré-requisito
- [x] Você pode ativar a configuração padrão em qualquer repositório, independentemente do conteúdo do repositório
- [ ] Você só pode ativar a configuração padrão em repositórios que contenham pelo menos uma linguagem suportada pelo CodeQL
> Se você ativar a configuração padrão em um repositório que não inclua linguagens suportadas pelo CodeQL, a configuração padrão não executará nenhuma varredura
- [ ] A configuração padrão fará a varredura do repositório em um cronograma que você pode configurar. Para varredura baseada em eventos, você precisa configurar um workflow do GitHub Actions
> A configuração padrão inclui varreduras agendadas e varreduras de pull request/push nos branches padrão e protegidos
- [ ] Você só pode usar o conjunto de consultas padrão com a configuração padrão de varredura do CodeQL
