---
question: "Como você pode excluir determinados diretórios ou arquivos da verificação de segredos?"
documentation: "https://docs.github.com/en/code-security/secret-scanning/configuring-secret-scanning-for-your-repositories#excluding-directories-from-secret-scanning-alerts-for-users"
---

- [x] Criando um arquivo `secret_scanning.yml` e incluindo os caminhos que não devem ser verificados
- [ ] Não é possível excluir arquivos e/ou diretórios específicos da verificação. Uma vez que você ativar a verificação de segredos para um repositório, todos os arquivos e diretórios serão verificados.
- [ ] Incluindo esses arquivos no arquivo `.gitignore`
- [ ] Criando um arquivo `dependabot.yml` e incluindo os caminhos que não devem ser verificados
