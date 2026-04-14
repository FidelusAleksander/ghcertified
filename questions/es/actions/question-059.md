---
question: "Su repositorio de código abierto público contiene un flujo de trabajo con un disparador de evento `pull_request`. ¿Cómo puede requerir aprobaciones para ejecuciones de flujos de trabajo desencadenados desde forks de su repositorio?"
documentation: "https://docs.github.com/en/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks#about-workflow-runs-from-public-forks"
---

- [x] Configure aprobaciones requeridas para ejecuciones desde forks en el repositorio
- [ ] Configure reglas de protección de despliegue para el repositorio  
> Las reglas de protección de despliegue se utilizan para proteger los entornos
- [ ] Configure reglas de protección de ramas para el repositorio
- [ ] El flujo de trabajo no se desencadenará desde forks si se utiliza el evento `pull_request`. Si desea hacerlo, debe usar el disparador de evento `fork_pull_request` con el indicador `require-approval`.
