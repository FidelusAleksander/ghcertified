---
question: "Um workflow foi inicialmente executado no `commit A` e falhou. Você corrigiu o workflow com o seguinte `commit B`. Quando você reexecutar esse workflow, ele será executado com o código de qual commit?"
documentation: "https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs#about-re-running-workflows-and-jobs"
---

- [x] Ele será executado com o código do `commit A`
- [ ] Ele será executado com o código do `commit B`
> Reexecutar um workflow usa o mesmo SHA do commit e o Git ref do evento original que acionou a execução do workflow.
- [ ] Você não pode reexecutar workflows no GitHub Actions. Você precisa acionar um novo workflow que será executado com as alterações mais recentes
- [ ] Ele acionará dois workflows, um com o código do `commit A` e outro com o código do `commit B`
