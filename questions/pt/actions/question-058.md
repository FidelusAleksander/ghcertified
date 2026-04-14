---
question: "Ao usar o GitHub Actions para acessar recursos em um dos provedores de nuvem (como AWS, Azure ou GCP), a forma mais segura e recomendada de autenticação é"
documentation: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect"
---

- [x] Usando OIDC
- [ ] Usando Vault
- [ ] Armazenar chaves de acesso em `secrets`
> Não é recomendado usar chaves de acesso de longa duração em caso de vazamentos de segurança ou ataques, como [injeção de script](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)
- [ ] Armazenar chaves de acesso em `variables`
> Valores sensíveis não devem ser armazenados em `variables`
