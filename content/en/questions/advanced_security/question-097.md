---
title: "Question 097"
question: "Which API endpoint can be used to retrieve a list of all secret scanning alerts for an organization?"
---

> https://docs.github.com/en/rest/secret-scanning/secret-scanning?apiVersion=2022-11-28#list-secret-scanning-alerts-for-an-organization
1. [x] `GET /orgs/{org}/secret-scanning/alerts`
1. [ ] `GET /enterprises/{enterprise}/secret-scanning/alerts`
> That is a correct endpoint for enterprise, but not for an organization
1. [ ] `GET /repos/{owner}/{repo}/secret-scanning/alerts`
> That is a correct endpoint for a repository, but not for an organization
1. [ ] `GET /github/{org}/secret-scanning/alerts`
