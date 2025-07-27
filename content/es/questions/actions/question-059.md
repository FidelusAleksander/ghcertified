---
question: "Tu repositorio público de código abierto contiene un workflow con un activador de evento `pull_request`. ¿Cómo puedes requerir aprobaciones para la ejecución de workflows activados desde forks de tu repositorio?"
title: "Pregunta 059"
---

> https://docs.github.com/en/actions/managing-workflow-runs/approving-workflow-runs-from-public-forks#about-workflow-runs-from-public-forks
1. [x] Configurar aprobaciones obligatorias para ejecuciones de forks en el repositorio
1. [ ] Configurar reglas de protección de despliegue para el repositorio
> Las reglas de protección de despliegue se usan para proteger entornos
1. [ ] Configurar reglas de protección de ramas para el repositorio
1. [ ] El workflow no se activará para forks si se usa el evento `pull_request`. Si deseas hacerlo, deberías usar el activador de evento `fork_pull_request` con el indicador `require-approval`.
