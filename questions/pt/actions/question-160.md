---
question: "Por que você deveria usar OIDC ao conectar um workflow a provedores de nuvem?"
documentation: "https://docs.github.com/en/actions/concepts/security/openid-connect"
---

- [x] OIDC evita que você tenha que manter credenciais da nuvem como segredos de GitHub de longa duração 
- [x] OIDC envolve a geração e uso de tokens de curta duração, o que é mais seguro
- [ ] Provedores de nuvem exigem o uso de OIDC.
> OIDC é opcional e recomendado, mas não estritamente exigido.
- [ ] Usar OIDC permite que você contorne a configuração de políticas de confiança com provedores de nuvem
> Você deve configurar políticas de confiança com o provedor de nuvem para usar OIDC
- [ ] OIDC gera JSON web tokens (JWTs) que podem ser usados em vários jobs do workflow
> A infraestrutura OIDC envolve a criação de JWTs que são exclusivos para cada job do workflow
- [ ] Usar OIDC em um workflow salvará automaticamente os logs desse workflow no armazenamento em nuvem
> OIDC está relacionado à segurança ao conectar-se a provedores de nuvem, não ao armazenamento. Assim, não está envolvido no salvamento de logs de workflow em nenhum lugar.
