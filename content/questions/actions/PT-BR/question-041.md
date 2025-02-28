---
question: "Quando você deve usar `caching`?"
archetype: "questions"
title: "Questão 041"
---



> https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching

1. [x] Quando você quer reutilizar arquivos que não mudam frequentemente entre jobs ou execuções de workflows, como dependências de build de um sistema de gerenciamento de pacotes.
1. [ ] Quando você quer reutilizar arquivos que mudam frequentemente entre jobs ou execuções de workflows, como dependências de build de um sistema de gerenciamento de pacotes.
1. [ ] Quando você quer salvar arquivos produzidos por um job para visualizar após a execução de um workflow ter terminado, como binários construídos ou logs de build.
> Artifacts devem ser usados para isso https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
1. [ ] Quando você quer salvar binários produzidos por um job de build para usar em um job de deploy subsequente para implantar uma nova versão de uma aplicação.
> Artifacts devem ser usados para isso https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
