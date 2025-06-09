---
title: "Pergunta 054"
question: "Como você pode configurar seu repositório no GitHub para executar a análise CodeQL em um cronograma? (Escolha duas.)"
---

> https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning#about-default-setup
- [x] Criando um fluxo de trabalho do GitHub Actions com um gatilho `schedule`. O fluxo de trabalho deve utilizar ações do repositório `github/codeql-action`.
- [x] Usando a configuração padrão de análise CodeQL.
- [ ] Definindo a propriedade `codeql.trigger` nas configurações do repositório como `schedule`.
- [ ] Adicionando uma propriedade `schedule` ao arquivo de configuração `.github/codeql.yml`.
- [ ] Solicitando ao suporte do GitHub a ativação da análise CodeQL agendada para o repositório.
