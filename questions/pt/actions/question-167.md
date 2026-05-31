---
question: "Hilda precisa acessar um artefato gerado por uma execução recente de workflow, mas o arquivo do workflow foi excluído desde então. Ela ainda conseguirá recuperar o artefato?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/remove-workflow-artifacts#artifacts-from-deleted-workflow-runs"
---

- [x] Sim, porque excluir um workflow não exclui automaticamente suas execuções e artefatos gerados
> As execuções de workflow e seus artefatos gerados não são excluídos automaticamente quando o workflow correspondente é excluído. É necessário excluir a própria execução para remover os artefatos.
- [ ] Não, porque excluir um workflow automaticamente exclui suas execuções e artefatos gerados
- [ ] Sim, mas somente se ela tiver privilégios de administrador
- [ ] Não, porque embora as execuções de workflow permaneçam após a exclusão de um workflow, os artefatos gerados ficam corrompidos
