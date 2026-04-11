---
title: "Pytanie 016"
question: "Jakie jest zachowanie, gdy nowy wzorzec tajemnicy zostanie dodany lub zaktualizowany w programie partnerskim skanowania tajemnic GitHub?"
---


> https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning#accessing-secret-scanning-alerts
1. [x] GitHub przeprowadzi skanowanie całej historycznej zawartości kodu w publicznych repozytoriach, w których włączono skanowanie tajemnic
1. [ ] GitHub będzie skanować nowy wzorzec tylko w nowo wciśniętych commitach w repozytoriach z włączonym skanowaniem tajemnic. Jeśli tajemnica tego wzorca była już obecna w repozytorium, nie zostanie wykryta.
1. [ ] Partner GitHub musi poradzić sobie z historycznie wyciekłymi tajemnicami, a GitHub będzie skanować tylko nowe commity pod kątem nowego wzorca.
1. [ ] GitHub utworzy zgłoszenie we wszystkich repozytoriach z włączonym skanowaniem tajemnic, aby utrzymujący mogli sprawdzić repozytorium pod kątem tajemnic dopasowanych do nowego wzorca.
