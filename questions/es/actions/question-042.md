---
question: "¿Cuándo deberías usar `artifacts`?"
documentation: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#about-workflow-artifacts"
---

- [x] Usa `artifacts` para guardar archivos producidos por un trabajo para verlos después de que finalice una ejecución del workflow, como resultados de pruebas o registros de compilación.
- [x] Usa `artifacts` para guardar binarios producidos por un trabajo de compilación y utilizarlos en un trabajo de despliegue posterior para implementar una nueva versión de una aplicación.
- [ ] Usa `artifacts` para reutilizar archivos que no cambian con frecuencia entre trabajos o ejecuciones de workflows, como dependencias de compilación de un sistema de gestión de paquetes.
> Se debe usar caching para eso https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching
- [ ] Usa `artifacts` para crear nuevas versiones de tu aplicación junto con notas de la versión, menciones y/o colaboradores.
> Ese es un caso de uso para releases, no `artifacts`.
