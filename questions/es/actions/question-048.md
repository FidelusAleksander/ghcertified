---
question: "Un trabajo llamado `job2` está utilizando artefactos creados en `job1`. Por lo tanto, es importante asegurarse de que `job1` termine antes de que `job2` comience a buscar los artefactos. ¿Cómo debes crear esa dependencia?"
title: "Pregunta 048"
---


> https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds

1. [x] crear esta dependencia usando la palabra clave `needs` en `job2`
1. [ ] esta dependencia se crea implícitamente al usar `actions/download-artifact` para descargar el artefacto desde `job1`
1. [ ] crear esta dependencia definiendo `job2` después de `job1` en la definición de `.yaml` del flujo de trabajo
1. [ ] crear esta dependencia usando la palabra clave `concurrency` en `job2`
