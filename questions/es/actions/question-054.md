---
question: "¿Al crear GitHub Actions personalizados, en qué archivo se debe definir toda la `metadata` de la acción?"
documentation: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions"
---

Ejemplos de metadata: nombre, descripción, salidas o entradas requeridas
- [x] En el archivo `action.yml` o `action.yaml` en el repositorio de la acción
- [ ] En el archivo `README` del repositorio
> Aunque es una buena práctica hacerlo, no es un requisito para que la acción funcione
- [ ] Se edita en la interfaz de GitHub Marketplace cuando se publica para compartir
- [ ] En el archivo `action.yml` o `action.yaml` en el repositorio de la acción, pero no es necesario si la acción no está destinada para ser compartida y utilizada por el público
> Todas las acciones requieren el archivo de metadata.
