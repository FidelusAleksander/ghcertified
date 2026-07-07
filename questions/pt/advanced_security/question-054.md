---
question: "Como você pode configurar seu repositório GitHub para executar a análise do CodeQL em um cronograma?"
documentation: "https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning#about-default-setup"
---

- [x] Criando um workflow do GitHub Actions com um gatilho `schedule`. O workflow deve utilizar ações do repositório `github/codeql-action`.
- [x] Usando a configuração padrão de análise do CodeQL.
- [ ] Configurando a propriedade `codeql.trigger` nas configurações do repositório como `schedule`.
- [ ] Adicionando uma propriedade `schedule` ao arquivo de configuração `.github/codeql.yml`.
- [ ] Solicitando ao suporte do GitHub a habilitação da análise programada do CodeQL para o repositório.
