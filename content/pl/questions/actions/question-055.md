---
question: "Workflow został początkowo uruchomiony na `commit A` i zakończył się niepowodzeniem. Naprawiłeś workflow w kolejnym `commit B`. Gdy ponownie uruchomisz ten workflow, z którym kodem commit będzie działał?"
title: "Pytanie 055"
---

> https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs#about-re-running-workflows-and-jobs
1. [x] Będzie działał z kodem z `commit A`
1. [ ] Będzie działał z kodem z `commit B`
> Ponowne uruchomienie workflow używa tego samego identyfikatora SHA commitu i referencji Git, co w oryginalnym zdarzeniu, które wywołało uruchomienie workflow.
1. [ ] Nie można ponownie uruchamiać workflow w GitHub Actions. Trzeba wywołać nowy workflow, który będzie działał z najnowszymi zmianami
1. [ ] Uruchomi dwa workflowy, jeden z kodem z `commit A` i jeden z kodem z `commit B`
