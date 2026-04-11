---
title: "Pergunta 012"
question: "Qual destas afirmativas é verdadeira sobre o programa de parceria do GitHub secret scanning? (Escolha três.)"
---

> https://docs.github.com/en/code-security/secret-scanning/secret-scanning-partner-program
- [x] É um programa onde os provedores de serviço podem fornecer ao GitHub os padrões regex dos segredos que eles emitem para que o GitHub secret scanning possa reconhecê-los.
- [x] Quando o GitHub identifica um segredo de um provedor de serviço parceiro, ele notifica o provedor de serviço sobre o segredo vazado.
- [x] O parceiro pode tomar medidas ao receber a notificação do GitHub sobre um segredo vazado, como revogar o segredo e informar o proprietário do segredo comprometido.
- [ ] Concede ao parceiro acesso à API do GitHub secret scanning para que o provedor de serviço possa examinar os repositórios do GitHub em busca de segredos que correspondam ao seu formato.
> O GitHub é sempre responsável por executar o secret scanning, não o parceiro.
- [ ] O GitHub tem a capacidade de revogar automaticamente segredos vazados e notificar o provedor de serviço que eles foram invalidados pelo GitHub.
> O GitHub não participa da revogação de segredos vazados; o provedor de serviço tem a opção de fazê-lo.
