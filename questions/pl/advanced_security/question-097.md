---
question: "Który punkt końcowy API można wykorzystać do pobrania listy wszystkich alertów skanowania tajemnic dla organizacji?"
documentation: "https://docs.github.com/en/rest/secret-scanning/secret-scanning?apiVersion=2022-11-28#list-secret-scanning-alerts-for-an-organization"
---

- [x] `GET /orgs/{org}/secret-scanning/alerts`
- [ ] `GET /enterprises/{enterprise}/secret-scanning/alerts`
> Jest to poprawny punkt końcowy dla enterprise, ale nie dla organizacji
- [ ] `GET /repos/{owner}/{repo}/secret-scanning/alerts`
> Jest to poprawny punkt końcowy dla repozytorium, ale nie dla organizacji
- [ ] `GET /github/{org}/secret-scanning/alerts`
