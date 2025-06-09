---
title: "Pergunta 026"
question: "Como o gráfico de dependências do GitHub sabe quais dependências seu projeto está utilizando? (Escolha duas.)"
---




> https://docs.github.com/pt/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph#supported-package-ecosystems
- [x] O GitHub deriva automaticamente as dependências de manifests e arquivos de bloqueio comprometidos no repositório
- [x] As dependências podem ser adicionadas manualmente usando a API de envio de dependências
- [ ] O GitHub analisa o código do repositório em busca de declarações de importação de pacotes externos
- [ ] É necessário adicionar um fluxo de trabalho do GitHub Actions que use a Action oficial `actions/dependency-graph` para adicionar dependências ao gráfico sempre que um novo commit for enviado ao repositório
