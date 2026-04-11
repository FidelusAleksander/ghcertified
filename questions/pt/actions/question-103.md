---
question: "No GitHub Actions, se você definir tanto o filtro de branches quanto de paths, qual é o efeito na execução do workflow?"
title: "Pergunta 103"
---


> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore
1. [x] o workflow será executado somente quando ambos `branches` e `paths` forem satisfeitos
1. [ ] o workflow será executado quando `branches` ou `paths` forem satisfeitos, mas aplicará somente o filtro correspondente
1. [ ] o workflow será executado quando `branches` ou `paths` forem satisfeitos
1. [ ] o workflow não será executado quando ambos `branches` e `paths` forem satisfeitos
