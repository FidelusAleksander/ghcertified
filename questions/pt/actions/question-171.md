---
question: "Por que você reexecutaria um workflow em vez de gerar uma nova execução de workflow?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs"
---

- [x] Reexecutar um workflow permite reexecutar jobs de workflow que falharam, diferentemente de gerar uma nova execução, que executará todos os jobs.
- [x] Reexecutar um workflow significa que os jobs de workflow serão executados no mesmo contexto do commit SHA e da referência do git do evento original que acionou o job.
- [x] Reexecutar um workflow permite habilitar logs de depuração adicionais para os job(s) selecionados.
- [ ] Reexecutar um workflow garante que `GITHUB_TRIGGERING_ACTOR` permaneça inalterado, tornando claro quem originalmente acionou o workflow.
> De acordo com a [documentação](https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context), o valor de `GITHUB_TRIGGERING_ACTOR` é atualizado com base em quem reexecutou o workflow.  
- [ ] Reexecutar um workflow garante que `GITHUB_ACTOR` seja atualizado, tornando claro quem reexecutou o workflow.
> De acordo com a [documentação](https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context), o valor de `GITHUB_ACTOR` corresponde a quem originalmente acionou o workflow; ele não muda ao reexecutar um workflow.
- [ ] Reexecutar um workflow sobrescreve as execuções de jobs com erro, tornando as execuções mais simples.
> Jobs com erro permanecem quando um job é reexecutado. Usando a interface gráfica, é fácil alternar entre a execução original do job e as reexecuções subsequentes.  
