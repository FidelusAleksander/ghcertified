---
archetype: "questions"
title: "Question 096"
question: "Which API endpoint can be used to retrieve a list of all Dependabot alerts for an enterprise?"
draft: false
---

> https://docs.github.com/en/rest/dependabot/alerts?apiVersion=2022-11-28#list-dependabot-alerts-for-an-enterprise
1. [x] `GET /enterprises/{enterprise}/dependabot/alerts`
1. [ ] `GET /orgs/{org}/dependabot/alerts`
> That is a correct endpoint for organization, but not for an enterprise
1. [ ] `GET /repos/{owner}/{repo}/dependabot/alerts`
> That is a correct endpoint for a repository, but not for an enterprise
1. [ ] `GET /github/{enterprise}/dependabot/alerts`
