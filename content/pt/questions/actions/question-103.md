---
question: "No GitHub Actions, se você definir filtros tanto para `branches` quanto para `paths`, qual é o efeito na execução do fluxo de trabalho?"
title: "Pergunta 103"
---


> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore
1. [x] o fluxo de trabalho será executado apenas quando ambos `branches` e `paths` forem atendidos
1. [ ] o fluxo de trabalho será executado quando `branches` ou `paths` forem atendidos, mas aplicará apenas o filtro correspondente
1. [ ] o fluxo de trabalho será executado quando `branches` ou `paths` forem atendidos
1. [ ] o fluxo de trabalho não será executado quando ambos `branches` e `paths` forem atendidos
