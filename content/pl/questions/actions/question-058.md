---
question: "Korzystając z GitHub Actions do uzyskiwania dostępu do zasobów w jednym z dostawców chmury (takich jak AWS, Azure lub GCP), najbezpieczniejszym i zalecanym sposobem uwierzytelniania jest"
title: "Pytanie 058"
---

> https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect
1. [x] Korzystanie z OIDC
1. [ ] Korzystanie z Vault
1. [ ] Przechowywanie kluczy dostępu w `secrets`
> Wykorzystywanie długoterminowych kluczy dostępu nie jest zalecane w przypadku ewentualnych wycieków bezpieczeństwa lub ataków, takich jak [script injection](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)
1. [ ] Przechowywanie kluczy dostępu w `variables`
> Żadne wartości wrażliwe nie powinny być przechowywane w `variables`
