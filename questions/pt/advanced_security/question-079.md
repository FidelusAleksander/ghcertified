---
question: "Onde você pode especificar as consultas CodeQL a serem executadas em um fluxo de trabalho do GitHub Actions?"
documentation: "https://docs.github.com/en/code-security/code-scanning/creating-an-advanced-setup-for-code-scanning/customizing-your-advanced-setup-for-code-scanning#running-additional-queries"
---

- [x] No parâmetro de entrada `queries` da ação `github/codeql-action/init`
- [x] Em um arquivo YAML de configuração do CodeQL
- [ ] No parâmetro de entrada `paths` da ação `github/codeql-action/queries`
- [ ] Na seção Code Scanning da aba Security no repositório
- [ ] No campo `codeql` do arquivo `.github/settings.yml`
