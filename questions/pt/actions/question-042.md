---
question: "Quando você deve usar `artifacts`?"
documentation: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#about-workflow-artifacts"
---

- [x] Use artifacts para salvar arquivos produzidos por um job para visualizar após a execução de um workflow ter terminado, como resultados de testes ou logs de compilação.
- [x] Use artifacts para salvar binários produzidos por um job de compilação para usar em um job de deploy subsequente para implantar uma nova versão de um aplicativo.
- [ ] Use artifacts para reutilizar arquivos que não mudam com frequência entre jobs ou execuções de workflow, como dependências de build de um sistema de gerenciamento de pacotes.
> Caching deve ser usado para isso https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching
- [ ] Use artifacts para criar novas versões do seu aplicativo junto com notas de lançamento, menções e/ou contribuidores.
> Esse é um caso de uso para releases, não artifacts
