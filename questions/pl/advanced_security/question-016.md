---
question: "Jakie jest zachowanie po dodaniu lub zaktualizowaniu nowego wzorca sekretów w programie partnerskim skanowania sekretów GitHub?"
documentation: "https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#accessing-secret-scanning-alerts"
---

- [x] GitHub przeprowadzi skanowanie całej historii kodu w publicznych repozytoriach z włączonym skanowaniem sekretów
- [ ] GitHub będzie skanować nowy wzorzec tylko w nowo wypchniętych commitach w repozytoriach z włączonym skanowaniem sekretów. Jeśli sekret o tym wzorcu był już obecny w repozytorium, nie zostanie wykryty.
- [ ] Partner GitHub musi zająć się historycznie ujawnionymi sekretami, a GitHub będzie skanować tylko nowe commity pod kątem nowego wzorca
- [ ] GitHub utworzy issue we wszystkich repozytoriach z włączonym skanowaniem sekretów, aby maintainerzy mogli sprawdzić repozytorium pod kątem sekretów pasujących do nowego wzorca
