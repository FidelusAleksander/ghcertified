---
question: "Un flujo de trabajo reutilizable llamado `build` crea artefactos de archivos zip. ¿Cómo pasas la ubicación del archivo zip al flujo de trabajo que llama al flujo de trabajo `build`? (Selecciona tres.)"
title: "Pregunta 026"
---

> https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow

- [x] Defines una salida a nivel de flujo de trabajo en el flujo de trabajo `build`
- [x] Defines una salida a nivel de trabajo en el flujo de trabajo `build`
- [x] En el flujo de trabajo `build` escribes la salida en `$GITHUB_OUTPUT` en uno de los pasos
- [ ] Todas las salidas se pasan automáticamente a los flujos de trabajo que llaman
