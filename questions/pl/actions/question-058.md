---
question: "Podczas korzystania z GitHub Actions w celu uzyskania dostępu do zasobów jednego z dostawców chmury (takich jak AWS, Azure lub GCP) najbezpieczniejszym i zalecanym sposobem uwierzytelnienia jest"
documentation: "https://docs.github.com/en/actions/concepts/security/openid-connect"
---

- [x] Korzystanie z OIDC
- [ ] Korzystanie z Vault
- [ ] Przechowywanie kluczy dostępu w `secrets`
> Korzystanie z długotrwałych kluczy dostępu nie jest zalecane w przypadku wycieków lub ataków, takich jak [iniekcja skryptu](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)
- [ ] Przechowywanie kluczy dostępu w `variables`
> Żadne wrażliwe wartości nie powinny być przechowywane w `variables`
