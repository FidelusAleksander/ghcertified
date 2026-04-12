---
question: "Un trabajo llamado `job2` está utilizando artefactos creados en `job1`. Por lo tanto, es importante asegurarse de que `job1` termine antes de que `job2` comience a buscar los artefactos. ¿Cómo deberías crear esa dependencia?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds"
---

- [x] crear esta dependencia utilizando la palabra clave `needs` en `job2`
- [ ] esta dependencia se crea implícitamente al usar `actions/download-artifact` para descargar artefactos desde `job1`
- [ ] crear esta dependencia definiendo `job2` después de `job1` en la definición del archivo `.yaml` del flujo de trabajo
- [ ] crear esta dependencia utilizando la palabra clave `concurrency` en `job2`
