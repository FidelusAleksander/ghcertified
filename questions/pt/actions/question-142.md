---
question: "Qual das seguintes respostas está correta em relação aos tokens de acesso de instalação?"
documentation: "https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation#using-an-installation-access-token-to-authenticate-as-an-app-installation"
---

- [x] Os tokens de acesso de instalação são tokens de curta duração ideais para atividades de automação, mas exigem a configuração de um Github App.
- [x] `GITHUB_TOKEN` é um tipo de token de acesso de instalação.
> `GITHUB_TOKEN` é um token de acesso de instalação do GitHub App que é gerado automaticamente para cada execução de workflow. Veja a [documentação](https://docs.github.com/en/actions/concepts/security/github_token) para detalhes adicionais.
- [x] O `actions/create-github-app-token` pode ser chamado dentro de workflows para criar um token de acesso de instalação disponível para uso imediato.
- [ ] O `actions/create-github-app-token` pode ser chamado dentro de workflows para criar um token de acesso de instalação, mas o token de acesso de instalação só pode ser usado em execuções futuras do workflow.
> Uma vez criado, um token de acesso de instalação pode ser usado imediatamente. Veja a [página oficial desta ação](https://github.com/actions/create-github-app-token) para mais detalhes.
- [ ] Os tokens de acesso de instalação não podem ser configurados para atuar em nome do GitHub App associado a eles.
> Os tokens de acesso de instalação são frequentemente configurados para atuar em nome do GitHub App associado a eles. Isso pode ajudar na auditoria de atividades automáticas.
