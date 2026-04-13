---
question: "¿Cuál endpoint de la API puede ser utilizado para obtener una lista de todas las alertas de escaneo de secretos para una organización?"
documentation: "https://docs.github.com/en/rest/secret-scanning/secret-scanning?apiVersion=2022-11-28#list-secret-scanning-alerts-for-an-organization"
---

- [x] `GET /orgs/{org}/secret-scanning/alerts`
- [ ] `GET /enterprises/{enterprise}/secret-scanning/alerts`
> Ese es un endpoint correcto para enterprise, pero no para una organización
- [ ] `GET /repos/{owner}/{repo}/secret-scanning/alerts`
> Ese es un endpoint correcto para un repositorio, pero no para una organización
- [ ] `GET /github/{org}/secret-scanning/alerts`
