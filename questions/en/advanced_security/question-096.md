---
question: "Which API endpoint can be used to retrieve a list of all Dependabot alerts for an enterprise?"
documentation: "https://docs.github.com/en/rest/dependabot/alerts?apiVersion=2022-11-28#list-dependabot-alerts-for-an-enterprise"
---

- [x] `GET /enterprises/{enterprise}/dependabot/alerts`
- [ ] `GET /orgs/{org}/dependabot/alerts`
> That is a correct endpoint for organization, but not for an enterprise
- [ ] `GET /repos/{owner}/{repo}/dependabot/alerts`
> That is a correct endpoint for a repository, but not for an enterprise
- [ ] `GET /github/{enterprise}/dependabot/alerts`
