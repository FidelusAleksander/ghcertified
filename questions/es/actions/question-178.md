---
question: "Debes asegurarte de que tu entorno `prod` requiera aprobaciones manuales antes de que los despliegues puedan proceder. De las siguientes opciones, ¿cuáles son ciertas respecto a cómo se configura esto?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/deployments-and-environments#required-reviewers"
---

- [x] Si enumeras revisores obligatorios, solo uno de ellos necesita aprobar para continuar con el despliegue.
- [x] Puedes evitar auto-revisiones en caso de que la persona que quiere desplegar también sea un revisor obligatorio.
- [ ] Si enumeras revisores obligatorios, todos ellos necesitan aprobar para continuar con el despliegue.
> Sorprendentemente, solo 1 de los revisores obligatorios necesita aprobar el trabajo del flujo de trabajo. Para hacer cumplir este comportamiento, necesitarías crear una regla de protección de despliegue personalizada mediante una aplicación de GitHub.
- [ ] No puedes evitar auto-revisiones, pero puedes configurar alertas para ver quién activó el despliegue.
- [ ] Solo usuarios individuales pueden ser asignados como revisores obligatorios, no equipos.
> Tanto usuarios individuales como equipos pueden ser asignados como revisores obligatorios.
- [ ] Los revisores obligatorios necesitan al menos acceso de `write` al repositorio para aprobar.
> Los revisores obligatorios necesitan al menos acceso de `read`.
