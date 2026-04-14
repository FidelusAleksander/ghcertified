---
question: "¿Qué endpoint de la API se puede utilizar para recuperar una lista de todas las alertas de Dependabot para una enterprise?"
documentation: "https://docs.github.com/en/rest/dependabot/alerts?apiVersion=2022-11-28#list-dependabot-alerts-for-an-enterprise"
---

- [x] `GET /enterprises/{enterprise}/dependabot/alerts`
- [ ] `GET /orgs/{org}/dependabot/alerts`
> Ese es un endpoint correcto para una organización, pero no para una enterprise
- [ ] `GET /repos/{owner}/{repo}/dependabot/alerts`
> Ese es un endpoint correcto para un repositorio, pero no para una enterprise
- [ ] `GET /github/{enterprise}/dependabot/alerts`
