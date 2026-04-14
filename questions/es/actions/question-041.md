---
question: "¿Cuándo deberías usar `caching`?"
documentation: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching"
---

- [x] Cuando quieras reutilizar archivos que no cambian con frecuencia entre trabajos o ejecuciones de flujo de trabajo, como las dependencias de compilación de un sistema de gestión de paquetes.
- [ ] Cuando quieras reutilizar archivos que sí cambian con frecuencia entre trabajos o ejecuciones de flujo de trabajo, como las dependencias de compilación de un sistema de gestión de paquetes.
- [ ] Cuando quieras guardar archivos producidos por un trabajo para verlos después de que haya terminado una ejecución de flujo de trabajo, como binarios compilados o registros de compilación.
> Para eso deberían usarse los artifacts https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
- [ ] Cuando quieras guardar binarios producidos por un trabajo de compilación para usarlos en un trabajo de implementación posterior y desplegar una nueva versión de una aplicación.
> Para eso deberían usarse los artifacts https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts
