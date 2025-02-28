---
question: "Quando você deve usar `artifacts`? (Selecione duas.)"
archetype: "questions"
title: "Questão 042"
---



> https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#about-workflow-artifacts

- [x] Use artifacts para salvar arquivos produzidos por um job para visualizar após a execução de um workflow ter terminado, como resultados de testes ou logs de build.
- [x] Use artifacts para salvar binários produzidos por um job de build para usar em um job de deploy subsequente para implantar uma nova versão de uma aplicação.
- [ ] Use artifacts para reutilizar arquivos que não mudam frequentemente entre jobs ou execuções de workflows, como dependências de build de um sistema de gerenciamento de pacotes.
> Caching deve ser usado para isso https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching
- [ ] Use artifacts para criar novas versões de sua aplicação junto com notas de lançamento, menções e/ou contribuidores.
> Esse é um caso de uso para releases, não artifacts
