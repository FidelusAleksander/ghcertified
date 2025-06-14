---
question: "No trabalho `deploy`, se você quiser acessar os binários (contendo sua aplicação) que foram criados no trabalho `build`, você deve"
title: "Questão 047"
---


> https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#comparing-artifacts-and-dependency-caching

1. [x] fazer upload dos binários como artefatos em `build` e baixá-los em `deploy`
1. [ ] fazer upload dos binários como artefatos em `deploy` e baixá-los em `build`
1. [ ] armazenar os binários em cache no `build` e ler os arquivos do cache em `deploy`
1. [ ] armazenar os binários em cache no `deploy` e ler os arquivos do cache em `build`
