---
question: "Um workflow foi inicialmente executado no `commit A` e falhou. Você corrigiu o workflow no `commit B`. Quando você reexecutar esse workflow, ele será executado com o código de qual commit?"
title: "Pergunta 055"
---

> https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs#about-re-running-workflows-and-jobs
1. [x] Ele será executado com o código do `commit A`
1. [ ] Ele será executado com o código do `commit B`
> Reexecutar um workflow usa o mesmo SHA do commit e a mesma referência do Git do evento original que acionou a execução do workflow.
1. [ ] Você não pode reexecutar workflows no GitHub Actions. Você precisa acionar um novo workflow que será executado com as alterações mais recentes
1. [ ] Ele acionará dois workflows, um com o código do `commit A` e outro com o código do `commit B`

