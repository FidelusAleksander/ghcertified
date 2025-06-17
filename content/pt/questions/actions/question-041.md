---
question: "Quando você deve usar `caching`?"
title: "Pergunta 041"
---



> https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching

1. [x] Quando você quer reutilizar arquivos que não mudam frequentemente entre jobs ou execuções de fluxo de trabalho, como dependências de build de um sistema de gerenciamento de pacotes.
1. [ ] Quando você quer reutilizar arquivos que mudam frequentemente entre jobs ou execuções de fluxo de trabalho, como dependências de build de um sistema de gerenciamento de pacotes.
1. [ ] Quando você quer salvar arquivos produzidos por um job para visualizar após uma execução de fluxo de trabalho ter terminado, como binários compilados ou logs de build.
> Artefatos devem ser usados para isso https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
1.
