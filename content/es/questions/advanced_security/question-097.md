---
title: "Pregunta 097"
question: "¿Qué endpoint de la API se puede utilizar para recuperar una lista de todas las alertas de análisis de secretos para una organización?"
---

> https://docs.github.com/en/rest/secret-scanning/secret-scanning?apiVersion=2022-11-28#list-secret-scanning-alerts-for-an-organization
1. [x] `GET /orgs/{org}/secret-scanning/alerts`
1. [ ] `GET /enterprises/{enterprise}/secret-scanning/alerts`
> Ese es un endpoint correcto para una empresa, pero no para una organización
1. [ ] `GET /repos/{owner}/{repo}/secret-scanning/alerts`
> Ese es un endpoint correcto para un repositorio, pero no para una organización
1. [ ] `GET /github/{org}/secret-scanning/alerts`
