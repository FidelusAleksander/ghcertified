---
question: "¿Cuáles son los pasos para crear un grupo de runners autohospedados para una organización en GitHub?"
documentation: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups"
---

- [x] Navegar a la configuración de la organización, seleccionar Actions, hacer clic en Runner groups, crear un nuevo grupo y asignar una política de acceso al repositorio.
- [ ] En el repositorio `.github`, modificar el archivo `.gitconfig` para especificar grupos de runners y políticas de acceso asociadas.
- [ ] Contactar al soporte de GitHub para solicitar la creación de un grupo de runners y proporcionar una lista de repositorios para la configuración del acceso.
- [ ] Usar un workflow de GitHub Actions para generar automáticamente grupos de runners basados en la actividad y los patrones de uso de los repositorios.
