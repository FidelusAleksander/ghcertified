---
question: "Como você pode excluir determinados diretórios ou arquivos da varredura de segredos?"
documentation: "https://docs.github.com/en/code-security/how-tos/secure-your-secrets/customize-leak-detection/exclude-folders-and-files"
---

- [x] Criando um arquivo `secret_scanning.yml` e incluindo os caminhos que não devem ser verificados
- [ ] Não é possível excluir arquivos e/ou diretórios específicos da verificação. Assim que você habilita a varredura de segredos para um repositório, todos os arquivos e diretórios serão verificados.
- [ ] Inclua esses arquivos no arquivo `.gitignore`
- [ ] Criando um arquivo `dependabot.yml` e incluindo os caminhos que não devem ser verificados
