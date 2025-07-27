---
question: "En GitHub Actions, si defines tanto los filtros de ramas como de rutas, ¿cuál es el efecto en la ejecución del flujo de trabajo?"
title: "Pregunta 103"
---


> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore
1. [x] el flujo de trabajo solo se ejecutará cuando se cumplan tanto `branches` como `paths`
1. [ ] el flujo de trabajo se ejecutará cuando se cumpla cualquiera de `branches` o `paths`, pero solo aplicará el filtro correspondiente
1. [ ] el flujo de trabajo se ejecutará cuando se cumpla cualquiera de `branches` o `paths`
1. [ ] el flujo de trabajo no se ejecutará cuando se cumplan tanto `branches` como `paths`
