---
question: "Deseas crear un flujo de trabajo `Post-Deploy` que realice una actividad relacionada con el post-despliegue. ¿Qué evento desencadenante debería usar el flujo de trabajo `Post-Deploy` para que se ejecute automáticamente después de que se complete un flujo de trabajo específico?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_run"
---

- [x] `workflow_run`
> `workflow_run` te permite desencadenar un flujo de trabajo una vez que otros flujos de trabajo específicos se hayan completado (independientemente de si tuvieron éxito o no). Ten en cuenta que, aunque esta pregunta se refiere específicamente a flujos de trabajo completados, `workflow_run` también puede configurarse para que un flujo de trabajo se inicie cuando otros flujos específicos hayan sido desencadenados o comiencen a procesarse en un runner.
- [ ] `workflow_trigger`
> No existe tal evento desencadenante.
- [ ] `workflow_dispatch`
> `workflow_dispatch` se usa para desencadenar un flujo de trabajo manualmente. Consulta [la documentación](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_dispatch) para más información.
- [ ] `workflow_call`
> `workflow_call` se usa para que un flujo de trabajo pueda ser llamado desde otros flujos de trabajo o acciones. Consulta [la documentación](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_call) para más información.
