---
question: "Qual é o comportamento quando um novo padrão de segredo é adicionado ou atualizado no programa de parceiros de verificação de segredos do GitHub?"
documentation: "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning#accessing-secret-scanning-alerts"
---

- [x] O GitHub realizará uma varredura de todo o conteúdo de código histórico em repositórios públicos com a verificação de segredos habilitada
- [ ] O GitHub buscará apenas o novo padrão em commits recém-enviados em repositórios com a verificação de segredos habilitada. Se um segredo desse padrão já estiver presente no repositório, ele não será detectado.
- [ ] O parceiro do GitHub terá que lidar com os segredos vazados historicamente e o GitHub somente buscará novos commits para o novo padrão
- [ ] O GitHub criará uma issue em todos os repositórios com a verificação de segredos ativada para que os mantenedores possam verificar o repositório em busca de segredos que correspondam ao novo padrão
