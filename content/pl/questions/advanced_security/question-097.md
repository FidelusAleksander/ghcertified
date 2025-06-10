---
title: "Pytanie 097"
question: "Który punkt końcowy API można użyć do pobrania listy wszystkich alertów skanowania sekretów dla organizacji?"
---

> https://docs.github.com/en/rest/secret-scanning/secret-scanning?apiVersion=2022-11-28#list-secret-scanning-alerts-for-an-organization
1. [x] `GET /orgs/{org}/secret-scanning/alerts`
1. [ ] `GET /enterprises/{enterprise}/secret-scanning/alerts`
> To jest poprawny punkt końcowy dla przedsiębiorstwa, ale nie dla organizacji
1. [ ] `GET /repos/{owner}/{repo}/secret-scanning/alerts`
> To jest poprawny punkt końcowy dla repozytorium, ale nie dla organizacji
1. [ ] `GET /github/{org}/secret-scanning/alerts`
