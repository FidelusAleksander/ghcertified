---
question: "Se activa un flujo de trabajo cuando se vuelven a abrir las pull requests. ¿Por qué podría ser esta la causa?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request"
---

- [x] `types: [reopened]` está definido bajo el evento `pull_request`. 
- [ ] Las reglas de protección de ramas estaban configuradas incorrectamente.
> Las reglas de protección de ramas no determinan cuándo se activa un flujo de trabajo.
- [x] No se definen tipos de actividad bajo el evento `pull_request`.
> Si no se definen tipos de actividad explícitamente, el evento `pull_request` se activará en PRs abiertas (`opened`), PRs cuya rama de origen se ha actualizado desde que se abrió la PR (`synchronize`), o PRs reabiertas (`reopened`).
- [ ] `on: schedule` fue configurado con `pull_requests: [reopened]`
> `schedule` se utiliza para activar flujos de trabajo en determinados momentos, no para actividades basadas en el repositorio.
