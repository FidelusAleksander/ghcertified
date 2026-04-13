---
question: "¿Cuáles de las siguientes afirmaciones sobre la configuración predeterminada de escaneo de CodeQL son verdaderas?"
documentation: "https://docs.github.com/en/code-security/code-scanning/enabling-code-scanning/configuring-default-setup-for-code-scanning"
---

- [x] Puede habilitar la configuración predeterminada para todos los repositorios elegibles de una organización a la vez en la configuración de la organización
- [x] GitHub Actions necesita estar habilitado como prerrequisito
- [x] Puede habilitar la configuración predeterminada en cualquier repositorio, sin importar el contenido del repositorio
- [ ] Solo puede habilitar la configuración predeterminada en repositorios que contengan al menos un lenguaje compatible con CodeQL
> Si habilita la configuración predeterminada en un repositorio que no incluye ningún lenguaje compatible con CodeQL, la configuración predeterminada no realizará ningún escaneo
- [ ] La configuración predeterminada escaneará el repositorio en un horario que puede configurar. Para el escaneo basado en eventos, necesita configurar un flujo de trabajo de GitHub Actions
> La configuración predeterminada incluye escaneo programado y escaneo de solicitudes de extracción / push en las ramas predeterminadas y protegidas
- [ ] Solo puede usar el conjunto de consultas predeterminadas con la configuración predeterminada de escaneo de CodeQL
