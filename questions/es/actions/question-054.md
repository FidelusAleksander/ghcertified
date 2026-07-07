---
question: "¿Al crear GitHub Actions personalizadas, en qué archivo se debe definir toda la `metadata` de la acción?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/metadata-syntax"
---

Ejemplos de metadata: nombre, descripción, salidas o entradas requeridas
- [x] En el archivo `action.yml` o `action.yaml` en el repositorio de la acción
- [ ] En el archivo `README` del repositorio  
> Aunque es una buena práctica hacerlo, no es un requisito para que la acción funcione
- [ ] Se edita en la interfaz de usuario de GitHub Marketplace al publicarla para compartir
- [ ] En el archivo `action.yml` o `action.yaml` en el repositorio de la acción, pero no es obligatorio si la acción no está destinada a ser compartida y utilizada por el público  
> Todas las acciones requieren el archivo de metadata.

