---
question: "Dlaczego powinieneś używać OIDC podczas łączenia workflow z dostawcami chmury?"
documentation: "https://docs.github.com/en/actions/concepts/security/openid-connect"
---

- [x] OIDC pozwala uniknąć przechowywania długoterminowych poświadczeń do chmury jako GitHub secrets
- [x] OIDC wiąże się z generowaniem i wykorzystaniem tokenów krótkoterminowych, co jest bezpieczniejsze
- [ ] Dostawcy chmury wymagają użycia OIDC.
> OIDC jest opcjonalny i zalecany, ale nie jest bezwzględnie wymagany.
- [ ] Korzystanie z OIDC pozwala ominąć konfigurację zasad zaufania z dostawcami chmury
> Aby używać OIDC, musisz skonfigurować zasady zaufania u dostawcy chmury.
- [ ] OIDC generuje JSON web tokens (JWTs), które mogą być używane w różnych zadaniach workflow
> Infrastruktura OIDC polega na tworzeniu JSON web tokens (JWTs), które są unikalne dla każdego zadania workflow.
- [ ] Korzystanie z OIDC wewnątrz workflow automatycznie zapisze logi tego workflow w pamięci chmury
> OIDC zajmuje się bezpieczeństwem podczas łączenia z dostawcami chmury, a nie przechowywaniem. W związku z tym nie jest używany do zapisywania logów workflow w żadnym miejscu. 
