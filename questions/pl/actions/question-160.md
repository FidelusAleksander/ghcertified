---
question: "Dlaczego warto używać OIDC przy łączeniu workflow z dostawcami usług w chmurze?"
documentation: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect"
---

- [x] OIDC eliminuje konieczność przechowywania danych uwierzytelniających do chmury jako długoterminowych sekretów GitHub 
- [x] OIDC polega na generowaniu i używaniu krótkoterminowych tokenów, co jest bardziej bezpieczne
- [ ] Dostawcy usług w chmurze wymagają użycia OIDC.
> OIDC jest opcjonalny i zalecany, ale nie jest bezwzględnie wymagany.
- [ ] Użycie OIDC pozwala na obejście konfiguracji zasad zaufania z dostawcami usług w chmurze
> Aby korzystać z OIDC, konieczne jest skonfigurowanie zasad zaufania z dostawcą usług w chmurze
- [ ] OIDC generuje tokeny webowe w formacie JSON (JWT), które mogą być używane w różnych zadaniach workflow
> Infrastruktura OIDC obejmuje tworzenie unikalnych JWT dla każdego zadania workflow
- [ ] Używanie OIDC w workflow automatycznie zapisze logi tego workflow w pamięci chmury
> OIDC dotyczy bezpieczeństwa w połączeniach z dostawcami usług w chmurze, a nie przechowywania danych. W związku z tym nie ma wpływu na zapisywanie logów workflow w jakimkolwiek miejscu. 
