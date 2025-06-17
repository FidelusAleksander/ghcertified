---
question: "Um fluxo de trabalho foi executado inicialmente no `commit A` e falhou. Você corrigiu o fluxo de trabalho com o `commit B` subsequente. Quando você executar novamente esse fluxo de trabalho, ele será executado com o código de qual commit?"
title: "Pergunta 055"
---

> https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs#about-re-running-workflows-and-jobs
1. [x] Ele será executado com o código do `commit A`
1. [ ] Ele será executado com o código do `commit B`
> Reexecutar um fluxo de trabalho utiliza o mesmo SHA do commit e a referência Git do evento original que acionou a execução do fluxo de trabalho.
1. [ ] Você não pode reexecutar fluxos de trabalho no GitHub Actions. Você precisa acionar um novo fluxo de trabalho, que será executado com as alterações mais recentes
