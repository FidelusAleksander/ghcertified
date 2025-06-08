---
question: "Przy korzystaniu z GitHub Actions w celu uzyskania dostępu do zasobów jednego z dostawców chmury (takich jak AWS, Azure czy GCP), najbezpieczniejszym i zalecanym sposobem uwierzytelniania jest"
title: "Pytanie 058"
---

> https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect
1. [x] Korzystanie z OIDC
1. [ ] Korzystanie z Vault
1. [ ] Przechowywanie kluczy dostępu w `secrets`
> Używanie długotrwałych kluczy dostępu nie jest zalecane ze względu na ryzyko wycieków danych lub ataków, takich jak [iniekcja skryptów](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)
1. [ ] Przechowywanie kluczy dostępu w `variables`
> Wrażliwe wartości nie powinny być przechowywane w `variables`
