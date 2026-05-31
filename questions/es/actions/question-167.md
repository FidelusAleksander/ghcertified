---
question: "Hilda necesita acceso a un artefacto generado por una ejecución reciente de un workflow, pero el archivo del workflow en sí ha sido eliminado. ¿Podrá recuperar el artefacto?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/remove-workflow-artifacts#artifacts-from-deleted-workflow-runs"
---

- [x] Sí, porque eliminar un workflow no elimina automáticamente sus ejecuciones ni los artefactos generados
> Las ejecuciones de los workflows y los artefactos generados no se eliminan automáticamente cuando se elimina el workflow correspondiente. Es necesario eliminar la ejecución en sí para eliminar los artefactos.
- [ ] No, porque eliminar un workflow elimina automáticamente sus ejecuciones y los artefactos generados
- [ ] Sí, pero solo si tiene privilegios de administrador
- [ ] No, porque aunque las ejecuciones del workflow permanecen después de que se elimina un workflow, los artefactos generados se corrompen
