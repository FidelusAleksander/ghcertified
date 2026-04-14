---
question: "Você incluiu alguns segredos falsos no seu código de teste e eles foram captados pela varredura de segredos do GitHub. O que você pode fazer para informar ao GitHub que esses são segredos falsos usados em testes e podem ser ignorados pela varredura de segredos?"
documentation: "https://docs.github.com/en/code-security/secret-scanning/using-advanced-secret-scanning-and-push-protection-features/excluding-folders-and-files-from-secret-scanning"
---

- [x] Criar um arquivo `secret_scanning.yml` no qual você declara os caminhos onde os segredos falsos estão localizados, para que as varreduras os ignorem
- [x] Fechar o Alerta de Varredura de Segredos com o motivo de fechamento `Used in tests`
- [ ] Nos seus arquivos de teste, adicionar um comentário `#gh_ignore: fake secret` na linha onde o segredo falso está localizado.
- [ ] Criar um arquivo `.github/codeql.yml` no qual você declara os caminhos onde os segredos falsos estão localizados, para que as varreduras os ignorem
