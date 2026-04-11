---
question: "Quando você deve usar `artifacts`? (Selecione duas.)"
title: "Pergunta 042"
---



> https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#about-workflow-artifacts

- [x] Use artifacts para salvar arquivos produzidos por um job para visualizar após a execução de um workflow ter terminado, como resultados de testes ou logs de construção.
- [x] Use artifacts para salvar binários produzidos por um job de construção para usar em um job de implantação subsequente para implantar uma nova versão de uma aplicação.
- [ ] Use artifacts para reutilizar arquivos que não mudam frequentemente entre jobs ou execuções de workflows, como dependências de construção de um sistema de gerenciamento de pacotes.
> Para isso, o caching deve ser usado https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching
- [ ] Use artifacts para criar novas versões do seu aplicativo junto com notas de release, menções e/ou contribuidores.
> Esse é um caso de uso para releases, não para artifacts.
