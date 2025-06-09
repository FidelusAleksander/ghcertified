---
title: "Pergunta 078"
question: "Como você pode usar um arquivo de configuração personalizado do CodeQL em um fluxo de trabalho do GitHub Actions?"
---


> https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-a-custom-configuration-file
1. [x] Fornecendo explicitamente o caminho do arquivo de configuração no parâmetro de entrada `config-file` da ação `github/codeql-action/init`
1. [ ] Armazenando a configuração no arquivo `.github/codeql/config-config.yml`. A ação `github/codeql-action/init` detectará automaticamente o arquivo e o usará
1. [ ] Fazendo upload desse arquivo na seção Code Scanning da aba Segurança no repositório
1. [ ] Armazenando a configuração no arquivo `.github/workflows/codeql-analysis.yml`. A ação `github/codeql-action/init` detectará automaticamente o arquivo e o usará
