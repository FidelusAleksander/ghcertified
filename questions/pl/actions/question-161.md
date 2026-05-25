---
question: "W jaki sposób workflowy integrują się z OIDC po ustanowieniu relacji zaufania?"
documentation: "https://docs.github.com/en/actions/concepts/security/openid-connect#how-oidc-integrates-with-github-actions"
---

- [x] Zadanie workflowa żąda tokena OIDC od dostawcy OIDC GitHub. Token OIDC jest następnie weryfikowany przez dostawcę chmury, który dostarcza token dostępu do chmury, aby workflow mógł uzyskać dostęp do zasobów chmurowych.
- [ ] Zadanie workflowa żąda tokena dostępu do chmury od dostawcy dostępu do chmury GitHub. Token jest następnie weryfikowany przez dostawcę chmury, który dostarcza token OIDC, aby workflow mógł uzyskać dostęp do zasobów chmurowych.
> Tokeny OIDC są żądane jako pierwsze, a następnie generowany jest token dostępu do chmury. Tokeny OIDC nie mogą uzyskiwać dostępu do zasobów chmurowych.
- [ ] Wyzwalacz zdarzenia `on: OIDC_request` żąda tokena dostępu do chmury od dostawcy dostępu do chmury GitHub. Token jest następnie weryfikowany przez dostawcę chmury, co umożliwia workflowowi dostęp do zasobów chmurowych.
> Nie istnieje wyzwalacz zdarzenia `on: OIDC_request`.
- [ ] Wyzwalacz zdarzenia `on: OIDC_request` żąda tokena OIDC od dostawcy OIDC GitHub. Token jest następnie weryfikowany przez dostawcę chmury, co umożliwia workflowowi dostęp do zasobów chmurowych.
> Nie istnieje wyzwalacz zdarzenia `on: OIDC_request`.
- [ ] Po dodaniu workflowa do listy „OIDC-allowed workflows” w ustawieniach repozytorium, workflowy będą automatycznie tworzyć tokeny OIDC i tokeny dostępu do chmury we własnym imieniu. Te tokeny mogą być następnie natychmiast użyte w workflowie do integracji z dostawcami chmurowymi.
> Nie ma ustawienia „OIDC-allowed workflows”.  
