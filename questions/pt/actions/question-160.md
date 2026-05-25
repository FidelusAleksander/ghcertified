---
question: "Por que você deve usar OIDC ao conectar um workflow a provedores de nuvem?"
documentation: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect"
---

- [x] OIDC evita que você tenha que manter credenciais de nuvem como segredos de GitHub de longa duração 
- [x] OIDC envolve a geração e o uso de tokens de curta duração, o que é mais seguro
- [ ] Provedores de nuvem exigem o uso de OIDC.
> OIDC é opcional e recomendado, mas não estritamente necessário.
- [ ] Usar OIDC permite contornar a configuração de políticas de confiança com provedores de nuvem
> Você deve configurar políticas de confiança com o provedor de nuvem para usar OIDC
- [ ] OIDC gera tokens web JSON (JWTs) que podem ser usados em diferentes jobs do workflow
> A infraestrutura do OIDC envolve a criação de JWTs que são exclusivos para cada job do workflow
- [ ] Usar OIDC dentro de um workflow salvará automaticamente os logs desse workflow no armazenamento em nuvem
> OIDC está relacionado à segurança ao conectar-se a provedores de nuvem, não ao armazenamento. Portanto, não está envolvido no salvamento de logs de workflow em nenhum lugar.
