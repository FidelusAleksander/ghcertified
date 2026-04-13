---
question: "Como você pode configurar seu repositório GitHub para executar a análise do CodeQL em um agendamento?"
documentation: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning#about-default-setup"
---

- [x] Criando um workflow do GitHub Actions com um gatilho `schedule`. O workflow deve utilizar ações do repositório `github/codeql-action`.
- [x] Usando a configuração padrão de análise CodeQL.
- [ ] Configurando a propriedade `codeql.trigger` nas configurações do repositório para `schedule`.
- [ ] Adicionando uma propriedade `schedule` ao arquivo de configuração `.github/codeql.yml`.
- [ ] Solicitando ao suporte do GitHub que ative a análise do CodeQL agendada para o repositório.
