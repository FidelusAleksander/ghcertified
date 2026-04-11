---
title: "Pregunta 079"
question: "¿En qué commit y rama se ejecutan los workflows programados en GitHub Actions?"
---

> https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule

1. [ ] Los workflows programados se ejecutan en el commit específico de la rama modificada más recientemente.
   > incorrecto, tanto el commit específico como la rama modificada más recientemente
1. [ ] Los workflows programados se ejecutan en el commit específico de la rama principal.
   > incorrecto, tanto el commit específico como la rama principal
1. [x] Los workflows programados se ejecutan en el último commit de la rama predeterminada del repository.
1. [ ] Los workflows programados se ejecutan en el último commit de la rama principal.
   > el último commit es correcto, pero la rama principal no lo es
