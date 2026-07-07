---
question: "Qual destas afirmações é verdadeira sobre o programa de parceiros de varredura de segredos do GitHub?"
documentation: "https://docs.github.com/en/code-security/tutorials/secret-scanning-partner-program"
---

- [x] É um programa onde os provedores de serviço podem fornecer ao GitHub os padrões regex dos segredos que emitem para que a varredura de segredos do GitHub possa reconhecê-los.
- [x] Quando o GitHub identifica um segredo de um provedor de serviços parceiro, ele notifica o provedor de serviços sobre o segredo vazado.
- [x] O parceiro pode tomar ações ao receber a notificação do GitHub sobre um segredo vazado, como revogar o segredo e informar o proprietário do segredo comprometido.
- [ ] Concede ao parceiro acesso à API de varredura de segredos do GitHub para que o provedor de serviços possa escanear repositórios do GitHub em busca de segredos que correspondam ao formato deles.  
> O GitHub é sempre responsável por executar a varredura de segredos, e não o parceiro.
- [ ] O GitHub tem a capacidade de revogar automaticamente segredos vazados e notificar o provedor de serviços que eles foram invalidados pelo GitHub.  
> O GitHub não participa da revogação de segredos vazados; o provedor de serviços tem a opção de fazer isso.
