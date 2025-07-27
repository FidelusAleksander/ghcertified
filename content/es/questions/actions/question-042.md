---
question: "¿Cuándo deberías usar `artifacts`? (Selecciona dos.)"
title: "Pregunta 042"
---



> https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#about-workflow-artifacts

- [x] Usa artifacts para guardar archivos producidos por un job para verlos después de que haya terminado la ejecución del workflow, como resultados de pruebas o registros de compilación.
- [x] Usa artifacts para guardar binarios producidos por un job de construcción para usarlos en un job de despliegue posterior y desplegar una nueva versión de una aplicación.
- [ ] Usa artifacts para reutilizar archivos que no cambian frecuentemente entre jobs o ejecuciones de workflows, como dependencias de construcción de un sistema de gestión de paquetes.  
> Se debe usar caching para eso https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching
- [ ] Usa artifacts para crear nuevas versiones de tu aplicación junto con notas de lanzamiento, menciones y/o colaboradores.  
> Eso es un caso de uso para releases, no artifacts.
