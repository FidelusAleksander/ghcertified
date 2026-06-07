---
question: "¿Por qué volverías a ejecutar un workflow en lugar de generar una nueva ejecución de workflow?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/re-run-workflows-and-jobs"
---

- [x] Volver a ejecutar un workflow te permite volver a ejecutar los jobs fallidos del workflow, a diferencia de generar una nueva ejecución que ejecutará todos los jobs.
- [x] Volver a ejecutar un workflow significa que los jobs del workflow se ejecutan en el mismo contexto del commit SHA y la referencia git del evento original que activó el job.
- [x] Volver a ejecutar un workflow te permite habilitar registros de depuración adicionales para los job(s) seleccionados.
- [ ] Volver a ejecutar un workflow asegura que `GITHUB_TRIGGERING_ACTOR` permanezca sin cambios, por lo que no hay ambigüedad sobre quién activó originalmente el workflow.
> Según la [documentación](https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context), el valor de `GITHUB_TRIGGERING_ACTOR` se actualiza según quién volvió a ejecutar el workflow.  
- [ ] Volver a ejecutar un workflow asegura que `GITHUB_ACTOR` se actualice, por lo que no hay ambigüedad sobre quién volvió a ejecutar el workflow.
> Según la [documentación](https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context), el valor de `GITHUB_ACTOR` corresponde a quien activó originalmente el workflow; no cambia al volver a ejecutarlo.  
- [ ] Volver a ejecutar un workflow sobrescribe las ejecuciones fallidas de los jobs, haciendo que las ejecuciones parezcan más sencillas.
> Las ejecuciones fallidas de los jobs se mantienen cuando se vuelve a ejecutar un job. Usando la interfaz de usuario, es fácil alternar entre la ejecución original del job y las re-ejecuciones posteriores.
