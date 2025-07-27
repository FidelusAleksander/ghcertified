---
question: "Un flujo de trabajo se ejecutó inicialmente en el `commit A` y falló. Solucionaste el flujo de trabajo con el siguiente `commit B`. Cuando vuelvas a ejecutar ese flujo de trabajo, ¿se ejecutará con el código de qué commit?"
title: "Pregunta 055"
---

> https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs#about-re-running-workflows-and-jobs
1. [x] Se ejecutará con el código de `commit A`
1. [ ] Se ejecutará con el código de `commit B`
> Volver a ejecutar un flujo de trabajo utiliza el mismo SHA del commit y la referencia Git del evento original que desencadenó la ejecución del flujo de trabajo.
1. [ ] No puedes volver a ejecutar flujos de trabajo en GitHub Actions. Tienes que desencadenar un nuevo flujo de trabajo que se ejecutará con los últimos cambios
1. [ ] Desencadenará dos flujos de trabajo, uno con el código de `commit A` y otro con el código de `commit B`
