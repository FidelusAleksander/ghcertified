---
title: "Pergunta 016"
question: "Qual é o comportamento quando um novo padrão de segredo é adicionado ou atualizado no programa de parceiros de verificação de segredos do GitHub?"
---


> https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#accessing-secret-scanning-alerts
1. [x] O GitHub fará uma varredura de todo o conteúdo de código histórico em repositórios públicos com a verificação de segredos habilitada
1. [ ] O GitHub somente procurará pelo novo padrão em commits recém enviados em repositórios com a verificação de segredos habilitada. Se um segredo desse padrão já estava presente no repositório, ele não será detectado.
1. [ ] O parceiro do GitHub deve lidar com os segredos vazados historicamente e o GitHub apenas verificará novos commits para o novo padrão
1. [ ] O GitHub criará um problema em todos os repositórios com a verificação de segredos habilitada para que os mantenedores possam verificar o repositório em busca de segredos correspondentes ao novo padrão
