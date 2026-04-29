---
question: "Dlaczego warto używać SHA commita zamiast tagu do przypinania akcji?"
documentation: "https://docs.github.com/en/actions/reference/security/secure-use#using-third-party-actions"
---

- [x] SHA commitów są bardziej bezpieczne
> SHA commitów są bardziej bezpieczne, ponieważ obecnie są jedynym sposobem na użycie akcji jako niezmiennego wydania.
- [x] SHA commitów są niezmienne, podczas gdy tagi mogą być zmieniane
> [Tagi](https://git-scm.com/book/en/v2/Git-Basics-Tagging) wskazują na określone commity. Ich referencje mogą zostać zmienione, co nie zawsze jest oczywiste. Luki bezpieczeństwa związane z tagami można złagodzić, włączając [niezmienne wydania](https://docs.github.com/en/code-security/concepts/supply-chain-security/immutable-releases), jednak SHA commita zawsze wskazuje na ten sam commit i jest niezmienny.  
> Ponowne uruchomienie workflow używa tego samego SHA commita i Git ref wydarzenia, które pierwotnie zainicjowało uruchomienie workflow.
- [ ] SHA commitów są wygodniejsze w użyciu w porównaniu do tagów
> Chociaż są bardziej bezpieczne, tagi są zazwyczaj łatwiejsze w użyciu.
- [x] SHA commitów gwarantują wskazanie na dokładnie ten sam kod za każdym razem, czego nie gwarantują tagi
- [ ] SHA commitów są trudniejsze do prześledzenia podczas audytu, co utrudnia złośliwym podmiotom ustalenie, w jaki sposób kod akcji wpływa na ogólne procesy.
> SHA commitów zawsze wskazują na ten sam commit. Podczas przypinania akcji do SHA, SHA jest wyraźnie referowany, co umożliwia znalezienie odpowiadającego commita w repozytorium akcji. Czynniki te ułatwiają przeprowadzanie audytów.  
> Tagi mogą zmieniać swoje referencje, co nie zawsze jest oczywiste. Może to prowadzić do mylących sytuacji, gdy tag wskazuje na nowy commit, ponieważ kod odwołujący się do akcji nie wydaje się zmieniony. W scenariuszach audytu będziesz musiał ustalić, na jaki commit wskazywał tag i na co obecnie wskazuje.
