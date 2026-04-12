---
question: "Which API endpoint can be used to retrieve a list of all secret scanning alerts for an organization?"
documentation: "https://docs.github.com/en/rest/secret-scanning/secret-scanning?apiVersion=2022-11-28#list-secret-scanning-alerts-for-an-organization"
---

- [x] `GET /orgs/{org}/secret-scanning/alerts`
- [ ] `GET /enterprises/{enterprise}/secret-scanning/alerts`
> That is a correct endpoint for enterprise, but not for an organization
- [ ] `GET /repos/{owner}/{repo}/secret-scanning/alerts`
> That is a correct endpoint for a repository, but not for an organization
- [ ] `GET /github/{org}/secret-scanning/alerts`
