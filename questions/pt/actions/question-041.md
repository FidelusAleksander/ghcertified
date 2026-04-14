---
question: "Quando você deve usar `caching`?"
documentation: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching"
---

- [x] Quando você deseja reutilizar arquivos que não mudam frequentemente entre os jobs ou execuções de workflows, como dependências de construção de um sistema de gerenciamento de pacotes.
- [ ] Quando você deseja reutilizar arquivos que mudam frequentemente entre os jobs ou execuções de workflows, como dependências de construção de um sistema de gerenciamento de pacotes.
- [ ] Quando você deseja salvar arquivos produzidos por um job para visualizar após a execução do workflow ter terminado, como binários construídos ou logs de construção.
> Artifacts devem ser usados para isso https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
- [ ] Quando você deseja salvar binários produzidos por um job de construção para usar em um job de implantação subsequente para implantar uma nova versão de um aplicativo
> Artifacts devem ser usados para isso https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
