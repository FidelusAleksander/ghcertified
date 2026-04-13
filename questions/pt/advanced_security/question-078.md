---
question: "Como você pode usar um arquivo de configuração personalizado do CodeQL em um workflow do GitHub Actions?"
documentation: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#using-a-custom-configuration-file"
---

- [x] Fornecendo explicitamente o caminho do arquivo de configuração no parâmetro de entrada `config-file` da ação `github/codeql-action/init`
- [ ] Armazenando a configuração no arquivo `.github/codeql/config-config.yml`. A ação `github/codeql-action/init` detectará automaticamente o arquivo e o usará
- [ ] Fazendo o upload desse arquivo na seção Code Scanning da aba Security no repositório
- [ ] Armazenando a configuração no arquivo `.github/workflows/codeql-analysis.yml`. A ação `github/codeql-action/init` detectará automaticamente o arquivo e o usará
