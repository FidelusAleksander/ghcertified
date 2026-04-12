---
question: "Un flujo de trabajo se ejecutó inicialmente en el `commit A` y falló. Solucionaste el flujo de trabajo con el siguiente `commit B`. Cuando vuelves a ejecutar ese flujo de trabajo, ¿se ejecutará con el código de qué commit?"
documentation: "https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs#about-re-running-workflows-and-jobs"
---

- [x] Se ejecutará con el código del `commit A`
- [ ] Se ejecutará con el código del `commit B`
> Volver a ejecutar un flujo de trabajo utiliza el mismo SHA de commit y la referencia Git del evento original que activó la ejecución del flujo de trabajo.
- [ ] No puedes volver a ejecutar flujos de trabajo en GitHub Actions. Tienes que activar un nuevo flujo de trabajo que se ejecutará con los últimos cambios.
- [ ] Activará dos flujos de trabajo, uno con el código del `commit A` y otro con el código del `commit B`.
