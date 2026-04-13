---
question: "Który punkt końcowy API można użyć, aby pobrać listę wszystkich alertów Dependabot dla enterprise?"
documentation: "https://docs.github.com/en/rest/dependabot/alerts?apiVersion=2022-11-28#list-dependabot-alerts-for-an-enterprise"
---

- [x] `GET /enterprises/{enterprise}/dependabot/alerts`
- [ ] `GET /orgs/{org}/dependabot/alerts`
> Ten punkt końcowy jest prawidłowy dla organizacji, ale nie dla enterprise
- [ ] `GET /repos/{owner}/{repo}/dependabot/alerts`
> Ten punkt końcowy jest prawidłowy dla repozytorium, ale nie dla enterprise
- [ ] `GET /github/{enterprise}/dependabot/alerts`
