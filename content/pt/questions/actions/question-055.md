---
question: "Um fluxo de trabalho foi inicialmente executado no `commit A` e falhou. Você corrigiu o fluxo de trabalho com o subsequente `commit B`. Quando você reexecutar esse fluxo de trabalho, ele será executado com o código de qual commit?"
title: "Pergunta 055"
---

> https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs#about-re-running-workflows-and-jobs
1. [x] Ele será executado com o código do `commit A`
1. [ ] Ele será executado com o código do `commit B`
> Reexecutar um fluxo de trabalho usa o mesmo SHA do commit e ref Git do evento original que acionou a execução do fluxo de trabalho.
1. [ ] Você não pode reexecutar fluxos de trabalho no GitHub Actions. Você deve acionar um novo fluxo de trabalho que será executado com as alterações mais recentes
1. [ ] Ele acionará dois fluxos de trabalho, um com o código do `commit A` e outro com o código do `commit B`
