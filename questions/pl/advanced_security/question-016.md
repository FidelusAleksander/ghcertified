---
question: "Co się dzieje, gdy nowy wzorzec dla sekretów zostanie dodany lub zaktualizowany w programie partnerskim GitHub secret scanning?"
documentation: "https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning#accessing-secret-scanning-alerts"
---

- [x] GitHub przeprowadzi skanowanie całej historycznej zawartości kodu w publicznych repozytoriach z włączonym secret scanning
- [ ] GitHub będzie skanować nowy wzorzec tylko w nowo wypchniętych commitach w repozytoriach z włączonym secret scanning. Jeśli sekret pasujący do tego wzorca już znajdował się w repozytorium, nie zostanie wykryty.
- [ ] Partner GitHub musi poradzić sobie z historycznie wyciekłymi sekretami, a GitHub będzie skanować jedynie nowe commity pod kątem nowego wzorca
- [ ] GitHub utworzy issue we wszystkich repozytoriach z włączonym secret scanning, aby utrzymujący repozytorium mogli sprawdzić, czy znajdują się w nim sekrety pasujące do nowego wzorca
