---
question: "O que é necessário para um servidor de CI fazer upload de resultados SARIF para o GitHub?"
documentation: "https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/integrate-with-existing-tools/use-with-existing-ci-system#generating-a-token-for-authentication-with-github"
---

- [x] Um GitHub App ou um token de acesso pessoal com permissão de escrita em `security_events`.
- [ ] Uma conexão direta com o GitHub Advisory Database.
- [ ] Acesso de administrador ao repositório GitHub.
- [ ] Um plugin especial instalado no sistema de CI.
