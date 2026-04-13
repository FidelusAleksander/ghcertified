---
question: "Qual dessas afirmações é verdadeira sobre o programa de parceiros de verificação de segredos do GitHub?"
documentation: "https://docs.github.com/en/code-security/secret-scanning/secret-scanning-partner-program"
---

- [x] É um programa em que os provedores de serviço podem fornecer ao GitHub os padrões de regex dos segredos que eles emitem para que a verificação de segredos do GitHub possa reconhecê-los.
- [x] Quando o GitHub identifica um segredo de um provedor de serviço parceiro, ele notifica o provedor de serviço sobre o segredo vazado.
- [x] O parceiro pode tomar ações ao receber a notificação do GitHub sobre um segredo vazado, como revogar o segredo e informar o proprietário sobre o segredo comprometido.
- [ ] Ele concede ao parceiro acesso à API de varredura de segredos do GitHub para que o provedor de serviço possa escanear repositórios do GitHub em busca de segredos que correspondam ao formato deles.
> O GitHub é sempre responsável por executar a verificação de segredos, e não o parceiro.
- [ ] O GitHub tem a capacidade de revogar automaticamente segredos vazados e notificar o provedor de serviço que eles foram invalidados pelo GitHub.
> O GitHub não participa da revogação de segredos vazados; o provedor de serviço tem a opção de fazê-lo.
