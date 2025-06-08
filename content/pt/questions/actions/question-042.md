---
question: "Quando você deve usar `artifacts`? (Selecione duas.)"
title: "Questão 042"
---



> https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#about-workflow-artifacts

- [x] Use artifacts para salvar arquivos produzidos por um job para visualizar após a execução de um workflow, como resultados de testes ou logs de build.
- [x] Use artifacts para salvar binários produzidos por um job de build para usar em um job subsequente de deploy para implantar uma nova versão de uma aplicação.
- [ ] Use artifacts para reutilizar arquivos que não mudam frequentemente entre jobs ou execuções de workflow, como dependências de build de um gerenciador de pacotes.
> Caching deve ser usado para isso https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching
- [ ] Use artifacts para criar novas versões de sua aplicação juntamente com notas de release, menções e/ou contribuintes.
> Esse é um caso de uso para releases, não artifacts.
