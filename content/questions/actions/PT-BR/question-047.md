---
question: "No job `deploy`, se você quiser acessar binários (contendo sua aplicação) que foram criados no job `build`, você deve"
archetype: "questions"
title: "Questão 047"
---


> https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#comparing-artifacts-and-dependency-caching

1. [x] fazer upload dos binários como artifacts no `build` e baixá-los no `deploy`
1. [ ] fazer upload dos binários como artifacts no `deploy` e baixá-los no `build`
1. [ ] armazenar os binários em cache no `build` e ler os arquivos do cache no `deploy`
1. [ ] armazenar os binários em cache no `deploy` e ler os arquivos do cache no `build`
