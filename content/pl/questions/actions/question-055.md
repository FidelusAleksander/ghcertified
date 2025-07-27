---
question: "Przepływ pracy został początkowo uruchomiony na `commit A` i zakończył się niepowodzeniem. Naprawiłeś przepływ pracy w kolejnej `commit B`. Kiedy ponownie uruchomisz ten przepływ pracy, zostanie on uruchomiony z kodem z którego commitu?"
title: "Question 055"
---

> https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs#about-re-running-workflows-and-jobs
1. [x] Zostanie uruchomiony z kodem z `commit A`
1. [ ] Zostanie uruchomiony z kodem z `commit B`
> Ponowne uruchomienie przepływu pracy używa tego samego identyfikatora commit SHA i odwołania Git, które wyzwoliły oryginalny przebieg przepływu pracy.
1. [ ] Nie można ponownie uruchomić przepływów pracy w GitHub Actions. Musisz uruchomić nowy przepływ pracy, który zostanie uruchomiony z najnowszymi zmianami
1. [ ] Wyzwoli dwa przepływy pracy, jeden z kodem z `commit A`, a drugi z kodem z `commit B`
