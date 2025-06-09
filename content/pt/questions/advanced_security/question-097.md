---
title: "Pergunta 097"
question: "Qual endpoint da API pode ser usado para recuperar uma lista de todos os alertas de varredura de segredos para uma organização?"
---

> https://docs.github.com/en/rest/secret-scanning/secret-scanning?apiVersion=2022-11-28#list-secret-scanning-alerts-for-an-organization
1. [x] `GET /orgs/{org}/secret-scanning/alerts`
1. [ ] `GET /enterprises/{enterprise}/secret-scanning/alerts`
> Esse é um endpoint correto para uma empresa, mas não para uma organização.
1. [ ] `GET /repos/{owner}/{repo}/secret-scanning/alerts`
> Esse é um endpoint correto para um repositório, mas não para uma organização.
1. [ ] `GET /github/{org}/secret-scanning/alerts`
