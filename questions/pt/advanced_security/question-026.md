---
question: "Como o GitHub Dependency graph sabe quais dependências seu projeto está usando?"
documentation: "https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#supported-package-ecosystems"
---

- [x] O GitHub deriva automaticamente as dependências a partir dos manifests e arquivos de bloqueio (*lock files*) comprometidos no repositório
- [x] As dependências podem ser adicionadas manualmente usando a Dependency submission API
- [ ] O GitHub verifica o código do repositório em busca de declarações de importação de pacotes externos
- [ ] É necessário adicionar um fluxo de trabalho do GitHub Actions que utiliza a Action oficial `actions/dependency-graph` do GitHub para adicionar dependências ao gráfico sempre que um novo commit é enviado ao repositório
