---
question: "Um trabalho chamado `job2` está utilizando artefatos criados no `job1`. Portanto, é importante garantir que `job1` termine antes que `job2` comece a procurar pelos artefatos. Como você deve criar essa dependência?"
title: "Pergunta 048"
---


> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds

1. [x] criar essa dependência utilizando a palavra-chave `needs` em `job2`
1. [ ] essa dependência é criada implicitamente ao usar `actions/download-artifact` para baixar o artefato de `job1`
1. [ ] criar essa dependência definindo `job2` após `job1` na definição do arquivo `.yaml` do workflow
1. [ ] criar essa dependência utilizando a palavra-chave `concurrency` em `job2`
