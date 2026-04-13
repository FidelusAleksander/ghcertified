---
question: "Qual é o comportamento quando um novo padrão de segredo é adicionado ou atualizado no programa de parceiros de varredura de segredos do GitHub?"
documentation: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#accessing-secret-scanning-alerts"
---

- [x] O GitHub executará uma varredura de todo o conteúdo de código histórico em repositórios públicos com a varredura de segredos habilitada
- [ ] O GitHub apenas procurará o novo padrão em commits recém-enviados em repositórios com a varredura de segredos habilitada. Se um segredo desse padrão já estava presente no repositório, ele não será detectado.
- [ ] O parceiro do GitHub terá que lidar com os segredos anteriormente vazados, e o GitHub apenas verificará novos commits para o novo padrão
- [ ] O GitHub criará um issue em todos os repositórios com a varredura de segredos habilitada, para que os mantenedores possam verificar o repositório em busca de segredos que correspondam ao novo padrão
