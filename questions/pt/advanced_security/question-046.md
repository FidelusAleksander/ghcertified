---
question: "O que é necessário para um servidor CI enviar resultados SARIF para o GitHub?"
documentation: "https://docs.github.com/en/code-security/code-scanning/integrating-with-code-scanning/using-code-scanning-with-your-existing-ci-system#generating-a-token-for-authentication-with-github"
---

- [x] Um GitHub App ou token de acesso pessoal com permissão de escrita para `security_events`.
- [ ] Uma conexão direta com o GitHub Advisory Database.
- [ ] Acesso de administrador ao repositório do GitHub.
- [ ] Um plugin especial instalado no sistema CI.
