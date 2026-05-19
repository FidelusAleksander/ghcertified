---
question: "¿Cuándo crearías una acción de contenedor Docker para compartir en el marketplace de GitHub Actions?"
documentation: "https://docs.github.com/en/actions/concepts/workflows-and-actions/custom-actions#docker-container-actions"
---

- [x] Las acciones de contenedor Docker garantizan un entorno de ejecución consistente y dependencias específicas sin que los usuarios necesiten manejar estos aspectos por sí mismos
- [ ] Las acciones de contenedor Docker son una acción lista para usar y de bajo costo
> Las acciones de contenedor Docker no se consideran de bajo costo, ya que requieren el uso de una imagen (preconstruida o especificada por el `Dockerfile`), un script de punto de entrada y posiblemente lógica previa y posterior al punto de entrada.
- [ ] Las acciones de contenedor Docker tienen una velocidad de inicio rápida en los runners de Windows y macOS
> Los contenedores Docker solo pueden ejecutarse en runners de sistema operativo Linux (`ubuntu-latest` para runners alojados por GitHub). También tardan más en comparación con las acciones en JavaScript y compuestas.
- [ ] Las acciones de contenedor Docker son un conjunto de pasos dentro de otros flujos de trabajo que se ejecutan dentro del contexto del flujo de trabajo/acción que los llama
> Un "paquete reutilizable de pasos" describe una acción compuesta, no una acción de contenedor Docker.
- [ ] Las acciones de contenedor Docker te permiten usar Docker sin requerir un archivo `action.yml`
> Todas las acciones, independientemente del tipo, deben usar un archivo `action.yml`.
