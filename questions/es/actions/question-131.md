---
question: "¿Cuál de las siguientes afirmaciones son verdaderas respecto a llamar workflows reutilizables frente a llamar acciones compuestas?"
documentation: "https://docs.github.com/en/actions/concepts/workflows-and-actions/reusing-workflow-configurations#key-differences-between-reusable-workflows-and-composite-actions"
---

- [x] Las acciones compuestas se llaman haciendo referencia a la carpeta que contiene su archivo `action.yml`.
> Como una acción, las acciones compuestas deben contener la mayor parte de su lógica dentro de un archivo `action.yml`. Para llamar a la acción compuesta, se debe apuntar a donde se encuentra su archivo `action.yml` (esto incluye la raíz. Por ejemplo, para llamar a una acción compuesta que se encuentra en la raíz del mismo repositorio que el workflow que la llama, se usaría la sintaxis `uses: ./`).
- [ ] Los workflows reutilizables se llaman haciendo referencia a la carpeta que contiene su archivo `action.yml`.
> Los workflows reutilizables son archivos regulares `.yml` o `.yaml` que se almacenan en `.github/workflows`. No tienen un archivo `action.yml`.
- [x] Las acciones compuestas deben ser llamadas como un paso dentro de un job.
> Las acciones compuestas (como cualquier otra acción) se llaman desde un paso dentro de un job del workflow; en otras palabras, no necesitas un job específico del workflow solo para llamar a una acción compuesta.
- [x] Los workflows reutilizables deben ser llamados a nivel de job del workflow (no desde el nivel de paso).
> Los pasos dentro de un job de un workflow no pueden llamar a un workflow reutilizable. Un workflow reutilizable debe ser llamado por un job individual dentro del workflow que lo llama. Esto puede resultar en que uno o más jobs se ejecuten en el workflow que llama (dichos jobs se pueden ver en las ejecuciones de workflows en la interfaz de usuario de GitHub Actions).
- [ ] Los secretos pueden pasarse tanto a los workflows reutilizables como a las acciones compuestas usando el bloque `uses.secrets`.
> Solo los workflows reutilizables pueden ser llamados usando el bloque `secrets`. Para pasar secretos a una acción compuesta, se deben usar soluciones alternativas (como pasar el secreto como una entrada).
- [ ] Solo los workflows reutilizables pueden aceptar entradas.
> Tanto los workflows reutilizables como las acciones compuestas pueden aceptar entradas.
- [x] Los workflows reutilizables pueden utilizar un tipo de runner diferente al del workflow que los llama, mientras que las acciones compuestas no.
> Los workflows reutilizables tienen jobs como cualquier otro workflow, y esos jobs pueden especificar un tipo de runner diferente mediante la clave `jobs.runs-on`. Las acciones compuestas heredan el entorno del runner del job del workflow que las llama.
