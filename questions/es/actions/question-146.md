---
question: "¿Qué afirmaciones son ciertas respecto a `github.ref` cuando el workflow es activado por un evento `pull_request`?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

- [x] En solicitudes de extracción que no se han fusionado, `github.ref` se refiere a la referencia completamente formada de la rama/etiqueta de fusión de la solicitud de extracción.
> Para más información sobre referencias, consulta la [documentación oficial de Git](https://git-scm.com/book/en/Git-Internals-Git-References).
- [x] En solicitudes de extracción que han sido fusionadas, `github.ref` se refiere a la referencia completamente formada de la rama en la que se realizó la fusión.
- [ ] En solicitudes de extracción (independientemente del estado de fusión), `github.ref` se refiere al número de la solicitud de extracción.
> Para el evento `pull_request`, el valor de `github.ref` varía dependiendo de si la solicitud de extracción fue fusionada. Este valor siempre será una referencia, no el número de la solicitud de extracción.
- [ ] En solicitudes de extracción (independientemente del estado de fusión), `github.ref` es el SHA del último commit de fusión en la rama `GITHUB_REF`.
> `github.sha` apunta al último SHA en la rama de fusión (ej. `refs/pull/PULL_REQUEST_NUMBER/merge`). Consulta la [documentación de eventos](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request) para más detalles (busca `GITHUB_SHA`).
- [ ] En solicitudes de extracción que no se han fusionado, `github.ref` es la referencia completamente formada del título de la solicitud de extracción.
> Las referencias no se forman a partir de títulos de solicitudes de extracción. `github.event.pull_request.title` es lo que contiene el título de la solicitud de extracción. Consulta la [documentación](https://docs.github.com/en/webhooks/webhook-events-and-payloads#pull_request) para más detalles.
- [ ] En solicitudes de extracción que han sido fusionadas, `github.ref` es el tipo de referencia completamente formada que activó la ejecución del workflow. El valor será `branch`, `tag` o `null` (si la referencia no estaba completamente formada).
> `github.ref_type` es el valor del tipo de referencia que activó la ejecución del workflow. Solo puede contener `branch` o `tag`; `null` no es un valor válido. Consulta el enlace de la documentación en esta pregunta para más detalles.
