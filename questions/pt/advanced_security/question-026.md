---
question: "Como o gráfico de dependências do GitHub sabe quais dependências seu projeto está usando?"
documentation: "https://docs.github.com/en/code-security/concepts/supply-chain-security/dependency-graph#supported-package-ecosystems"
---

- [x] O GitHub deriva automaticamente as dependências a partir de manifests e arquivos de bloqueio commitados no repositório
- [x] Dependências podem ser adicionadas manualmente usando a API de submissão de dependências
- [ ] O GitHub escaneia o código do repositório em busca de declarações de importação de pacotes externos
- [ ] É necessário adicionar um fluxo de trabalho GitHub Actions que usa a GitHub Action oficial `actions/dependency-graph` para adicionar dependências ao gráfico sempre que um novo commit for enviado ao repositório
