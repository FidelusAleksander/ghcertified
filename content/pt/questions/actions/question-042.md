---
question: "Quando você deve usar `artifacts`? (Selecione dois.)"
title: "Pergunta 042"
---



> https://docs.github.com/pt/actions/using-workflows/storing-workflow-data-as-artifacts#about-workflow-artifacts

- [x] Use artifacts para salvar arquivos produzidos por um job para visualizar após a execução de um fluxo de trabalho ter terminado, como resultados de teste ou logs de compilação.
- [x] Use artifacts para salvar binários produzidos por um job de compilação para usar em um job subsequente de implantação com o objetivo de implantar uma nova versão de uma aplicação.
- [ ] Use artifacts para reutilizar arquivos que não mudam com frequência entre jobs ou execuções de fluxo de trabalho, como dependências de compilação de um sistema de gerenciamento de pacotes.
> Cache deve ser usado para isso https://docs.github.com/pt/actions/using-workflows/caching-dependencies-to-speed
