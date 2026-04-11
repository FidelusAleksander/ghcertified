---
question: "¿Cuándo deberías usar `caching`?"
title: "Pregunta 041"
---



> https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching

1. [x] Cuando deseas reutilizar archivos que no cambian con frecuencia entre trabajos o ejecuciones de flujos de trabajo, como las dependencias de compilación de un sistema de gestión de paquetes.
1. [ ] Cuando deseas reutilizar archivos que cambian con frecuencia entre trabajos o ejecuciones de flujos de trabajo, como las dependencias de compilación de un sistema de gestión de paquetes.
1. [ ] Cuando deseas guardar archivos producidos por un trabajo para verlos después de que una ejecución del flujo de trabajo haya terminado, como binarios construidos o registros de compilación.
> Para eso se deben usar Artifacts https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
1. [ ] Cuando deseas guardar binarios producidos por un trabajo de compilación para usarlos en un trabajo de implementación posterior con el fin de desplegar una nueva versión de una aplicación.
> Para eso se deben usar Artifacts https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
