---
question: "Workflow początkowo uruchomiono na `commit A` i zakończył się niepowodzeniem. Poprawiłeś workflow w kolejnym `commit B`. Kiedy ponownie uruchomisz ten workflow, zostanie on uruchomiony z kodem z którego commitu?"
documentation: "https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs#about-re-running-workflows-and-jobs"
---

- [x] Zostanie uruchomiony z kodem z `commit A`
- [ ] Zostanie uruchomiony z kodem z `commit B`
> Ponowne uruchomienie workflow wykorzystuje ten sam SHA commitu i odwołanie Git do pierwotnego zdarzenia, które wywołało uruchomienie workflow.
- [ ] Nie możesz ponownie uruchomić workflow w GitHub Actions. Musisz uruchomić nowy workflow, który zostanie uruchomiony z najnowszymi zmianami
- [ ] Spowoduje to uruchomienie dwóch workflow, jednego z kodem z `commit A` i drugiego z kodem z `commit B`
