---
question: "Um trabalho chamado `job2` está utilizando artefatos criados em `job1`. Portanto, é importante garantir que `job1` termine antes de `job2` começar a procurar pelos artefatos. Como você deve criar essa dependência?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds"
---

- [x] criar essa dependência usando a palavra-chave `needs` em `job2`
- [ ] essa dependência é criada implicitamente ao usar `actions/download-artifact` para baixar o artefato de `job1`
- [ ] criar essa dependência definindo `job2` após `job1` na definição do arquivo `.yaml` do fluxo de trabalho
- [ ] criar essa dependência usando a palavra-chave `concurrency` em `job2`
