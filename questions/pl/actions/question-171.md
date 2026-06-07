---
question: "Dlaczego warto ponownie uruchomić workflow zamiast wygenerować nowe uruchomienie workflow?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs"
---

- [x] Ponowne uruchomienie workflow pozwala ponownie uruchomić nieudane zadania workflow, w przeciwieństwie do wygenerowania nowego uruchomienia, które uruchomi wszystkie zadania.
- [x] Ponowne uruchomienie workflow oznacza, że zadania workflow są uruchamiane w tym samym kontekście commit SHA i git ref oryginalnego zdarzenia, które uruchomiło zadanie.
- [x] Ponowne uruchomienie workflow pozwala na włączenie dodatkowego logowania debugowego dla wybranych zadań.
- [ ] Ponowne uruchomienie workflow gwarantuje, że `GITHUB_TRIGGERING_ACTOR` pozostaje niezmieniony, dzięki czemu wiadomo, kto pierwotnie uruchomił workflow.
> Zgodnie z [dokumentacją](https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context), wartość `GITHUB_TRIGGERING_ACTOR` jest aktualizowana w zależności od tego, kto ponownie uruchomił workflow.  
- [ ] Ponowne uruchomienie workflow gwarantuje, że `GITHUB_ACTOR` zostaje zaktualizowany, dzięki czemu wiadomo, kto ponownie uruchomił workflow.
> Zgodnie z [dokumentacją](https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context), wartość `GITHUB_ACTOR` to osoba, która pierwotnie uruchomiła workflow; nie zmienia się ona podczas ponownego uruchomienia workflow.
- [ ] Ponowne uruchomienie workflow nadpisuje nieudane uruchomienia zadań, sprawiając, że uruchomienia wydają się bardziej przejrzyste.
> Nieudane uruchomienia zadań pozostają podczas ponownego uruchamiania zadania. Korzystając z interfejsu, łatwo jest przełączać się między oryginalnym uruchomieniem zadania a kolejnymi ponownymi uruchomieniami.  
