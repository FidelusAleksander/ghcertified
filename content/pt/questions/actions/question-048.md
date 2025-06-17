---
question: "Um trabalho chamado `job2` está utilizando artifacts criados em `job1`. Portanto, é importante garantir que `job1` termine antes que `job2` comece a procurar pelos artifacts. Como você deve criar essa dependência?"
title: "Pergunta 048"
---


> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds

1. [x] crie essa dependência usando a palavra-chave `needs` em `job2`
1. [ ] essa dependência é criada implicitamente ao usar `actions/download-artifact` para baixar o artifact de `job1`
1. [ ] crie essa dependência definindo `job2` após `job1` na definição do `.yaml` do fluxo de trabalho
1. [ ] crie essa dependência usando a palavra-chave `concurrency` em `job2`
