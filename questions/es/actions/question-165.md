---
question: "¿Cómo habilita `repository_dispatch` a sistemas externos a GitHub para activar un workflow?"
documentation: "https://docs.github.com/en/rest/repos/repos?apiVersion=2026-03-10#create-a-repository-dispatch-event"
---

- [x] El sistema externo realiza una solicitud POST al API de GitHub para crear un evento de repository dispatch.
- [x] El workflow se activa al crearse un evento de repository dispatch.
> El resultado de "Crear un evento de repository dispatch" es un nuevo evento `repository_dispatch` (webhook), al cual `on.repository_dispatch` escucha.
- [x] La clave del workflow `on.repository_dispatch.types` corresponde al parámetro `event_type` en el payload de la solicitud, restringiendo el workflow para que solo se active en eventos externos relevantes.
> `on.repository_dispatch.types` te permite definir tipos de actividades personalizados. Consulta la [documentación](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#repository_dispatch) para obtener ejemplos de cómo `on.repository_dispatch.types` y `event_type` están relacionados entre sí.
- [ ] El sistema externo realiza una solicitud PUT al API de GitHub para crear un evento de repository dispatch.
> El método HTTP adecuado para "Crear un evento de repository dispatch" es POST.
- [ ] El workflow se activa mediante una solicitud POST al workflow utilizando el siguiente endpoint `/repos/OWNER/REPO/actions/workflows/<WORKFLOW_ID>/dispatches`.
> Este endpoint corresponde a la creación de un evento de workflow dispatch, no de repository dispatch. Además, las solicitudes relacionadas con Actions deben realizarse al API de GitHub; no se pueden realizar llamadas al API directamente al workflow.
- [ ] La clave del workflow `on.repository_dispatch.event_types` corresponde al parámetro `event_type` en el payload de la solicitud, restringiendo el workflow para que solo se active en eventos externos relevantes.
> No existe una clave `on.repository_dispatch.event_types`. Se utiliza `on.repository_dispatch.types`, manteniendo la coherencia con cómo otros eventos utilizan `on.<event_name>.types` para filtrar según la actividad.
