---
question: "Como os workflows integram-se ao OIDC após o estabelecimento de uma relação de confiança?"
documentation: "https://docs.github.com/en/actions/concepts/security/openid-connect#how-oidc-integrates-with-github-actions"
---

- [x] Um job de workflow solicita um token OIDC do provedor OIDC do GitHub. O token OIDC é então validado pelo provedor de nuvem, que fornece um token de acesso à nuvem para que o workflow possa acessar recursos na nuvem.
- [ ] Um job de workflow solicita um token de acesso à nuvem do provedor de acesso à nuvem do GitHub. O token é então validado pelo provedor de nuvem, que fornece um token OIDC para que o workflow possa acessar recursos na nuvem.
> Os tokens OIDC são solicitados primeiro, e então um token de acesso à nuvem é gerado. Tokens OIDC não podem acessar recursos na nuvem.
- [ ] O gatilho de evento `on: OIDC_request` solicita um token de acesso à nuvem do provedor de acesso à nuvem do GitHub. O token é então validado pelo provedor de nuvem, permitindo que o workflow acesse recursos na nuvem.
> Não existe um gatilho de evento `on: OIDC_request`.
- [ ] O gatilho de evento `on: OIDC_request` solicita um token OIDC do provedor OIDC do GitHub. O token é então validado pelo provedor de nuvem, permitindo que o workflow acesse recursos na nuvem.
> Não existe um gatilho de evento `on: OIDC_request`.
- [ ] Após adicionar um workflow à lista de "workflows permitidos no OIDC" nas configurações do repositório, os workflows criarão automaticamente tokens OIDC e tokens de acesso à nuvem em seu próprio nome. Esses tokens podem ser usados imediatamente no workflow para interagir com provedores de nuvem.
> Não existe uma configuração de "workflows permitidos no OIDC".  
