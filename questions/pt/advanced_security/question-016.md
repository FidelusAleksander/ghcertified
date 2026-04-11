---
title: "Pergunta 016"
question: "Qual é o comportamento quando um novo padrão de segredo é adicionado ou atualizado no programa de parceiros de varredura de segredos do GitHub?"
---


> https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#accessing-secret-scanning-alerts
1. [x] O GitHub executará uma varredura de todo o conteúdo histórico de código em repositórios públicos com a varredura de segredos ativada.
1. [ ] O GitHub apenas verificará o novo padrão em commits recém-enviados em repositórios com a varredura de segredos ativada. Se um segredo desse padrão já estiver presente no repositório, ele não será detectado.
1. [ ] O parceiro do GitHub terá que lidar com os segredos vazados historicamente e o GitHub apenas verificará novos commits para o novo padrão.
1. [ ] O GitHub criará um issue em todos os repositórios com a varredura de segredos ativada para que os mantenedores possam verificar o repositório em busca de segredos que correspondam ao novo padrão.
