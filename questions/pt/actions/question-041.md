---
question: "Quando você deve usar o `caching`?"
documentation: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching"
---

- [x] Quando você deseja reutilizar arquivos que não mudam com frequência entre trabalhos ou execuções de workflow, como dependências de construção de um sistema de gerenciamento de pacotes.
- [ ] Quando você deseja reutilizar arquivos que mudam com frequência entre trabalhos ou execuções de workflow, como dependências de construção de um sistema de gerenciamento de pacotes.
- [ ] Quando você deseja salvar arquivos produzidos por um trabalho para visualizar após o término de uma execução de workflow, como binários construídos ou logs de build.
> Artifacts devem ser usados para isso https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
- [ ] Quando você deseja salvar binários produzidos por um trabalho de build para usar em um trabalho subsequente de deploy a fim de implantar uma nova versão de uma aplicação
> Artifacts devem ser usados para isso https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
