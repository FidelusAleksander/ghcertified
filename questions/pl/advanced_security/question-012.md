---
question: "Co jest prawdą na temat programu partnerskiego skanowania sekretów GitHub?"
documentation: "https://docs.github.com/en/code-security/tutorials/secret-scanning-partner-program"
---

- [x] Jest to program, w którym dostawcy usług mogą dostarczyć GitHub wzorce regex dla sekretów, które wydają, aby skanowanie sekretów GitHub mogło je rozpoznawać.
- [x] Kiedy GitHub identyfikuje sekret od partnera dostawcy usług, powiadamia dostawcę o wycieku sekretu.
- [x] Partner może podjąć działania po otrzymaniu powiadomienia od GitHub o wycieku sekretu, takie jak unieważnienie sekretu i poinformowanie właściciela o skompromitowanym sekrecie.
- [ ] Program daje partnerowi dostęp do API skanowania sekretów GitHub, aby dostawca usług mógł skanować repozytoria GitHub w poszukiwaniu sekretów, które pasują do ich formatu.
> GitHub zawsze jest odpowiedzialny za przeprowadzanie skanowania sekretów, a nie partner.
- [ ] GitHub ma możliwość automatycznego unieważniania wyciekających sekretów i powiadamiania dostawcy usług o ich unieważnieniu przez GitHub.
> GitHub nie uczestniczy w unieważnianiu wyciekających sekretów; dostawca usług ma możliwość podjęcia takich działań.
