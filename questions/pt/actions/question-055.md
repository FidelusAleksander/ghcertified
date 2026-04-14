---
question: "Um fluxo de trabalho foi inicialmente executado no `commit A` e falhou. Você corrigiu o fluxo de trabalho com o subsequente `commit B`. Quando você executar novamente esse fluxo de trabalho, ele será executado com o código de qual commit?"
documentation: "https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs#about-re-running-workflows-and-jobs"
---

- [x] Ele será executado com o código do `commit A`
- [ ] Ele será executado com o código do `commit B`
> Reexecutar um fluxo de trabalho usa o mesmo SHA de commit e referência do Git do evento original que disparou a execução do fluxo de trabalho.
- [ ] Não é possível reexecutar fluxos de trabalho no GitHub Actions. Você deve disparar um novo fluxo de trabalho, que será executado com as alterações mais recentes
- [ ] Ele disparará dois fluxos de trabalho, um com o código do `commit A` e outro com o código do `commit B`
