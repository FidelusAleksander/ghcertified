---
question: "Quando você deve usar `caching`?"
documentation: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching"
---

- [x] Quando você deseja reutilizar arquivos que não mudam com frequência entre jobs ou execuções de workflows, como dependências de compilação de um sistema de gerenciamento de pacotes.
- [ ] Quando você deseja reutilizar arquivos que mudam com frequência entre jobs ou execuções de workflows, como dependências de compilação de um sistema de gerenciamento de pacotes.
- [ ] Quando você deseja salvar arquivos produzidos por um job para visualizar depois que uma execução de workflow tiver terminado, como binários compilados ou logs de compilação.
> Para isso, você deve usar artifacts https://docs.github.com/en/actions/tutorials/store-and-share-data
- [ ] Quando você deseja salvar binários produzidos por um job de compilação para usar em um job de implantação subsequente para implantar uma nova versão de um aplicativo.
> Para isso, você deve usar artifacts https://docs.github.com/en/actions/tutorials/store-and-share-data
