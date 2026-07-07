---
question: "¿Cuáles de las siguientes afirmaciones sobre habilitar la configuración predeterminada de CodeQL scanning son correctas?"
documentation: "https://docs.github.com/en/code-security/how-tos/find-and-fix-code-vulnerabilities/configure-code-scanning/configure-code-scanning"
---

- [x] Puedes habilitar la configuración predeterminada para todos los repositorios elegibles en una organización a la vez en la configuración de la organización
- [x] GitHub Actions necesita estar habilitado como requisito previo
- [x] Puedes habilitar la configuración predeterminada en cualquier repositorio, independientemente del contenido del repositorio
- [ ] Solo puedes habilitar la configuración predeterminada en repositorios que contengan al menos un lenguaje compatible con CodeQL
> Si habilitas la configuración predeterminada en un repositorio que no incluye ningún lenguaje compatible con CodeQL, la configuración predeterminada no ejecutará ningún análisis
- [ ] La configuración predeterminada analizará el repositorio en un horario que puedes configurar. Para el análisis basado en eventos, necesitas configurar un workflow de GitHub Action
> La configuración predeterminada incluye análisis programados y análisis de pull request/push en las ramas predeterminadas y protegidas
- [ ] Solo puedes usar el conjunto de consultas predeterminado con la configuración predeterminada de CodeQL scanning
