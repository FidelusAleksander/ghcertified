---
title: "Pytanie 096"
question: "Który endpoint API można użyć do pobrania listy wszystkich alertów Dependabot dla przedsiębiorstwa?"
---

> https://docs.github.com/en/rest/dependabot/alerts?apiVersion=2022-11-28#list-dependabot-alerts-for-an-enterprise  
1. [x] `GET /enterprises/{enterprise}/dependabot/alerts`  
1. [ ] `GET /orgs/{org}/dependabot/alerts`  
> To jest poprawny endpoint dla organizacji, ale nie dla przedsiębiorstwa  
1. [ ] `GET /repos/{owner}/{repo}/dependabot/alerts`  
> To jest poprawny endpoint dla repozytorium, ale nie dla przedsiębiorstwa  
1. [ ] `GET /github/{enterprise}/dependabot/alerts`  
