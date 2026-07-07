---
question: "Ao usar o GitHub Actions para acessar recursos em um dos provedores de nuvem (como AWS, Azure ou GCP), a maneira mais segura e recomendada de autenticar é"
documentation: "https://docs.github.com/en/actions/concepts/security/openid-connect"
---

- [x] Usando OIDC
- [ ] Usando Vault
- [ ] Armazenando chaves de acesso em `secrets`
> Não é recomendado usar chaves de acesso de longa duração em caso de vazamentos de segurança ou ataques, como [injeção de script](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)
- [ ] Armazenando chaves de acesso em `variables`
> Nenhum valor sensível deve ser armazenado em `variables`
