---
title: "Pregunta 074"
question: "¿Cuáles de las siguientes afirmaciones sobre la activación de la configuración predeterminada de análisis de CodeQL son verdaderas? (Elige tres.)"
---


> https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning
- [x] Puedes habilitar la configuración predeterminada para todos los repositorios elegibles en una organización de una sola vez en la configuración de la organización.
- [x] GitHub Actions debe estar habilitado como requisito previo.
- [x] Puedes habilitar la configuración predeterminada en cualquier repositorio, independientemente del contenido del repositorio.
- [ ] Solo puedes habilitar la configuración predeterminada en repositorios que contengan al menos un lenguaje compatible con CodeQL.
> Si habilitas la configuración predeterminada en un repositorio que no incluye ningún lenguaje compatible con CodeQL, la configuración predeterminada no realizará ningún análisis.
- [ ] La configuración predeterminada analizará el repositorio según un cronograma que puedes configurar. Para el análisis basado en eventos, necesitas configurar un flujo de trabajo de GitHub Actions.
> La configuración predeterminada incluye análisis programados y análisis de pull request / push en las ramas predeterminadas y protegidas.
- [ ] Solo puedes usar el conjunto de consultas predeterminado con la configuración predeterminada de análisis de CodeQL.
