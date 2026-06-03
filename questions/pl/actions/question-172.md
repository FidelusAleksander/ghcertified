---
question: "Organizacja Ingrid ma podzbiór własnych hostowanych runnerów Linux, które powinny być używane tylko przez określone repozytoria. Jaki jest najlepszy sposób, aby wymusić takie zachowanie?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-runners/self-hosted-runners/manage-access#changing-which-repositories-can-access-a-runner-group"
---

- [x] Utworzyć nową grupę runnerów, dodać runnery do grupy, a następnie w ustawieniach grupy wybrać, które repozytoria mają mieć dostęp do grupy.
- [ ] Utworzyć nową etykietę runnera, dodać etykiety do runnerów, a następnie w ustawieniach etykiet wybrać, które repozytoria mają mieć dostęp do etykiety.
- [ ] Utworzyć nową etykietę runnera, dodać etykiety do runnerów, a następnie upewnić się, że wszystkie workflowy w repozytoriach mają tę etykietę uwzględnioną w polu `runs-on`.
> Etykiety nie ograniczają dostępu do runnerów. Samo dodanie etykiety nie wystarczy; dodanie etykiet do `runs-on` może potencjalnie wpłynąć na to, że odpowiedni workflow będzie mógł znaleźć runnera do wykonania zadania.
- [ ] Utworzyć nową grupę runnerów, wybrać „Linux” jako system operacyjny i użyć wzorców globalnych, aby zdefiniować, które repozytoria mają mieć dostęp w ustawieniach grupy.  
