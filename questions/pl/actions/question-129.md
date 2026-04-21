---
question: "`GITHUB_TOKEN` może być używany do klonowania dowolnego repozytorium."
documentation: "https://docs.github.com/en/actions/concepts/security/github_token#about-the-github_token"
---

- [ ] Prawda
- [ ] Tylko z podniesionymi uprawnieniami
- [x] Fałsz
> Uprawnienia `GITHUB_TOKEN` są ograniczone do repozytorium, które zawiera workflow, który został uruchomiony. 
> Aby sklonować inne repozytorium, należy użyć innych metod uwierzytelnienia, takich jak personal access token (PAT) lub installation access token.
