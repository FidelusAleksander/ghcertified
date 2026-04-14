---
question: "Qual endpoint da API pode ser usado para recuperar uma lista de todos os alertas de varredura de segredos para uma organização?"
documentation: "https://docs.github.com/en/rest/secret-scanning/secret-scanning?apiVersion=2022-11-28#list-secret-scanning-alerts-for-an-organization"
---

- [x] `GET /orgs/{org}/secret-scanning/alerts`
- [ ] `GET /enterprises/{enterprise}/secret-scanning/alerts`
> Esse é um endpoint correto para uma enterprise, mas não para uma organização
- [ ] `GET /repos/{owner}/{repo}/secret-scanning/alerts`
> Esse é um endpoint correto para um repositório, mas não para uma organização
- [ ] `GET /github/{org}/secret-scanning/alerts`
