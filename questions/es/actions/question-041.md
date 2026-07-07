---
question: "¿Cuándo deberías usar `caching`?"
documentation: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching"
---

- [x] Cuando quieres reutilizar archivos que no cambian con frecuencia entre trabajos o ejecuciones de flujos de trabajo, como dependencias de compilación de un sistema de gestión de paquetes.
- [ ] Cuando quieres reutilizar archivos que sí cambian con frecuencia entre trabajos o ejecuciones de flujos de trabajo, como dependencias de compilación de un sistema de gestión de paquetes.
- [ ] Cuando quieres guardar archivos producidos por un trabajo para verlos después de que haya finalizado una ejecución del flujo de trabajo, como binarios generados o registros de compilación.
> Deberían usarse artefactos para eso https://docs.github.com/en/actions/tutorials/store-and-share-data
- [ ] Cuando quieres guardar binarios producidos por un trabajo de compilación para usarlos en un trabajo de despliegue posterior para implementar una nueva versión de una aplicación.
> Deberían usarse artefactos para eso https://docs.github.com/en/actions/tutorials/store-and-share-data
