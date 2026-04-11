---
title: "Pergunta 026"
question: "Como o Dependency graph do GitHub sabe quais dependências seu projeto está utilizando? (Escolha duas.)"
---




> https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#supported-package-ecosystems
- [x] O GitHub deriva automaticamente as dependências a partir de manifests e arquivos de bloqueio ('lock files') comprometidos no repositório
- [x] As dependências podem ser adicionadas manualmente usando a Dependency submission API
- [ ] O GitHub verifica o código do repositório em busca de declarações de importação de pacotes externos
- [ ] É necessário adicionar um workflow GitHub Actions que utilize a GitHub Action oficial `actions/dependency-graph` para adicionar dependências ao gráfico sempre que um novo commit for enviado ao repositório
