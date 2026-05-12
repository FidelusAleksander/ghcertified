---
question: "¿Qué afirmación es verdadera respecto a `github.ref` cuando el workflow es activado por un evento push?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

- [x] En eventos push, `github.ref` es la referencia completamente formada de la rama o etiqueta que se ha empujado. 
> Para más información sobre referencias, consulta la [documentación oficial de Git](https://git-scm.com/book/en/Git-Internals-Git-References).
- [ ] En eventos push, `github.ref` es el mensaje del commit que activó el workflow.
> `github.event.head_commit.message` es lo que contiene el último mensaje del commit. Consulta la [documentación](https://docs.github.com/en/webhooks/webhook-events-and-payloads#push) para más detalles.
- [ ] En eventos push, `github.ref` es el SHA del commit que activó el workflow.
> `github.sha` es lo que apunta al SHA del commit. Consulta la [documentación de eventos](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows) y el enlace del documento en esta pregunta para más detalles.
- [ ] En eventos push, `github.ref` es la descripción del commit que activó el workflow.
- [ ] En eventos push, `github.ref` es el tipo de referencia completamente formada que activó la ejecución del workflow. El valor será `branch`, `tag` o `null` (si la referencia no estaba completamente formada).
> `github.ref_type` es el valor del tipo de referencia que activó la ejecución del workflow. Solo puede contener `branch` o `tag`; `null` no es un valor válido. Consulta el enlace del documento en esta pregunta para más detalles.
