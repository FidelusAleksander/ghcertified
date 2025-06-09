---
title: "Pergunta 096"
question: "Qual endpoint da API pode ser usado para recuperar uma lista de todos os alertas do Dependabot para uma empresa?"
---

> https://docs.github.com/en/rest/dependabot/alerts?apiVersion=2022-11-28#list-dependabot-alerts-for-an-enterprise
1. [x] `GET /enterprises/{enterprise}/dependabot/alerts`
1. [ ] `GET /orgs/{org}/dependabot/alerts`
> Esse é um endpoint correto para uma organização, mas não para uma empresa
1. [ ] `GET /repos/{owner}/{repo}/dependabot/alerts`
> Esse é um endpoint correto para um repositório, mas não para uma empresa
1. [ ] `GET /github/{enterprise}/dependabot/alerts`
