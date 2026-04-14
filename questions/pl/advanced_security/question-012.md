---
question: "Które z poniższych stwierdzeń dotyczą programu partnerskiego GitHub secret scanning?"
documentation: "https://docs.github.com/en/code-security/secret-scanning/secret-scanning-partner-program"
---

- [x] Jest to program, w ramach którego dostawcy usług mogą dostarczyć GitHub wzorce regex dla swoich sekretów, aby GitHub secret scanning mógł je rozpoznawać.
- [x] Gdy GitHub identyfikuje sekret od partnerskiego dostawcy usług, powiadamia dostawcę o wycieku sekretu.
- [x] Partner może podjąć działania po otrzymaniu powiadomienia od GitHub o wycieku sekretu, takie jak cofnięcie sekretu i poinformowanie właściciela o jego kompromitacji.
- [ ] Program przyznaje partnerowi dostęp do API skanowania sekretów GitHub, aby dostawca usług mógł skanować repozytoria GitHub w poszukiwaniu sekretów pasujących do jego formatu.
> GitHub zawsze odpowiada za przeprowadzanie skanowania sekretów, a nie partner.
- [ ] GitHub ma możliwość automatycznego unieważniania wyciekłych sekretów i powiadamiania dostawcy usług, że zostały unieważnione przez GitHub.
> GitHub nie bierze udziału w unieważnianiu wyciekłych sekretów; dostawca usług ma możliwość podjęcia takich działań.
