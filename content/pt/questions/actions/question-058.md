---
question: "Ao utilizar o GitHub Actions para acessar recursos em um dos provedores de nuvem (como AWS, Azure ou GCP), a forma mais segura e recomendada de autenticar é:"
title: "Questão 058"
---

> https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect
1. [x] Usando OIDC
1. [ ] Usando Vault
1. [ ] Armazenando chaves de acesso em `secrets`
> Utilizar chaves de acesso de longa duração não é recomendado em caso de vazamentos ou ataques de segurança, como [injeção de script](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)
1. [ ] Armazenando chaves de acesso em `variables`
> Valores sensíveis não devem ser armazenados em `variables`
