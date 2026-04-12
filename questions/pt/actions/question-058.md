---
question: "Ao usar o GitHub Actions para acessar recursos em um dos provedores de nuvem (como AWS, Azure ou GCP), a maneira mais segura e recomendada de autenticar é"
documentation: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect"
---

- [x] Usando OIDC
- [ ] Usando Vault
- [ ] Armazenando chaves de acesso em `secrets`
> Usar chaves de acesso de longa duração não é recomendado em caso de vazamentos de segurança ou ataques, como [injeção de script](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)
- [ ] Armazenando chaves de acesso em `variables`
> Nenhum valor sensível deve ser armazenado em `variables`
