---
question: "¿Cuál de las siguientes afirmaciones son verdaderas con respecto a los bloques de `outputs` a nivel de flujo de trabajo vs. a nivel de trabajo?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#example-defining-outputs-for-a-job"
---

- [ ] Los bloques de `outputs` a nivel de trabajo solo deben utilizarse en flujos de trabajo de llamada, no en flujos de trabajo reutilizables.
> Los flujos de trabajo reutilizables pueden tener bloques de `outputs` tanto a nivel de trabajo como a nivel de flujo de trabajo.
- [x] Un bloque de `outputs` a nivel de flujo de trabajo solo debe utilizarse en flujos de trabajo reutilizables, no en flujos de trabajo de llamada.
> Un bloque de `outputs` a nivel de flujo de trabajo se refiere a un bloque de `outputs` que es un hijo directo de `workflow_call` en flujos de trabajo reutilizables. En flujos de trabajo no reutilizables, los bloques de `outputs` solo deben estar presentes a nivel de trabajo.
- [x] Un flujo de trabajo reutilizable puede tener bloques de `outputs` tanto a nivel de flujo de trabajo como a nivel de trabajo.
> Si se desea configurar un output en un flujo de trabajo reutilizable y pasar ese mismo output a un flujo de trabajo de llamada, es necesario usar tanto un bloque de `outputs` a nivel de flujo de trabajo como a nivel de trabajo. 
> Consulta la documentación para más detalles https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows#using-outputs-from-a-reusable-workflow
- [ ] Un bloque de `outputs` a nivel de trabajo debe tener la siguiente estructura:
```
outputs:
    <output-name>
        value: ${{ steps.<step-name>.outputs.<output-name> }}
```
> Un bloque de `outputs` a nivel de trabajo utiliza una estructura no anidada de pares `key=value`. Consulta la documentación oficial (https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#example-defining-outputs-for-a-job) para más detalles.
- [x] Un bloque de `outputs` a nivel de flujo de trabajo debe tener la siguiente estructura:
```
outputs:
    <output-name>
        value: ${{ jobs.<job-name>.outputs.<output-name> }}
```
> Un bloque de `outputs` a nivel de flujo de trabajo debe seguir la estructura anterior. Siempre se requiere una clave `value`. También se puede usar una clave `description` opcional (no vista en el ejemplo anterior). 
> Consulta la documentación para más detalles -  https://docs.github.com/en/actions/how-tos/reuse-automations/reuse-workflows#using-outputs-from-a-reusable-workflow
